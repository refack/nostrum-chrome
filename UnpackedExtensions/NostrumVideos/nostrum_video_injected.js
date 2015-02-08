'use strict';
/*global window,document,location,EventTarget,HTMLMediaElement */
var RANDOM = Math.floor(Math.random() * 1234567890);
var CONTAINER_ID = 'download-youtube-video' + RANDOM;
var BUTTON_ID = 'download-youtube-video-button' + RANDOM;
var CONTROL_BUTTON_ID = 'DLUtube-control-button' + RANDOM;
var FORMAT_LABEL = {
    '_22': 'MP4 720p (HD)',
    '_45': 'WebM 720p (HD)',
    '_44': 'WebM 480p',
    '_18': 'MP4 360p',
    '_43': 'WebM 360p',
    '_37': 'MP4 1080p (HD)',
    '_46': 'WebM 1080p (HD)',
    '_38': 'MP4 4K (HD)',
    '_34': 'FLV 360p',
    '_35': 'FLV 480p',
    '_5': 'FLV 240p',
    '_17': '3GPP L0',
    '_36': '3GPP L1'
};


EventTarget.prototype.__addEventListener = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function monkeyAttachEvent(type, originalHandler, capture) {
    if (type != "contextmenu")
        this.__addEventListener(type, originalHandler, capture);
    else
        this.__addEventListener(type, function monkeyHandler(e) {
            if (e.ctrlKey) return;
            return originalHandler.call(this, e);
        }, capture);
};


if (~location.href.indexOf('youtube')) {
    document.addEventListener('DOMContentLoaded', function (e) {
        document.addEventListener('DOMNodeInserted', function (e) { if (e.target.nodeName == 'SCRIPT') parseUTube(e); });
        parseUTube({target: e.target.documentElement});
    });
}


document.addEventListener('DOMContentLoaded', function (e) {
    removeBlockers({target: e.target.documentElement});
    document.addEventListener('DOMNodeInserted', removeBlockers);
});

if (~location.href.indexOf('&list=') && ~location.href.indexOf('&index='))
    window.__global_clicked = true;

document.addEventListener('DOMNodeInserted', stopPlay);
document.addEventListener('click', function () {
    window.__global_clicked = true;
    return true;
}, true);


var _HTMLVideoElement_CTOR = window.HTMLVideoElement.prototype.constructor;
window.HTMLVideoElement.prototype.constructor = function () {
    console.log('HTMLVideoElement ctor hit');
    _HTMLVideoElement_CTOR.apply(this, arguments);
};

function stopPlay(e) {
    if (!e.target.querySelectorAll) return;
    var vids = [].slice.call(e.target.querySelectorAll('video, audio, source'));
    if (e.target instanceof HTMLMediaElement) vids.push(e.target);
    vids.forEach(function (vid) {
        if (vid.__nostrum_paused) return;
        vid.__nostrum_paused = true;
        console.log("stopPlay name:[%s] id:[%s] class:[%s]", vid.name, vid.id, vid.className);
        if (vid.player) {
            if (vid.player.options) {
                vid.player.options.autoplay = false;
                delete vid.player.options.ads;
            }
            try {
                vid.player.pause();
            } catch (e) {}
        }
        vid.autoplay = false;
        try {
            vid.pause();
        } catch (e) {}
        vid.addEventListener('error', onEventPauser);
        vid.addEventListener('loadedmetadata', onEventPauser);
        vid.addEventListener('loadeddata', onEventPauser);
        vid.addEventListener('canplay', onEventPauser);
        vid.addEventListener('canplaythrough', onEventPauser);
        vid.addEventListener('load', onEventPauser);
        vid.addEventListener('play', onEventPauser);
        vid.addEventListener('playing', onEventPauser);
        vid.addEventListener('waiting', onEventPauser);
    });
}

function onEventPauser(e) {
    //jshint -W040
    if (this.paused) return;
    if (window.__global_clicked) return;
    console.log("on play - pausing", this.name, this.id, this.className);
    e.preventDefault();
    this.pause();
}


function removeBlockers(e) {
    if (!e.target.querySelectorAll || e.target.tagName in {SCRIPT: 1, VIDEO: 1}) return true;
    var newElems = [].slice.call(e.target.querySelectorAll('*'))
        .concat([e.target])
        .filter(function (el) { return el.tagName !== 'VIDEO' && !el.querySelectorAll('video').length; });
    var vidRects = [].slice.call(e.target.ownerDocument.getElementsByTagName('video'))
        .map(function (el) {
            return el.getBoundingClientRect();
        })
        .filter(function (rect) {
            return rect.width || rect.height;
        });
    newElems.forEach(function (el) {
        var otherRect = el.getBoundingClientRect();
        var isOverlay = vidRects.some(function (vidRect) {
            return (
            Math.abs(vidRect.top - otherRect.top) < 5 &&
            Math.abs(vidRect.right - otherRect.right) < 5 &&
            Math.abs(vidRect.bottom - otherRect.bottom) < 5 &&
            Math.abs(vidRect.left - otherRect.left) < 5
            );
        });
        if (isOverlay)
            el.style.pointerEvents = 'none';
    });
    return true;
}


function parseUTube(e) {
    if (!e.target.innerHTML.match(/url_encoded_fmt_stream_map/))
        return;

    var theDoc = e.target.ownerDocument;
    if (theDoc.getElementById(CONTROL_BUTTON_ID) || theDoc.getElementById(BUTTON_ID)) return;

    var textDirection = 'left';
    if (theDoc.body.getAttribute('dir') === 'rtl') {
        textDirection = 'right';
    }

    var videoPlayer = theDoc.getElementById('watch7-player');
    var videoFormatsMatches = (videoPlayer) ?
        videoPlayer.innerHTML.match(/(?:"|&amp;)url_encoded_fmt_stream_map=([^(&|$)]+)/) :
        (e.target.innerHTML).match(/"url_encoded_fmt_stream_map":\s*"([^"]+)"/);
    var videoFormats = videoFormatsMatches && videoFormatsMatches[1];


// video title
    var videoTitle = theDoc.title || 'video';
    videoTitle = videoTitle.replace(/\s*\-\s*YouTube$/i, '');
    videoTitle = videoTitle.replace(/[#"\?:\*]/g, '').replace(/[&\|\\\/]/g, '_').replace(/'/g, '\'').replace(/^\s+|\s+$/g, '').replace(/\.+$/g, '');

// parse the formats map
    var sep1 = '%2C', sep2 = '%26', sep3 = '%3D';
    if (videoFormats.indexOf(',') > -1) {
        sep1 = ',';
        sep2 = (videoFormats.indexOf('&') > -1) ? '&' : '\\u0026';
        sep3 = '=';
    }

    var videoURL = {};
    var videoFormatsGroup = videoFormats.split(sep1);
    for (var i = 0; i < videoFormatsGroup.length; i++) {
        var videoFormatsElem = videoFormatsGroup[i].split(sep2);
        var videoFormatsPair = [];
        for (var j = 0; j < videoFormatsElem.length; j++) {
            var pair = videoFormatsElem[j].split(sep3);
            if (pair.length === 2) {
                videoFormatsPair[pair[0]] = pair[1];
            }
        }
        if (!videoFormatsPair['url']) continue;
        var url = decodeURIComponent(decodeURIComponent(videoFormatsPair['url'])).replace(/\\\//g, '/').replace(/\\u0026/g, '&');
        if (!videoFormatsPair['itag']) continue;
        var itag = videoFormatsPair['itag'];
        if (videoFormatsPair['sig']) {
            url = url + '&signature=' + videoFormatsPair['sig'];
        } else if (videoFormatsPair['s']) {
            var sigA, sigB, sig = videoFormatsPair['s'];
            if (sig.length === 87) {
                sig = sig.substr(46, 39).split('').reverse().join('') + sig.substr(4, 1) +
                sig.substr(44, 1) + sig.substr(9, 35).split('').reverse().join('') + sig.substr(6, 1) +
                sig.substr(7, 1) + sig.substr(3, 1) + sig.substr(2, 1) + sig.substr(45, 1);
                url = url + '&signature=' + sig;
            } else if (sig.length === 86) {
                sigA = sig.substr(44, 40).split('').reverse().join('');
                sigB = sig.substr(3, 40).split('').reverse().join('');
                sig = sigA.substr(34, 1) + sigA.substr(1, 19) + sigB.substr(39, 1) + sigA.substr(21, 8) +
                sigA.substr(0, 1) + sigA.substr(30, 4) + sigA.substr(29, 1) + sigA.substr(35, 5) +
                sig.substr(43, 1) + sigB.substr(0, 39) + sigA.substr(20, 1);
                url = url + '&signature=' + sig;
            } else if (sig.length === 82) {
                sigA = sig.substr(42, 38).split('').reverse().join('');
                sigB = sig.substr(3, 38).split('').reverse().join('');
                sig = sigA.substr(34, 1) + sigA.substr(1, 15) + sigB.substr(37, 1) + sigA.substr(17, 12) +
                sigA.substr(0, 1) + sigA.substr(30, 4) + sigA.substr(29, 1) + sigA.substr(35, 3) +
                sig.substr(41, 1) + sigB.substr(0, 37) + sigA.substr(16, 1);
                url = url + '&signature=' + sig;
            }
        }
        if (url.toLowerCase().indexOf('http') === 0) { // validate URL
            videoURL[itag] = url + '&title=' + videoTitle;
        }
    }

// find parent container
    var controls = theDoc.querySelector('.html5-player-chrome');
    if (controls) {
        var controlButInner = theDoc.createElement('div');
        controlButInner.setAttribute('class', '');
        controlButInner.appendChild(generateDlMenu(videoURL, true));
        controlButInner.setAttribute('style', 'display:none;');
        controlButInner.isVisible = false;
        controlButInner.setAttribute('class', 'ytp-menu-container');
        controlButInner.setAttribute('role', 'menu');
        controlButInner.setAttribute('aria-hidden', 'true');

        var controlsContainer = theDoc.querySelector('.html5-video-controls');
        controlsContainer.appendChild(controlButInner);

        var controlBut = theDoc.createElement('div');
        controlBut.setAttribute('class', 'ytp-button ytp-button-watch-later');
        controlBut.setAttribute('style', 'background: url(' + window.DL_ICON_URL + ') center no-repeat;');
        controlBut.setAttribute('role', 'button');
        controlBut.setAttribute('aria-haspopup', 'true');
        controlBut.setAttribute('id', CONTROL_BUTTON_ID);
        controlBut.addEventListener('click', function () {
            var style = (controlButInner.isVisible) ? 'display:none;' : 'bottom:160px; right:200px;';
            controlButInner.setAttribute('style', style);
            controlButInner.isVisible = !controlButInner.isVisible;
        });
        controls.appendChild(controlBut);
    }

    var parentElement = theDoc.getElementById('watch8-secondary-actions');
    if (parentElement) {
        // generate download code
        var spanButton = theDoc.createElement('span');
        spanButton.setAttribute('class', 'yt-uix-button-content');
        spanButton.appendChild(theDoc.createTextNode("Download "));

        var imgButton = theDoc.createElement('img');
        imgButton.setAttribute('class', 'yt-uix-button-arrow');
        imgButton.setAttribute('src', '//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif');

        var mainSpan = theDoc.createElement('span');
        mainSpan.appendChild(spanButton);
        mainSpan.appendChild(imgButton);
        mainSpan.appendChild(generateDlMenu(videoURL));

        var buttonElement = theDoc.createElement('button');
        buttonElement.setAttribute('id', BUTTON_ID);
        buttonElement.setAttribute('class', 'yt-uix-button yt-uix-tooltip yt-uix-button-empty yt-uix-button-text');
        buttonElement.setAttribute('style', 'margin-top:4px; margin-left:' + ((textDirection === 'left') ? 5 : 10) + 'px;');
        buttonElement.setAttribute('data-tooltip-text', 'Download this video');
        buttonElement.addEventListener('click', function () {return false;});
        buttonElement.setAttribute('type', 'button');
        buttonElement.setAttribute('role', 'button');
        buttonElement.appendChild(mainSpan);

        // add the button
        var containerSpan = theDoc.createElement('span');
        containerSpan.setAttribute('id', CONTAINER_ID);
        containerSpan.appendChild(theDoc.createTextNode(' '));
        containerSpan.appendChild(buttonElement);

        parentElement.appendChild(containerSpan);
    }
}


function generateDlMenu(videoURL, isShow) {
    var listItems = document.createElement('ol');
    listItems.hide = function () { this.setAttribute('style', 'display:none;'); }.bind(listItems);
    if (!isShow) listItems.hide();
    listItems.setAttribute('class', 'yt-uix-button-menu');
    for (var i in FORMAT_LABEL) {
        var label = FORMAT_LABEL[i];
        var code = i.replace('_', '');
        var u = videoURL[code];
        if (!u) continue;
        var listItem = document.createElement('li');
        var listLink = document.createElement('a');
        listLink.setAttribute('style', 'text-decoration:none;');
        listLink.setAttribute('href', u);
        listLink.setAttribute('class', 'yt-uix-button-menu-item');
        listLink.appendChild(document.createTextNode(label));
        listLink.addEventListener('click', listItems.hide);
        listItem.appendChild(listLink);
        listItems.insertBefore(listItem, listItems.firstChild);
    }
    return listItems;
}


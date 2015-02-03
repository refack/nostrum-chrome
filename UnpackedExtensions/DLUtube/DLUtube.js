'use strict';
/*global document,location,chrome */

var scp = document.createElement('script');
scp.setAttribute('src', chrome.extension.getURL('contextmenu_fix_injected.js'));
document.documentElement.appendChild(scp);

if (~location.href.indexOf('youtube')) {
    document.addEventListener('DOMContentLoaded', function (e) { changeHandler({target: e.target.documentElement}); });
    document.addEventListener('DOMNodeInserted', function (e) { if (e.target.nodeName == 'SCRIPT') changeHandler(e); });
}

if (!~location.href.indexOf('&list=') || !~location.href.indexOf('&index='))
    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(stopPlay, 0);
        setTimeout(stopPlay, 100);
        setTimeout(stopPlay, 200);
    });


var DL_CONTROL_IMG_URI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAMAAACDd7esAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMWUyZjIyNS1iNDQzLTFhNDgtYjEzYy0wMDUxYzlkOGY5Y2IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Nzk3Qzg3QThBQTFBMTFFNDg1NzhCNTY3QjIxNjFCQkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Nzk3Qzg3QTdBQTFBMTFFNDg1NzhCNTY3QjIxNjFCQkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZjMxZTgyYzQtMjNiMi05NTRmLWE3YTItMDdlN2JkYzI4OTU5IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjcxMjM4YzAtYTk1My0xMWU0LWE3MzQtYjc0N2M0OTU1MjZkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3Oy79QAAAEJQTFRFjo6OGxsbhoaGJCQkIiIiAQEBFRUVCAgIampqVVVVGBgYgICACwsLERERNTU1BAQEKSkpY2NjWVlZRkZGfHx8EhIStwBAXQAAAEVJREFUeNpUyUcSgDAQA8ER2SQT//9VHNYFzKlLwl9YO8tavKF+yHRCXZ1YNcF2OEWnI8zRmg84lT3eTDKXfm55+/gRYABwwAFC7nQOVgAAAABJRU5ErkJggg==';
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
    '_5':  'FLV 240p',
    '_17': '3GPP L0',
    '_36': '3GPP L1'
};


function stopPlay() {
    var videos = document.getElementsByTagName('video');
    [].forEach.call(videos, function (vid) {
        vid.autoplay = false;
        vid.pause();
    });
}


function generateDlMenu(videoURL, isShow) {
    var listItems = document.createElement('ol');
    if (!isShow) listItems.setAttribute('style', 'display:none;');
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
        listItem.appendChild(listLink);
        listItems.insertBefore(listItem, listItems.firstChild);
    }
    return listItems;
}


function changeHandler(e) {
    if (!~location.href.indexOf('&list=') || !~location.href.indexOf('&index=')) {
        stopPlay();
        setTimeout(stopPlay, 0);
        setTimeout(stopPlay, 100);
        setTimeout(stopPlay, 200);
    }

    if (!e.target.innerHTML.match(/url_encoded_fmt_stream_map/))
        return;

    var document = e.target.ownerDocument;
    if (document.getElementById(CONTROL_BUTTON_ID) || document.getElementById(BUTTON_ID)) return;

    var textDirection = 'left';
    if (document.body.getAttribute('dir') === 'rtl') {
        textDirection = 'right';
    }

    var videoPlayer = document.getElementById('watch7-player');
    var videoFormatsMatches = (videoPlayer) ?
        videoPlayer.innerHTML.match(/(?:"|&amp;)url_encoded_fmt_stream_map=([^(&|$)]+)/) :
        (e.target.innerHTML).match(/"url_encoded_fmt_stream_map":\s*"([^"]+)"/);
    var videoFormats = videoFormatsMatches && videoFormatsMatches[1];


// video title
    var videoTitle = document.title || 'video';
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
    var controls = document.querySelector('.html5-player-chrome');
    if (controls) {
        var controlButInner = document.createElement('div');
        controlButInner.setAttribute('class', '');
        controlButInner.appendChild(generateDlMenu(videoURL, true));
        controlButInner.setAttribute('style', 'display:none;');
        controlButInner.isVisible = false;
        controlButInner.setAttribute('class', 'ytp-menu-container');
        controlButInner.setAttribute('role', 'menu');
        controlButInner.setAttribute('aria-hidden', 'true');

        var controlsContainer = document.querySelector('.html5-video-controls');
        controlsContainer.appendChild(controlButInner);

        var controlBut = document.createElement('div');
        controlBut.setAttribute('class', 'ytp-button ytp-button-watch-later');
        controlBut.setAttribute('style', 'background: url(' + DL_CONTROL_IMG_URI + ') center no-repeat;');
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

    var parentElement = document.getElementById('watch8-secondary-actions');
    if (parentElement) {
        // generate download code
        var spanButton = document.createElement('span');
        spanButton.setAttribute('class', 'yt-uix-button-content');
        spanButton.appendChild(document.createTextNode("Download "));

        var imgButton = document.createElement('img');
        imgButton.setAttribute('class', 'yt-uix-button-arrow');
        imgButton.setAttribute('src', '//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif');

        var mainSpan = document.createElement('span');
        mainSpan.appendChild(spanButton);
        mainSpan.appendChild(imgButton);
        mainSpan.appendChild(generateDlMenu(videoURL));

        var buttonElement = document.createElement('button');
        buttonElement.setAttribute('id', BUTTON_ID);
        buttonElement.setAttribute('class', 'yt-uix-button yt-uix-tooltip yt-uix-button-empty yt-uix-button-text');
        buttonElement.setAttribute('style', 'margin-top:4px; margin-left:' + ((textDirection === 'left') ? 5 : 10) + 'px;');
        buttonElement.setAttribute('data-tooltip-text', 'Download this video');
        buttonElement.addEventListener('click', function () {return false;});
        buttonElement.setAttribute('type', 'button');
        buttonElement.setAttribute('role', 'button');
        buttonElement.appendChild(mainSpan);

        // add the button
        var containerSpan = document.createElement('span');
        containerSpan.setAttribute('id', CONTAINER_ID);
        containerSpan.appendChild(document.createTextNode(' '));
        containerSpan.appendChild(buttonElement);

        parentElement.appendChild(containerSpan);
    }
}

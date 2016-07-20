'use strict';
/*global window */
(function (global, location, document, documentElement) {
    if (
        location.href.includes('&list=') && location.href.includes('&index=') ||
        location.href.includes('plus.google.com/hangouts/') ||
        location.hostname.includes('photos.google.com')
    ) {
        global.__nostrum_no_remove = true;
        global.__global_clicked = true;
        return;
    }


    global.NodeList.prototype.toArray = function toArray() { return Array.prototype.slice.call(this); };
    const DL_ICON_URL = document.getElementById('__nostrum_video_injected').dataset.iconurl;
    const RANDOM = Math.floor(Math.random() * 1234567890);
    const CONTAINER_ID = 'download-youtube-video' + RANDOM;
    const BUTTON_ID = 'download-youtube-video-button' + RANDOM;
    const CONTROL_BUTTON_ID = 'DLUtube-control-button' + RANDOM;

    manipulate_plugins();
    handle_youtube();
    set_for_load();



    function set_for_load() {
        if (document.readyState === "interactive")
            handleDomContentLoaded({target: document});
        else
            global.addEventListener('load', handleDomContentLoaded);
    }


    function handle_youtube() {
        // const EventTarget = global.EventTarget;
        // EventTarget.__addEventListener = EventTarget.prototype.addEventListener;
        // EventTarget.prototype.addEventListener = function monkeyAttachEvent(type, originalHandler, capture) {
        //     function monkeyHandler(e) {
        //         if (e.ctrlKey) return;
        //         return originalHandler.call(target, e);
        //     }
        //
        //     const target = this || global;
        //     const handler = (type == "contextmenu") ? monkeyHandler : originalHandler;
        //     EventTarget.__addEventListener.call(target, type, handler, capture);
        // };

        document.addEventListener('mousedown', userClickMarker, true);
        document.querySelectorAll('video, audio, source').toArray().forEach(stopPlay.bind(global, "document_start"));
        documentElement.addEventListener('DOMNodeInserted', function (e) {
            if (e.target.nodeName in {VIDEO: 1, AUDIO: 1, SOURCE: 1}) {
                stopPlay(e.type, e.target);
            } else if (e.target.querySelectorAll) {
                e.target.querySelectorAll('video, audio, source').toArray().forEach(stopPlay.bind(global, e.type));
            }
        });
    }


    function handleDomContentLoaded() {
        // kill_jw_click_blocker
        document.querySelectorAll('.jwplayer').toArray().forEach(e => e.oncontextmenu = null);

        // removeBlockers({target: e.target.documentElement});

        if (!location.hostname.includes('www.youtube')) return;

        manipulateYouTube();
        parseUTube({target: document}, true);
        if ('__NVI' in document) {
            createControlButton(document, document['__NVI']);
            createMenuOption(document, document['__NVI']);
        } else {
            document.addEventListener('DOMNodeInserted', parseUTube);
        }
    }


    function manipulateYouTube() {
        const annOffButton = document.querySelector("div.ytp-settings-menu div.ytp-menuitem:nth-child(2)");
        if (annOffButton && annOffButton.getAttribute("aria-checked") === 'true') annOffButton.click();


        const pauseButton = document.querySelector("button.ytp-play-button");
        const observer = new MutationObserver(
            function (x) {
                console.log('93', pauseButton.getAttribute("aria-label"));
                console.log(x);
                if (pauseButton.getAttribute("aria-label") !== "Pause" && pauseButton.notPause) return;
                observer.disconnect();
                console.log('clicking');
                pauseButton.click();
            }
        );
        if (pauseButton) {
            pauseButton.notPause = pauseButton.getAttribute("aria-label") !== "Pause";
            console.log('103', pauseButton.getAttribute("aria-label"));
            observer.observe(pauseButton, {attributes: true});
        }
    }


    function userClickMarker(e) {
        // jshint -W040
        if (e.screenX === 0 && e.screenY === 0 && e.layerY < 0) return true;
        global.__global_clicked = true;
        this.removeEventListener('mousedown', userClickMarker, true);
        return true;
    }


    function stopPlay(eType, elem) {
        if (elem.__nostrum_paused) return;
        elem.__nostrum_paused = true;
        console.log("stopPlay on:[%s], name:[%s] id:[%s] class:[%s]", eType, elem.name, elem.id, elem.className);
        if (elem.player) {
            if (elem.player.options) {
                elem.player.options.autoplay = false;
                delete elem.player.options.ads;
            }
            try {
                elem.player.pause();
            } catch (e) {}
        }
        elem.autoplay = false;
        elem.loop = false;
        elem.controls = true;
        try {
            elem.pause();
        } catch (e) {}
        elem.addEventListener('loadeddata', onEventPauser);
        elem.addEventListener('canplay', onEventPauser);
        elem.addEventListener('play', onEventPauserPreventer);
    }

    function onEventPauser(e) {
        //jshint -W040
        if (this.paused) return true;
        if (global.__global_clicked) return true;
        global.__global_clicked = true;
        console.log("on: [%s] - pausing element: name:[%s] id:[%s] class:[%s]", e.type, this.name, this.id, this.className);
        this.pause();
    }


    function onEventPauserPreventer(e) {
        if (global.__global_clicked) return true;
        //jshint -W040
        if (onEventPauser.call(this, e)) return true;
        e.preventDefault();
        return false;
    }


    function parseUTube(e, isDomLoaded) {
        if (!e || !e.target || e.target.nodeName == "#text") return;

        const elems = (e.target.nodeName == 'SCRIPT') ? [e.target] : e.target.querySelectorAll("script").toArray();
        const vidInfoElem = elems.filter(function (e) {
            const inner = e.innerHTML || "";
            return inner.match(stamp());
        })[0];
        if (!vidInfoElem) return;

        const ownerDocument = vidInfoElem.ownerDocument;
        ownerDocument.documentElement.removeEventListener('DOMNodeInserted', parseUTube);

        ownerDocument.__NVI = parseNewStyle(vidInfoElem);
        ownerDocument.__NVI.videoTitle = (ownerDocument.title || 'video')
            .replace(/^[\s.\-]+|[\s\.\-]*(YouTube)?$/gi, '')
            .replace(/["\?:\*\\\/]/g, ' _ ')
            .replace(/\s+/g, ' ')
            .replace(/./g, function (m) { return m.charCodeAt(0) > 8000 ? '' : m; });

        if (!isDomLoaded) {
            createControlButton(ownerDocument, ownerDocument.__NVI);
            createMenuOption(ownerDocument, ownerDocument.__NVI);
        }
    }


    //noinspection JSUnusedLocalSymbols
    function removeBlockers(e) {
        if (global.__nostrum_no_remove) return;

        if (!e.target.querySelectorAll || e.target.tagName in {SCRIPT: 1, VIDEO: 1}) return true;
        const newElems = [].slice.call(e.target.querySelectorAll('*'))
            .concat([e.target])
            .filter(function (el) { return el.tagName !== 'VIDEO' && !el.querySelectorAll('video').length; });
        const vidRects = [].slice.call(e.target.ownerDocument.getElementsByTagName('video'))
            .map(function (el) {
                return el.getBoundingClientRect();
            })
            .filter(function (rect) {
                return rect.width || rect.height;
            });
        newElems.forEach(function (el) {
            const otherRect = el.getBoundingClientRect();
            const isOverlay = vidRects.some(function (vidRect) {
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


    function parseNewStyle(element) {
        function ht(a) {
            const gt = {
                Mu: function (a, b) {
                    a.splice(0, b);
                },
                hQ: function (a, b) {
                    const c = a[0];
                    a[0] = a[b % a.length];
                    a[b] = c;
                },
                Rb: function (a) {
                    a.reverse();
                }
            };

            a = a.split("");
            gt.hQ(a, 70);
            gt.Rb(a, 40);
            gt.hQ(a, 66);
            gt.Mu(a, 1);
            gt.hQ(a, 70);
            gt.hQ(a, 26);
            gt.Rb(a, 37);
            gt.hQ(a, 48);
            return a.join("");
        }

        const videoInfo = {};
        const docu = element.ownerDocument;
        videoInfo.textDirection = docu.body.getAttribute('dir') === 'rtl' ? 'right' : 'left';

        const videoFormatsMatches = element.innerHTML.match(/"url_encoded_fmt_stream_map":\s*"([^"]+)"/);
        if (!videoFormatsMatches) return null;
        const videoFormatsRaw = videoFormatsMatches[1];

        const sep1 = ',', sep2 = '\\u0026', sep3 = '=';
        videoInfo.videoURLs = videoFormatsRaw.split(sep1).map(function (vid) {
            const vidInfo = vid.split(sep2)
                .map(function (p) { return p.split(sep3); })
                .reduce(function (seed, pp) {
                    seed[pp[0]] = decodeURIComponent(pp[1]);
                    return seed;
                }, {});
            if (vidInfo.s)
                vidInfo.url += '&signature=' + ht(vidInfo.s);
            return vidInfo;
        });
        return videoInfo;
    }


    function createMenuOption(theDoc, videoInfo) {
// mangle secondary actions
        const parentElement = theDoc.getElementById('watch8-secondary-actions');
        if (parentElement) {
            // the dom structure is to enlist the exsisting popup framework
            const spanButton = theDoc.createElement('span');
            spanButton.setAttribute('class', 'yt-uix-button-content');
            spanButton.appendChild(theDoc.createTextNode("Download "));

            const imgButton = theDoc.createElement('img');
            imgButton.setAttribute('class', 'yt-uix-button-arrow');
            imgButton.setAttribute('src', '//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif');

            const mainSpan = theDoc.createElement('span');
            mainSpan.appendChild(spanButton);
            mainSpan.appendChild(imgButton);
            mainSpan.appendChild(generateDlMenu(videoInfo));

            const buttonElement = theDoc.createElement('button');
            buttonElement.setAttribute('id', BUTTON_ID);
            buttonElement.setAttribute('class', 'yt-uix-button yt-uix-tooltip yt-uix-button-empty yt-uix-button-text');
            buttonElement.setAttribute('style', 'margin-top:4px; margin-left:' + (videoInfo.textDirection === 'left' ? 5 : 10) + 'px;');
            buttonElement.setAttribute('data-tooltip-text', 'Download this video');
            buttonElement.addEventListener('click', function () {return false;});
            buttonElement.setAttribute('type', 'button');
            buttonElement.setAttribute('role', 'button');
            buttonElement.appendChild(mainSpan);

            // add the button
            const containerSpan = theDoc.createElement('span');
            containerSpan.setAttribute('id', CONTAINER_ID);
            containerSpan.appendChild(theDoc.createTextNode(' '));
            containerSpan.appendChild(buttonElement);

            parentElement.appendChild(containerSpan);
        }
    }


    function createControlButton(theDoc, videoInfo) {
// mangle controls container
        const controls = theDoc.querySelector('.html5-player-chrome');
        if (controls) {
            const controlButInner = theDoc.createElement('div');
            controlButInner.setAttribute('class', '');
            controlButInner.appendChild(generateDlMenu(videoInfo, true));
            controlButInner.setAttribute('style', 'display:none;');
            controlButInner.isVisible = false;
            controlButInner.setAttribute('class', 'ytp-menu-container');
            controlButInner.setAttribute('role', 'menu');
            controlButInner.setAttribute('aria-hidden', 'true');
            controlButInner.setAttribute('style', 'bottom:325px; right:260px;');
            controlButInner.setAttribute('hidden', 'true');

            const controlsContainer = theDoc.querySelector('.html5-video-controls');
            controlsContainer.appendChild(controlButInner);

            const controlBut = theDoc.createElement('div');
            controlBut.setAttribute('class', 'ytp-button ytp-button-watch-later');
            controlBut.setAttribute('style', 'background: url(' + DL_ICON_URL + ') center no-repeat;');
            controlBut.setAttribute('role', 'button');
            controlBut.setAttribute('aria-haspopup', 'true');
            controlBut.setAttribute('id', CONTROL_BUTTON_ID);
            controlBut.addEventListener('click', function () {
                controlButInner.hidden = !controlButInner.hidden;
            });
            controls.appendChild(controlBut);
        }
    }


    function generateDlMenu(videoInfo, isShow) {
        const listItems = document.createElement('ol');
        listItems.hide = function () { if (this.parentNode) this.parentNode.hidden = true; }.bind(listItems);
        if (!isShow) listItems.hide();
        listItems.setAttribute('class', 'yt-uix-button-menu');
        videoInfo.videoURLs.forEach(function (vid) {
            let u = vid.url;
            if (!u) return;
            u += "&title=" + encodeURIComponent(videoInfo.videoTitle);
            const type = vid.type.split(';')[0].split('/').pop();
            const label = vid.quality + ' - ' + type;
            const listItem = document.createElement('li');
            const listLink = document.createElement('a');
            listLink.setAttribute('style', 'text-decoration:none;');
            listLink.setAttribute('href', u);
            listLink.setAttribute('class', 'yt-uix-button-menu-item');
            listLink.download = videoInfo.videoTitle + '.' + type;
            listLink.appendChild(document.createTextNode(label));
            listLink.addEventListener('click', listItems.hide);
            listItem.appendChild(listLink);
            listItems.insertBefore(listItem, listItems.firstChild);
        });
        return listItems;
    }


    function manipulate_plugins() {
        if (!(
            location.hostname.includes('mrskin.com')
            || location.hostname.includes('mako.co.il')
            || location.hostname.includes('cnn.com')
        )) return;
        Object.defineProperty(global.navigator, 'plugins', {value: []});
        Object.defineProperty(global.navigator, 'userAgent', {value: "Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53"});
    }


    function stamp() {
        const sf = String.fromCharCode,
            cc = c => c.charCodeAt(0),
            r1 = c => sf((c <= "Z" ? 90 : 122) >= (c = cc(c) + 13) ? c : c - 26);
        return "hey_rapbqrq_szg_fgernz_znc".replace(/[a-zA-Z]/g, r1);
    }
})(window, window.location, window.document, window.document.documentElement);

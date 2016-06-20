'use strict';
/*global window */
(function (document, extension, href, contentType) {
    if (window.parent !== window && window.innerWidth * window.innerHeight <= 10) return;
    if (href.includes('https://plus.google.com/hangouts/')) return;
    if (href.includes('photos.google.com')) return;
    if (contentType.substr(0, 4) !== 'text') return console.info('url ' + href + ' not text but ' + contentType);

    function onHead(e) {
        this && e && e.type && this.removeEventListener(e.type, onHead);

        const NOSTRUM_ID = '__nostrum_video_injected';
        if (document.getElementById(NOSTRUM_ID)) return true;
        const scp_injector = document.createElement('script');
        scp_injector.setAttribute('id', NOSTRUM_ID);
        scp_injector.setAttribute('src', extension.getURL('nostrum_video_injected.js'));
        scp_injector.dataset.iconurl = extension.getURL('nostrum_video_ico_trim.png');
        document.head.insertBefore(scp_injector, document.head.firstChild);
        return true;
    }

    if (document.head) {
        onHead();
    } else {
        document.documentElement.addEventListener('DOMNodeInserted', onHead);
    }
})(window.document, window.chrome.extension, window.location.href, window.document.contentType);

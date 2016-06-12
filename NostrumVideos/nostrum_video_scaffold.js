'use strict';
/*global document,chrome,location */
(function (document, chrome, location) {
    function onHead(e) {
        var head = e.currentTarget.querySelector('head');
        if (!head) return true;
        if (document.getElementById('__nostrum_video_injected')) return true;
        document.documentElement.removeEventListener(e.type, onHead);

        var scp_injector = document.createElement('script');
        scp_injector.setAttribute('id', '__nostrum_video_injected');
        scp_injector.setAttribute('src', chrome.extension.getURL('nostrum_video_injected.js'));
        scp_injector.dataset.iconurl = chrome.extension.getURL('nostrum_video_ico_trim.png');
        head.insertBefore(scp_injector, head.firstChild);
        return true;
    }

    if (location.href.includes('https://plus.google.com/hangouts/')) return;
    if (location.href.includes('photos.google.com')) return;
    if (document.contentType.substr(0, 4) !== 'text') return;
    document.documentElement.addEventListener('DOMNodeInserted', onHead);
})(document, chrome, location);

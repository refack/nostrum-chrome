'use strict';
/*global document,chrome */
function onHead(e) {
    var head = e.currentTarget.querySelector('head');
    if (!head) return true;

    // jshint -W040
    this.removeEventListener(e.type, onHead);

    var scp_injector = document.createElement('script');
    scp_injector.setAttribute('id', '__nostrum_video_injected');
    scp_injector.setAttribute('src', chrome.extension.getURL('nostrum_video_injected.js'));
    scp_injector.dataset.iconurl = chrome.extension.getURL('nostrum_video_ico_trim.png');
    head.insertBefore(scp_injector, head.firstChild);
    return true;
}
if (!~location.href.indexOf('https://plus.google.com/hangouts/'))
	document.documentElement.addEventListener('DOMNodeInserted', onHead);


'use strict';
/*global document,chrome */

var scp_global = document.createElement('script');
scp_global.appendChild(document.createTextNode('window.DL_ICON_URL = "' + chrome.extension.getURL('nostrum_video_ico_trim.png') + '"'));
document.documentElement.appendChild(scp_global);

var scp_injector = document.createElement('script');
scp_injector.setAttribute('src', chrome.extension.getURL('nostrum_video_injected.js'));
document.documentElement.insertBefore(scp_injector, document.documentElement.firstChild);

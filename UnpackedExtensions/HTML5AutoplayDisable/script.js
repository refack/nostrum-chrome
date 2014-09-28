// ==UserScript==
// @name		    Disable HTML5 Video Autoplay
// @description		All HTML5 videos autoplay disabled
// @author		    Refael Ackermann
// @match           *://*/*
// @version         1.0.0
// ==/UserScript==

function _stopPlay() {
	var autoplay = document.getElementsByTagName('video');
    for(i = 0; i < autoplay.length; i++) {
        autoplay[i].autoplay = false;
        autoplay[i].pause();
    }
};

if (~location.href.indexOf('&list=') && ~location.href.indexOf('&index='))
  return;

setTimeout(_stopPlay, 0);
setTimeout(_stopPlay, 50);
setTimeout(_stopPlay, 150);
setTimeout(_stopPlay, 250);
setTimeout(_stopPlay, 500);

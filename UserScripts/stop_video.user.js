// ==UserScript==
// @name		    Disable HTML5 Video Autoplay
// @description		All HTML5 videos autoplay disabled
// @Author		    Refael Ackermann
// @include		    *youtube.com
// @version         1.0.0
// ==/UserScript==

(function() {
	var autoplay = document.getElementsByTagName('video');
    for(i = 0; i < autoplay.length; i++) {
        autoplay[i].removeAttribute('autoplay');			
    }
})();
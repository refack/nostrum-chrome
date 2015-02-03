'use strict';
/*global window */
function stopPlay() {
    var videos = window.document.getElementsByTagName('video');
    [].forEach.call(videos, function (vid) {
        vid.autoplay = false;
        vid.pause();
    });
}

window.document.addEventListener('DOMContentLoaded', function () {
    if (~window.location.href.indexOf('&list=') && ~window.location.href.indexOf('&index='))
        return;

    setTimeout(stopPlay, 0);
    setTimeout(stopPlay, 50);
    setTimeout(stopPlay, 150);
    setTimeout(stopPlay, 250);
    setTimeout(stopPlay, 500);
});

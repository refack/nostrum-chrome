'use strict';
/*global document, chrome */

var map_a = [].reduce.call(
    document.querySelectorAll('a'),
    function (seed, a) {
        var h = a.href;
        if (h) (seed[h] = seed[h] || []).push(a);
        var dh = a.dataset.href;
        if (dh) (seed[dh] = seed[dh] || []).push(a);
        return seed;
    },
    {}
);
var httpRE = /^http/i;
var urls = Object.keys(map_a).filter(httpRE.exec.bind(httpRE));
if (urls.length) {
    chrome.runtime.sendMessage({resolve: urls}, function (visitedURLs) {
        visitedURLs.forEach(function (h) {
            map_a[h].forEach(function (a) {
                a.classList.add('nostrum-visited');
            });
        });
    });
}


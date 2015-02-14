'use strict';
/*global document, chrome */


var map_a = [].reduce.call(document.querySelectorAll('a'), function (seed, a) {
    var h = a.href;
    seed[h] = seed[h] || [];
    seed[h].push(a);
    return seed;
}, {});
var urls = Object.keys(map_a).filter(function (s) { return s.substring(0, 4) === 'http'; });
if (urls.length) {
    chrome.runtime.sendMessage({resolve: urls}, function (visited) {
        visited.forEach(function (h) {
            map_a[h].forEach(function (a) { a.classList.add('nostrum-visited'); });
        });
    });
}


// ==UserScript==
// @name           torrentz Magnetizer
// @namespace      links
// @description    add trackerless magnet links to torrentz (make infohash a magnet link)
// @match          *://*.torrentz.eu/*
// @match          *://*.torrentz.com/*
// @key            7x2w6eF6TYEGaRaPfHvGeHGfas97eGWqCPiTMagCzmo=
// @version        1.3
// @run_at         document_start
// ==/UserScript==
const HAS_MATCHER = /(?:^|>|\s)([0-9a-fA-F]{40})(?:$|<|\s)/;

document.addEventListener("DOMContentLoaded", function (event) {
    'use strict';
    var trzTitle = document.querySelectorAll("h2 span");
    var trzTrackers = document.querySelectorAll(".trackers dt a");
    var title = (trzTitle.length && trzTitle[0].innerHTML) || document.title.split(' › ')[0];
    var suffix = '';
    if (trzTitle.length && trzTrackers.length)
        suffix = '&' + [].map.call(trzTrackers, function (elem) {return 'tr=' + encodeURIComponent(elem.innerHTML);}).join('&');

    var spans = document.querySelectorAll(".trackers > div, td.lista");
    Array.prototype.filter.call(spans, function (elem) {
        var hash_match = HAS_MATCHER.exec(elem.innerHTML);
        if (!hash_match || !hash_match.length) return null;
        elem.hashMatch = hash_match[1];
        return elem;
    }).forEach(function (elem) {
        var magnet_hash_a_html = '<a href="magnet:?xt=urn:btih:' + elem.hashMatch + '&dn=' + encodeURIComponent(title) + suffix + '">' + elem.hashMatch + '</a>';
        elem.innerHTML = elem.innerHTML.replace(elem.hashMatch, magnet_hash_a_html);
  });
});

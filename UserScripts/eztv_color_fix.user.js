// ==UserScript==
// @name    EZTV color fix
// @match   http://eztv.it/*
// ==/UserScript==

GM_log("eztv")
GM_addStyle("a.epinfo:visited, a:visited{color: #a0b0c0;}");
GM_addStyle("a.low_relevance {opacity: 0.5; text-decoration: line-through;}");
var eps_a = document.getElementsByClassName('epinfo');
GM_log("eztv eps length = " + eps_a.length)
var low_relevance_pattern = /720|mvgroup/i
for (var i in eps_a) {
    var a = eps_a[i];
    if (a.title.search(low_relevance_pattern) != -1)
        a.classList.add("low_relevance");
}
// ==UserScript==
// @name    Improve colors in walla.co.il
// @match   http://*.walla.co.il/*
// ==/UserScript==

GM_addStyle("a.w3b:visited, a:visited{color:#F368F3;text-decoration:line-through;background-color:yellow;opacity:0.3;}");
GM_addStyle(".top_banner_outer, .wtable {display:none}");
var elements = document.querySelectorAll("div")
for (var i in elements) {
    var elem = elements[i];
    if (elem.id && elem.id.indexOf('inner_mega') != -1)
        elem.parentNode.removeChild(elem);
    if (elem.id && elem.id.indexOf('Fusion_holder') != -1) {
        var parent_fusion = elem.parentNode;
        parent_fusion.parentNode.removeChild(parent_fusion);
    }
}
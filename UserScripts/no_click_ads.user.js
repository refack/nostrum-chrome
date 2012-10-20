// ==UserScript==
// @name    Remove ad click handlers
// @match   http://*.walla.co.il/*
// @match   http://*.thepiratebay.se/*
// ==/UserScript==


// general (TPB)
document.onclick = null;

// The following is for walla
setTimeout(2000, function() {unsafeWindow.document.removeEventListener('click',unsafeWindow.und_pop);});
setTimeout(4000, function() {unsafeWindow.document.removeEventListener('click',unsafeWindow.und_pop);});
setTimeout(8000, function() {unsafeWindow.document.removeEventListener('click',unsafeWindow.und_pop);});
var fb_rec = document.getElementById('top5Content_2');
fb_rec && fb_rec.remove();

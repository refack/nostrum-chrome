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

document.addEventListener("DOMContentLoaded", function(event) { 
  var spans = document.querySelectorAll(".trackers > div");
  Array.prototype.forEach.call(spans, function(elem) {
      var hash_match = /[0-9a-fA-F]{40}/.exec(elem.innerHTML);
      if (!hash_match || !hash_match.length) return;
      var magnet_hash = hash_match[0];
      var title = encodeURIComponent(document.title.split(' › ')[0]);
      var magnet_hash_a_html = '<a href="magnet:?xt=urn:btih:' + magnet_hash + '&dn=' + title + '">' + magnet_hash + '</a>';
      elem.innerHTML = elem.innerHTML.replace(magnet_hash, magnet_hash_a_html);
  });
});
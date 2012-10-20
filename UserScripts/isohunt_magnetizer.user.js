// ==UserScript==
// @name           isohunt magnetizer
// @namespace      links
// @description    add trackerless magnet links to isohunt (make infohash a magnet link)
// @match          http://isohunt.com/torrent_details/*
// @key            7x2w6eF6TYEGaRaPfHvGeHGfas97eGWqCPiTMagCzmo=
// @version        1.1
// @run_at         document_end
// ==/UserScript==

;(function() {
  var ihc = document.getElementById('SL_desc');

  var ih = /[0-9a-fA-F]{40}/.exec(ihc.innerHTML)[0]

  var lnk = '<a href="magnet:?xt=urn:btih:' + ih + '">' + ih + '</a>';

  ihc.innerHTML = ihc.innerHTML.replace(ih, lnk);
  
})();

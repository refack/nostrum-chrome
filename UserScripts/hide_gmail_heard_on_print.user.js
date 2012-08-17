// ==UserScript==
// @name    Hide the Gmail header on print
// @match   https://mail.google.com/mail/ca/u/0/*view=pt*
// ==/UserScript==

(function() {
  var x = document.getElementsByTagName("table")[0];
  x.parentNode.removeChild(x);
})()
  
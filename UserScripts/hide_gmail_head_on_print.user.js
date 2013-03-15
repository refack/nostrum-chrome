// ==UserScript==
// @name    Hide the Gmail header on print
// @match   https://mail.google.com/mail/*view=pt*
// ==/UserScript==

var x = document.getElementsByTagName("table")[0];
x.parentNode.removeChild(x);
var y = document.getElementsByTagName("hr")[0];
y.parentNode.removeChild(y); 
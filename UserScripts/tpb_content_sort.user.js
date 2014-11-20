// ==UserScript==
// @name           TPB Table sort
// @description    Allows sorting corrent table
// @match          http://thepiratebay.se/*
// @version        1.0
// ==/UserScript==


/*!
 * tablesort v2.0.1 (2014-11-06)
 * http://tristen.ca/tablesort/demo
 * Copyright (c) 2014 ; Licensed MIT
*/!function(){function a(a,b){if(!a)throw new Error("Element not found");if("TABLE"!==a.tagName)throw new Error("Element must be a table");this.init(a,b||{})}a.prototype={init:function(a,d){var e,f=this;if(this.thead=!1,this.options=d,a.rows&&a.rows.length>0&&(a.tHead&&a.tHead.rows.length>0?(e=a.tHead.rows[a.tHead.rows.length-1],f.thead=!0):e=a.rows[0]),e){for(var g,h=function(){f.current&&f.current!==this&&(f.current.classList.contains(b)?f.current.classList.remove(b):f.current.classList.contains(c)&&f.current.classList.remove(c)),f.current=this,f.sortTable(this)},i=0;i<e.cells.length;i++){var j=e.cells[i];j.classList.contains("no-sort")||(j.classList.add("sort-header"),j.addEventListener("click",h,!1),j.classList.contains("sort-default")&&(g=j))}g&&(f.current=g,f.sortTable(g,!0))}},getFirstDataRowIndex:function(){return this.thead?0:1},sortTable:function(a,d){var e,f=this,m=a.cellIndex,n=i(a,"table"),o="",p=f.getFirstDataRowIndex();if(!(n.rows.length<=1)){for(;""===o&&p<n.tBodies[0].rows.length;)o=j(n.tBodies[0].rows[p].cells[m]),o=o.trim(),("<!--"===o.substr(0,4)||0===o.length)&&(o=""),p++;if(""!==o){var q=function(a,b){var c=j(a.cells[f.col]).toLowerCase(),d=j(b.cells[f.col]).toLowerCase();return c===d?0:d>c?1:-1},r=function(a,b){var c=j(a.cells[f.col]),d=j(b.cells[f.col]);return c=l(c),d=l(d),k(d,c)},s=function(a,b){var c=j(a.cells[f.col]).toLowerCase(),d=j(b.cells[f.col]).toLowerCase();return h(d)-h(c)};e=o.match(/^-?[£\x24Û¢´€]?\d+\s*([,\.]\d{0,2})/)||o.match(/^-?\d+\s*([,\.]\d{0,2})?[£\x24Û¢´€]/)||o.match(/^-?(\d)*-?([,\.]){0,1}-?(\d)+([E,e][\-+][\d]+)?%?$/)?r:g(o)?s:q,this.col=m;var t,u=[],v={},w=0;for(p=0;p<n.tBodies.length;p++)for(t=0;t<n.tBodies[p].rows.length;t++){var x=n.tBodies[p].rows[t];x.classList.contains("no-sort")?v[w]=x:u.push({tr:x,index:w}),w++}var y=f.options.descending?c:b,z=f.options.descending?b:c;d?a.classList.contains(y)||a.classList.contains(z)||a.classList.add(y):a.classList.contains(y)?(a.classList.remove(y),a.classList.add(z)):(a.classList.remove(z),a.classList.add(y));var A=function(a){return function(b,c){var d=a(b.tr,c.tr);return 0===d?b.index-c.index:d}},B=function(a){return function(b,c){var d=a(b.tr,c.tr);return 0===d?c.index-b.index:d}};a.classList.contains(c)?(u.sort(B(e)),u.reverse()):u.sort(A(e));var C=0;for(p=0;w>p;p++){var D;v[p]?(D=v[p],C++):D=u[p-C].tr,n.tBodies[0].appendChild(D)}}}},refresh:function(){void 0!==this.current&&this.sortTable(this.current,!0)}};var b="sort-up",c="sort-down",d=/(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\.?\,?\s*/i,e=/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/,f=/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i,g=function(a){return-1!==(-1!==a.search(d)||-1!==a.search(e)||a.search(-1!==f))&&!isNaN(h(a))},h=function(a){return a=a.replace(/\-/g,"/"),a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3"),new Date(a).getTime()},i=function(a,b){return null===a?null:1===a.nodeType&&a.tagName.toLowerCase()===b.toLowerCase()?a:i(a.parentNode,b)},j=function(a){var b=this;if("string"==typeof a||"undefined"==typeof a)return a;var c=a.getAttribute("data-sort")||"";if(c)return c;if(a.textContent)return a.textContent;if(a.innerText)return a.innerText;for(var d=a.childNodes,e=d.length,f=0;e>f;f++)switch(d[f].nodeType){case 1:c+=b.getInnerText(d[f]);break;case 3:c+=d[f].nodeValue}return c},k=function(a,b){var c=parseFloat(a),d=parseFloat(b);return a=isNaN(c)?0:c,b=isNaN(d)?0:d,a-b},l=function(a){return a.replace(/[^\-?0-9.]/g,"")};"undefined"!=typeof module&&module.exports?module.exports=a:window.Tablesort=a}();

<script>
  new Tablesort(document.getElementById('searchResult'));
</script>
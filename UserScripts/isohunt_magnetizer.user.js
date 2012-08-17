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

  var Base32={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",fromString:function(a){a=Base32._utf8_encode(a);var b=[];for(var c=a.length;c--;){b.unshift(a.charCodeAt(c))}return Base32.fromBytes(b)},fromHex:function(a){var b=[];var c=a.length;if(c%2!==0){return false}for(var d=0;d<c;d+=2){b.push(parseInt(a.substr(d,2),16))}return Base32.fromBytes(b)},fromBytes:function(a){if(a===false){return false}var b=[];var c=Base32._keyStr;var d=0,e=a.length;var f,g,h,i,j,k,l,m,n,o,p,q,r;while(d<e){f=a[d++];g=a[d++];h=a[d++];i=a[d++];j=a[d++];k=l=m=n=o=p=q=r=32;k=f>>3;l=(f&7)<<2|g>>6;if(g!==undefined){m=(g&63)>>1;n=(g&1)<<4|h>>4;if(h!==undefined){o=(h&15)<<1|i>>7;if(i!==undefined){p=(i&127)>>2;q=(i&3)<<3|j>>5;if(j!==undefined){r=j&31}}}}b.push(c[k],c[l],c[m],c[n],c[o],c[p],c[q],c[r])}return b.join("")},decode:function(a){var b="";var c,d,e;var f,g,h,i;var j=0;a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(j<a.length){f=this._keyStr.indexOf(a.charAt(j++));g=this._keyStr.indexOf(a.charAt(j++));h=this._keyStr.indexOf(a.charAt(j++));i=this._keyStr.indexOf(a.charAt(j++));c=f<<2|g>>4;d=(g&15)<<4|h>>2;e=(h&3)<<6|i;b=b+String.fromCharCode(c);if(h!=64){b=b+String.fromCharCode(d)}if(i!=64){b=b+String.fromCharCode(e)}}b=Base64._utf8_decode(b);return b},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");var b="";for(var c=0,d=a.length;c<d;c++){var e=a.charCodeAt(c);if(e<128){b+=String.fromCharCode(e)}else if(e>127&&e<2048){b+=String.fromCharCode(e>>6|192);b+=String.fromCharCode(e&63|128)}else{b+=String.fromCharCode(e>>12|224);b+=String.fromCharCode(e>>6&63|128);b+=String.fromCharCode(e&63|128)}}return b},_utf8_decode:function(a){var b="";var c=0;var d=c1=c2=0;while(c<a.length){d=a.charCodeAt(c);if(d<128){b+=String.fromCharCode(d);c++}else if(d>191&&d<224){c2=a.charCodeAt(c+1);b+=String.fromCharCode((d&31)<<6|c2&63);c+=2}else{c2=a.charCodeAt(c+1);c3=a.charCodeAt(c+2);b+=String.fromCharCode((d&15)<<12|(c2&63)<<6|c3&63);c+=3}}return b}}

  function fromInfoHash(ih) {
    var btih = Base32.fromHex(ih);
    if(btih) {
      return 'magnet:?xt=urn:btih:' + btih;
    }
    return false;
  }
  
  var ihc = document.getElementById('SL_desc');

  var ih = /[0-9a-fA-F]{40}/.exec(ihc.innerHTML)[0]

  var lnk = '<a href="' + fromInfoHash(ih) + '">' + ih + '</a>';

  ihc.innerHTML = ihc.innerHTML.replace(ih, lnk);
  
})();

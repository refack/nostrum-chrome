(function(){
  var styles = 'a.epinfo:visited, a:visited{color:#F368F3; background-color:yellow; text-decoration:line-through; opacity:0.3;}';
  var newSS = document.createElement('link');
  newSS.rel = 'stylesheet';
  newSS.href = 'data:text/css,' + escape(styles);
  document.documentElement.childNodes[0].appendChild(newSS);
})()
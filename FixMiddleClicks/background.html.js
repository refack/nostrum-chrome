function getOptions(){ return cachedO; }
function setOptions(o){	cachedO = o; saveOptions(); }

var cachedO = null;
loadOptions();


function loadOptions(){
	var defaultO = { color: null, ctrlLeft: true };
	var o = localStorage.o;
	cachedO = o ? JSON.parse(o) : defaultO; 
}


function saveOptions(){
	localStorage.o = JSON.stringify(cachedO);
}


function clone(o){
	return JSON.parse(JSON.stringify(o));
}
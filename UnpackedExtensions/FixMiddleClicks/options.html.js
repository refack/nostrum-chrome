function displayStatus(msg){
	status_display.nodeValue = msg;
	window.setTimeout(function(){ status_display.nodeValue = "\u00a0"; }, 750);
}


function saveOptions() {
	var col = debug_bgcolor.children[debug_bgcolor.selectedIndex].value;
	if(col==="none"){ col=null; } //for a nice if(color){...}
	
	var ctrl = ctrl_left.checked;

	var o = { color: col, ctrlLeft: ctrl };
	backgroundPage.setOptions(o);
	
	displayStatus("Options saved.");
}

function restoreOptions() {
	var o = backgroundPage.getOptions();
	var col = o.color || "none";
	var ctrl = o.ctrlLeft;
	
	for(var i=0, len=debug_bgcolor.children.length; i < len; ++i) {
		var child = debug_bgcolor.children[i];
		child.selected = (child.value===col);
	}

	ctrl_left.checked = ctrl;

	displayStatus("Options restored.");
}

var status_display = null; //apparently variable 'status' is already defined
var debug_bgcolor = null;
var ctrl_left = null;

function init(){
	status_display = document.getElementById("status_display").firstChild;
	debug_bgcolor = document.getElementById("debug_bgcolor");
	ctrl_left = document.getElementById("ctrl_left");
	restoreOptions();
	
    document.getElementById("id_save").addEventListener("click", saveOptions);
    document.getElementById("id_restore").addEventListener("click", restoreOptions);
}


var backgroundPage;
chrome.runtime.getBackgroundPage(function (argPage) {
    backgroundPage = argPage;
    init();
});
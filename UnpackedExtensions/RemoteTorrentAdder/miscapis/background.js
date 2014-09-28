XMLHttpRequest.prototype.sendAsBinary = function(datastr) {
	var data = new ArrayBuffer(datastr.length);
	var ui8a = new Uint8Array(data, 0);
	for (var i=0; i<datastr.length; i++) {
		ui8a[i] = (datastr.charCodeAt(i) & 0xff);
	}
	var blob = new Blob([data]);
	this.send(blob);
}

// context menu action
function genericOnClick(info, tab) {
	if(localStorage["rutorrentdirlabelask"]=="true" && localStorage["client"]=="ruTorrent WebUI")
		chrome.tabs.sendRequest(tab.id, {"action": "showLabelDirChooser", "url": info.linkUrl, "settings": localStorage});
	else
		getTorrent(info.linkUrl);
}

function dispatchTorrent(data, name, label, dir) {
	switch (localStorage["client"]) {
		case "Vuze SwingUI":
			addTorrentToVuzeSwingUI(data); break;
		case "Torrentflux WebUI":
			addTorrentToTorrentfluxWebUI(data, name); break;
		case "Transmission WebUI":
			addTorrentToTransmissionWebUI(data); break;
		case "uTorrent WebUI":
			addTorrentTouTorrentWebUI(data); break;
		case "ruTorrent WebUI":
			addTorrentToruTorrentWebUI(data, label, dir); break;
		case "Vuze HTML WebUI":
			addTorrentToVuzeHTMLUI(data); break;
		case "Vuze Remote WebUI":
			addTorrentToVuzeRemoteUI(data); break;
		case "Buffalo WebUI":
		case "Buffalo WebUI (OLD!)":
			addTorrentToBuffaloWebUI(data, name); break;
		case "qBittorrent WebUI":
			addTorrentToqBittorrentWebUI(data, name); break;
		case "Deluge WebUI":
			addTorrentToDelugeWebUI(data, name); break;
		case "pyrt WebUI":
			addTorrentTopyrtWebUI(data, name); break;
	}
}

function getTorrent(url, label, dir) {
	if(url.substring(0,7) == "magnet:") {
		dispatchTorrent(url, "", label, dir);
	} else {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.overrideMimeType("text/plain; charset=x-user-defined");
		xhr.onreadystatechange = function(data) {
			if(xhr.readyState == 4 && xhr.status == 200) {
				if(url.match(/\/([^\/]+.torrent)$/)) {
					name = url.match(/\/([^\/]+.torrent)$/)[1];
				} else {
					name = "file.torrent";
				}
				
				dispatchTorrent(xhr.responseText, name, label, dir);
			} else if(xhr.readyState == 4 && xhr.status < 99) {
				displayResponse("Connection failed", "The server sent an irregular HTTP error code: "+xhr.status);
			} else if(xhr.readyState == 4 && xhr.status != 200) {
				displayResponse("Connection failed", "The server sent the following HTTP error code: "+xhr.status);
			}
		};
		xhr.send(null);
	}
}

function displayResponse(title, message) {
	if(localStorage["showpopups"] == "true") {
    var opt = {
      type: "basic",
      title: title,
      message: message,
      iconUrl: 'icons/BitTorrent48.png'
    }
		var notification = chrome.notifications.create(null, opt, function (nutifID) {
      notification.show();
      setTimeout(function(){notification.cancel();}, localStorage['popupduration']);
		});
	}
}

function initialConfigValues() {
	localStorage["host"] = "127.0.0.1";
	localStorage["port"] = "6883";
	localStorage["hostsecure"] = "";
	localStorage["login"] = "login";
	localStorage["password"] = "password";
	localStorage["linksfoundindicator"] = "true";
	localStorage["showpopups"] = "true";
	localStorage["popupduration"] = 2000;
	localStorage["catchfromcontextmenu"] = "true";
	localStorage["catchfrompage"] = "true";
	localStorage["linkmatches"] = "([\\]\\[]|\\b)\\.torrent\\b([^\\-]|$)~torrents\\.php\\?action=download";
	localStorage["client"] = "Vuze SwingUI";
}

// overwrite the click-event of links we want to grab
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if(request.action == "addTorrent") {
		getTorrent(request.url, request.label, request.dir);
		sendResponse({});
	} else if(request.action == "getStorageData") {
		sendResponse(localStorage);
	} else if(request.action == "setStorageData") {
		for(x in request.data)
			localStorage[x] = request.data[x];
		sendResponse({});
	} else if(request.action == "pageActionToggle") {
		chrome.pageAction.show(sender.tab.id);
		sendResponse({});
	}
});

// register a context menu on links
if(localStorage["catchfromcontextmenu"] == "true")
	chrome.contextMenus.create({"title": "Add to Remote WebUI", "contexts": ["link"], "onclick": genericOnClick});

// if this is the first usage of the extension, register initial values
if(localStorage["host"] == undefined && 
   localStorage["port"] == undefined &&
   localStorage["login"] == undefined && 
   localStorage["password"] == undefined && 
   localStorage["showpopups"] == undefined && 
   localStorage["popupduration"] == undefined &&
   localStorage["catchfrompage"] == undefined &&
   localStorage["catchfromcontextmenu"] == undefined &&
   localStorage["linkmatches"] == undefined &&
   localStorage["client"] == undefined &&
   localStorage["linksfoundindicator"] == undefined && 
   localStorage["hostsecure"] == undefined) {
	initialConfigValues();
}
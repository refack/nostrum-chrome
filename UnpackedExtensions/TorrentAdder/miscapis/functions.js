var menuItemIndexToServerIndex = [];

XMLHttpRequest.prototype.sendAsBinary = function(datastr) {
	var data = new ArrayBuffer(datastr.length);
	var ui8a = new Uint8Array(data, 0);
	for (var i=0; i<datastr.length; i++) {
		ui8a[i] = (datastr.charCodeAt(i) & 0xff);
	}
	var blob = new Blob([data]);
	this.send(blob);
}


RTA.dispatchTorrent = function(server, data, name, label, dir, cookie) {
	switch (server.client) {
		case "Vuze SwingUI":
			RTA.clients.vuzeSwingAdder(server, data); break;
		case "Torrentflux WebUI":
			RTA.clients.torrentfluxAdder(server, data, name); break;
		case "Transmission WebUI":
			RTA.clients.transmissionAdder(server, data); break;
		case "uTorrent WebUI":
			RTA.clients.uTorrentAdder(server, data, cookie); break;
		case "ruTorrent WebUI":
			RTA.clients.ruTorrentAdder(server, data, label, dir); break;
		case "Vuze HTML WebUI":
			RTA.clients.vuzeHtmlAdder(server, data); break;
		case "Vuze Remote WebUI":
			RTA.clients.vuzeRemoteAdder(server, data); break;
		case "Buffalo WebUI":
		case "Buffalo WebUI (OLD!)":
			RTA.clients.buffaloAdder(server, data, name); break;
		case "qBittorrent WebUI":
			RTA.clients.qBittorrentAdder(server, data, name); break;
		case "Deluge WebUI":
			RTA.clients.delugeAdder(server, data, name); break;
		case "pyrt WebUI":
			RTA.clients.pyrtAdder(server, data, name); break;
		case "Tixati WebUI":
			RTA.clients.tixatiAdder(server, data, name); break;
	}
}


RTA.getTorrent = function(server, url, label, dir, cookie) {
	var name = (url.match(/\/([^\/]+.torrent)$/) || [])[1] || "file.torrent";
	if(url.substring(0, 4) !== "http") {
		var reGroups = /(?:\:\/{0,2})([a-zA-Z0-9]{20,50})/.exec(url) || [];
		var hash = reGroups[1] && reGroups[1].toUpperCase();
		var newURI = hash ? ('http://torcache.net/torrent/' + hash + '.torrent') : url;
		$.ajax(newURI, {type: 'HEAD'}).done(function () {
			RTA.dispatchTorrent(server, newURI, "", label, dir, cookie);
		}).fail(function () {
			RTA.dispatchTorrent(server, url, "", label, dir, cookie);
		});
	} else {
    var xhr = new XMLHttpRequest()
    xhr.onload = function () { RTA.dispatchTorrent(server, this.response, name, label, dir); };
    xhr.onerror = function () { RTA.displayResponse("Connection failed", "The server sent the following HTTP status " + this.status + ":\n" + this.statusText, true); };
    xhr.open('GET', url)
    xhr.responseType = 'blob';
    xhr.send()
	};
}


RTA.displayResponse = function(title, message, error) {
	if(localStorage.getItem("showpopups") !== "true") return;
	var timeOut = localStorage.getItem('popupduration');
	var opts = { 
		type: "basic", 
		iconUrl: "icons/BitTorrent128" + (error ? "-red.png" : ".png"),
		priority: 0,
		title: title,
		message: message
	};
	var id = String(Math.floor(Math.random() * 99999));
	chrome.notifications.create(id, opts, function(myId) { 
		setTimeout(function () { chrome.notifications.clear(myId, jQuery.noop); }, timeOut);
	});
}


RTA.constructContextMenu = function() {
	chrome.contextMenus.removeAll();

	if(localStorage.getItem("catchfromcontextmenu") == "true") {
		// for if there's only one entry
		var contextMenuId = chrome.contextMenus.create({
			"title": "Add to Remote WebUI",
			"contexts": [ "link" ],
			"onclick": RTA.genericOnClick
		});
		menuItemIndexToServerIndex[contextMenuId] = 0;

		// check if there's more than one entry and add them as sub-entries in the context menu
		var servers = localStorage.getItem("servers") ? JSON.parse(localStorage.getItem("servers")) : [];
		var numServers = servers.length;

		if(numServers > 1) {
			for(var i = 0; i < numServers; i++) {
				var thisId = chrome.contextMenus.create({
					"title": servers[i].name,
					"contexts": [ "link" ],
					"parentId": contextMenuId,
					"onclick": RTA.genericOnClick
				});
				menuItemIndexToServerIndex[thisId] = i;
			}
			chrome.contextMenus.create({"type" : "separator", "contexts": [ "link" ], "parentId": contextMenuId});
			var allId = chrome.contextMenus.create({
				"title": "send to all",
				"contexts": [ "link" ],
				"parentId": contextMenuId,
				"onclick": RTA.genericOnClick
			});
			menuItemIndexToServerIndex[allId] = -1;
		}
	}
}


RTA.genericOnClick = function(info, tab) {
	var serverId = menuItemIndexToServerIndex[info.menuItemId];
	var servers = RTA.getServers();
	if(serverId === -1) { // send to all servers
		for(var i in servers) {
			RTA.getTorrent(servers[i], info.linkUrl);
		}
	} else { // only one server specified
		var server = servers[serverId];
		if(server.rutorrentdirlabelask == true && server.client == "ruTorrent WebUI") {
			chrome.tabs.sendRequest(tab.id, {"action": "showLabelDirChooser", "url": info.linkUrl, "settings": localStorage, "server": server});
		} else {
			RTA.getTorrent(server, info.linkUrl);
		}
	}
}


RTA.getServers = function() {
	if (!RTA._serversCached) {
		RTA._serversCached = JSON.parse(localStorage.getItem("servers"))
			.map(function (srv) {
				srv.utorrentrelativepath = srv.utorrentrelativepath || '';
				return srv;
			});
	}
	return RTA._serversCached;
}
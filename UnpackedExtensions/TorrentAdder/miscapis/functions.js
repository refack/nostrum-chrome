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
	if(url.substring(0,7) == "magnet:") {
	var magnetURL;
	var reGroups = /(?:\:\/{0,2})([a-zA-Z0-9]{20,50})/.exec(url) || [];
	var hash = reGroups[1] && reGroups[1].toUpperCase();
	var getURI = hash ? ('http://torcache.net/torrent/' + hash + '.torrent') : url;
	var ret = RTA.dispatchTorrent(server, getURI, "", label, dir, cookie);
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
				
				RTA.dispatchTorrent(server, xhr.responseText, name, label, dir);
			} else if(xhr.readyState == 4 && xhr.status < 99) {
				RTA.displayResponse("Connection failed", "The server sent an irregular HTTP error code: " + xhr.status, true);
			} else if(xhr.readyState == 4 && xhr.status != 200) {
				RTA.displayResponse("Connection failed", "The server sent the following HTTP error code: " + xhr.status, true);
			}
		};
		xhr.send(null);
	}
}


RTA.displayResponse = function(title, message, error) {
	if(localStorage.getItem("showpopups") == "true") {
		var opts = { 
					type: "basic", 
					iconUrl: (error === true) ? "icons/BitTorrent128-red.png" : "icons/BitTorrent128.png", 
					title: title,
					priority: 0,
					message: message
					};
		var id = Math.floor(Math.random() * 99999) + "";
		
		chrome.notifications.create(id, opts, function(myId) { id = myId });
		
		setTimeout(function(){chrome.notifications.clear(id, function() {});}, localStorage.getItem('popupduration'));
	}
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
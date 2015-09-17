///////////////////////////////////////////////////////
// TAKE CARE OF EXTENSION SETTINGS. VIRGIN/OLD INSTALL?
///////////////////////////////////////////////////////
(function () {
	'use strict';

RTA.constructContextMenu();
	if (RTA.getServers()[0].getTokenPromise) RTA.getServers()[0].getTokenPromise();


////////////////////
// GRAB FROM NEW TAB
////////////////////
if(localStorage.getItem("catchfromnewtab") === "true") chrome.tabs.onCreated.addListener(function(tab) {
	var server = RTA.getServers()[0]; // primary server
	var res = localStorage.getItem('linkmatches').split('~');
	for (var mkey in res) {
		if (tab.url.match(new RegExp(res[mkey], "g"))) {
			RTA.getTorrent(server, tab.url);
			break;
		}
	}
});



/////////////////////////////////////////////////////
// OVERWRITE THE CLICK-EVENT OF LINKS WE WANT TO GRAB
/////////////////////////////////////////////////////
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if(request.action == "addTorrent") {
		RTA.getTorrent(request, sendResponse);
	} else if (request.action == "createNotification") {
		RTA.createNotification(request, sendResponse);
	} else if(request.action == "getStorageData") {
		sendResponse(localStorage);
	} else if(request.action == "setStorageData") {
		for (var x in request.data)
			localStorage.setItem(x, request.data[x]);
		sendResponse({});
	} else if(request.action == "pageActionToggle") {
		chrome.pageAction.show(sender.tab.id);
		sendResponse({});
	} else if(request.action == "constructContextMenu") {
		RTA.constructContextMenu();
		sendResponse({});
	}
});


	chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {
		var gotRef = false;
		for (var n in details.requestHeaders) {
			gotRef = details.requestHeaders[n].name.toLowerCase() == "referer";
			if (gotRef) {
				details.requestHeaders[n].value = details.url;
				break;
			}
		}
		if (!gotRef) {
			details.requestHeaders.push({name: "Referer", value: details.url});
		}
		return {requestHeaders: details.requestHeaders};
	}, {
		urls: ["*://torcache.net/*"]
	}, [
		"requestHeaders",
		"blocking"
	]);
})();

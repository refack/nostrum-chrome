'use strict';
/*global document, chrome */
var COMMANDS = {
    'Bust Frame': function (info, tab) {
        var url = info.frameUrl || info.pageUrl;
        chrome.tabs.update(tab.id, {url: url});
    },

    'In a new tab': function (info, tab) {
        var url = info.frameUrl || info.pageUrl;
        chrome.tabs.create({url: url, openerTabId: tab.id});
    },

    'Copy frame URL': function (info) {
        var url = info.frameUrl || info.pageUrl;
        var bufferNode = document.createElement('textarea');
        document.body.appendChild(bufferNode);
        bufferNode.value = url;
        bufferNode.focus();
        bufferNode.selectionStart = 0;
        bufferNode.selectionEnd = url.length;
        document.execCommand('copy');
        document.body.removeChild(bufferNode);
    }
};

var cache = {};
chrome.history.search({
    text: '',
    startTime: Date.now() - (1000 * 60 * 60 * 24 * 30),
    maxResults: 100000
}, function (res) {
    res.forEach(function (r) { cache[r.url] = true; });
});


function resolveVisited(hs, cb) {
    hs = hs.filter(function (h) { return h in cache; });
    return cb(hs);

}

chrome.runtime.onInstalled.addListener(function () {
    for (var label in COMMANDS)
        chrome.contextMenus.create({id: label, title: label, contexts: ['frame'], onclick: COMMANDS[label]});
});


chrome.runtime.onMessage.addListener(function (request, sender, cb) {
    if (request.resolve) {
        resolveVisited(request.resolve, cb);
    } else if (request.kill) {
        chrome.tabs.query({active: true}, function (tabs) { chrome.tabs.remove(tabs[0].id); });
    }
});


chrome.history.onVisited.addListener(function (r) {
    cache[r.url] = true;
});

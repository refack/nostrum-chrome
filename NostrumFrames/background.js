'use strict';
/*global document, chrome */
var COMMANDS = {
    // 'In a same tab': function (info, tab) {
    //     var url = info.frameUrl || info.pageUrl;
    //     chrome.tabs.update(tab.id, {url: url});
    // },
    //
    // 'Copy frame URL': function (info) {
    //     var url = info.frameUrl || info.pageUrl;
    //     var bufferNode = document.createElement('textarea');
    //     document.body.appendChild(bufferNode);
    //     bufferNode.value = url;
    //     bufferNode.focus();
    //     bufferNode.selectionStart = 0;
    //     bufferNode.selectionEnd = url.length;
    //     document.execCommand('copy');
    //     document.body.removeChild(bufferNode);
    // },
    //
    'Bust Frame': function (info, tab) {
        var url = info.frameUrl || info.pageUrl;
        chrome.tabs.create({url: url, openerTabId: tab.id});
    }
};

var cache = {};
var negCache = {};
chrome.history.search({
    text: '',
    startTime: Date.now() - (1000 * 60 * 60 * 24 * 30),
    maxResults: 100000
}, function (res) {
    res.forEach(function (r) {
        cache[r.url] = true;
    });
});


function resolveVisited(hs, cb) {
    var plus = hs.filter(function (h) { return h in cache; });
    var nega = hs.filter(function (h) { return h in negCache; });
    return cb({plus: plus, nega: nega});

}

chrome.runtime.onInstalled.addListener(function () {
    for (var label in COMMANDS)
        chrome.contextMenus.create({id: label, title: label, contexts: ['all'], onclick: COMMANDS[label]});
});


chrome.runtime.onMessage.addListener(function (request, sender, cb) {
    if (request.resolve) {
        resolveVisited(request.resolve, cb);
    } else if (request.kill) {
        chrome.tabs.query({active: true}, function (tabs) { chrome.tabs.remove(tabs[0].id); });
    } else if (request.negs) {
        request.negs.forEach(function (h) {
            if (!h || !h.length) return;
            ['http', 'https'].map(pref => h.replace(/^[^:]+/, pref)).forEach(url => chrome.history.addUrl({url}));
            if (h in cache) return;
            negCache[h] = true;
        });
    }
});


chrome.history.onVisited.addListener(function (r) {
    cache[r.url] = true;
    delete negCache[r.url];
});

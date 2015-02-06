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


chrome.runtime.onInstalled.addListener(function () {
    for (var label in COMMANDS)
        chrome.contextMenus.create({id: label, title: label, contexts: ['frame'], onclick: COMMANDS[label]});
});

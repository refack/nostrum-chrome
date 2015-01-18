const COMMANDS = {
  'In a new tab': function(info, tab) {
    var url = info.frameUrl || info.pageUrl;
    chrome.tabs.create({url: url});
  },

  'Copy frame URL': function(info, tab) {
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
}

chrome.runtime.onInstalled.addListener(function() {
  for (var label in COMMANDS) {
    var handler = COMMANDS[label];
    chrome.contextMenus.create({
      id: label,
      title: label,
      contexts: ['frame'],
      onclick: handler
    }, function () {
      console.log(chrome.runtime.lastError);
    });
  }
});

'use strict';
/* global chrome,document,$,window */
var HASH_MATCHER = /\b([0-9a-fA-F]{40})\b/;
var IGNORE_TAGS_MAP = {A: 1, SCRIPT: 1};
var TRACKER_QUERY = [
    '.trackers dt a', // torrentz
    '#trackerBox td:first-of-type > div' // kickass
].join(',');

// get title
var trzTitle = document.querySelector("h2 span") || {};
var title = trzTitle.innerHTML || document.title.split(/ \W /)[0];
// get trackers
var trackers = [].slice.call(document.querySelectorAll(TRACKER_QUERY));
// make suffix
var suffix = '&dn=' + encodeURIComponent(title);
trackers.forEach(function (e) {suffix += '&tr=' + encodeURIComponent(e.innerHTML); });

// magnetize current document
magnetize({target: document.documentElement});
// magnetize future mutations
document.addEventListener('DOMNodeInserted', magnetize);


chrome.extension.sendRequest({"action": "getStorageData"}, function (response) {
    if (!response || response["catchfrompage"] != "true") return;

    var matches = response.linkmatches.split("~");
    matches.push("magnet:");
    matches.push("dht:");
    document.addEventListener('click', function clickHandler(e) {
        if (e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return;

        var hrefElem = [].filter.call(e.path, function (el) { return el.href; })[0];
        if (!hrefElem) return true;
        if (!matches.some(function (m) { return hrefElem.href.match(new RegExp(m, "g")); })) return true;

        e.preventDefault();
        e.stopPropagation();
        chrome.extension.sendRequest({action: "addTorrent", url: hrefElem.href}, function (res) {
            window.document.body.focus();
            if (res.navigate) {
                window.location.href = hrefElem.href;
            }
        });
        hrefElem.classList.add('nostrum-visited');
        return false;
    }, true);
});


// register a listener that'll display the dir/label selection dialog
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.action == "showLabelDirChooser" && request.url && request.settings) {
        showLabelDirChooser(request.settings, request.url, request.server);
        sendResponse({});
    }
});


function magnetize(e) {
    var forest = [e.target];
    var leafs = [];
    while (forest.length) {
        var elem = forest.pop();
        if (elem.tagName in IGNORE_TAGS_MAP || !HASH_MATCHER.exec(elem.innerHTML)) continue;
        var children = [].slice.call(elem.children);
        if (children.length)
            forest = forest.concat(children);
        else
            leafs.push(elem);
    }
    leafs.forEach(function (elem) {
        var hash = HASH_MATCHER.exec(elem.innerHTML)[1];
        var magnet = 'magnet:?xt=urn:btih:' + hash + suffix;
        var magnet_a_html = '<a href="' + magnet + '">' + hash + '</a>';
        elem.innerHTML = elem.innerHTML.replace(hash, magnet_a_html);
    });
}


function showLabelDirChooser(settings, url, theServer) {
    var servers = JSON.parse(settings.servers);
    var server, serverIndex = 0;
    if (!theServer) {
        server = servers[0];
    } else {
        server = theServer;
        for (var w in servers) {
            if (servers[w].name == theServer.name) {
                serverIndex = w;
            }
        }
    }

    var dirlist = server["dirlist"] && JSON.parse(server["dirlist"]);
    var labellist = server["labellist"] && JSON.parse(server["labellist"]);

    var adddialog = "Directory: <select id=\"adddialog_directory\">";
    for (var x in dirlist)
        adddialog += "<option value=\"" + dirlist[x] + "\">" + dirlist[x] + "</option>";
    adddialog += "</select>";
    adddialog += " <img id=\"dirremover\" src=\"" + chrome.extension.getURL("icons/White_X_in_red_background.svg") + "\" /> ";
    adddialog += "or new: <input id=\"adddialog_directory_new\" type=\"text\" /><br/>";
    adddialog += "Label: <select id=\"adddialog_label\">";
    for (var y in labellist)
        adddialog += "<option value=\"" + labellist[y] + "\">" + labellist[y] + "</option>";
    adddialog += "</select>";
    adddialog += " <img id=\"labelremover\" src=\"" + chrome.extension.getURL("icons/White_X_in_red_background.svg") + "\" /> ";
    adddialog += " or new: <input id=\"adddialog_label_new\" type=\"text\" /><br/>";
    adddialog += "<input id=\"adddialog_submit\" type=\"button\" value=\"Add Torrent\" />";
    var style = "<style>#adddialog * { color: rgb(68, 68, 68); background: rgb(249, 249, 249); } #dirremover, #labelremover { height: 1em; cursor: pointer; } </style>";

    $.fancybox("<div id=\"adddialog\">" + style + "<h2>Select label and directory for torrent adding</h2>" + adddialog + "</div>");

    $("#dirremover").click(function () {
        $("#adddialog_directory").find(":selected").remove();
        setNewSettings(settings, null, null, serverIndex);
    });
    $("#labelremover").click(function () {
        $("#adddialog_label").find(":selected").remove();
        setNewSettings(settings, null, null, serverIndex);
    });

    $("input#adddialog_submit").click(function () {
        var selectedLabel = $("select#adddialog_label").val();
        var inputLabel = $("input#adddialog_label_new").val();
        var selectedDir = $("select#adddialog_directory").val();
        var inputDir = $("input#adddialog_directory_new").val();

        var targetLabel = (inputLabel === "") ? ((selectedLabel === null) ? "" : selectedLabel) : inputLabel;
        var targetDir = (inputDir === "") ? ((selectedDir === null) ? "" : selectedDir) : inputDir;

        chrome.extension.sendRequest({
            "action": "addTorrent",
            "url": url,
            "label": targetLabel,
            "dir": targetDir,
            "server": server
        });

        setNewSettings(settings, targetDir, targetLabel, serverIndex);

        $.fancybox.close();
    });

    function setNewSettings(settings, newDir, newLabel, serverIndex) {
        var newdirlist = [];
        var newlabellist = [];
        if (newDir) newdirlist.push(newDir);
        if (newLabel) newlabellist.push(newLabel);
        dirlist = $("#adddialog_directory").find("option").map(function () { return $(this).val(); }).get();
        for (var x1 in dirlist) {
            if (dirlist[x1] != newDir) newdirlist.push(dirlist[x1]);
        }
        labellist = $("#adddialog_label").find("option").map(function () { return $(this).val(); }).get();
        for (var x2 in labellist) {
            if (labellist[x2] != newLabel) newlabellist.push(labellist[x2]);
        }

        var servers = JSON.parse(settings.servers);
        var server;
        if (!serverIndex)
            server = servers[0];
        else
            server = servers[serverIndex];

        server["dirlist"] = JSON.stringify(newdirlist);
        server["labellist"] = JSON.stringify(newlabellist);

        servers[serverIndex] = server;
        settings.servers = JSON.stringify(servers);

        chrome.extension.sendRequest({"action": "setStorageData", "data": settings});
    }
}



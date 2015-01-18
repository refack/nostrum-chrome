'use strict';
// jshint -W089
/* global chrome,document,$ */
chrome.extension.sendRequest({"action": "getStorageData"}, function (response) {
    if (!response || response["catchfrompage"] != "true") return;

    // handle common links
    var links = [];
    var rL = document.getElementsByTagName('a');
    var res = response.linkmatches.split("~");
    res.push("magnet:");
    res.push("dht:");
    var mkey;
    if (response.linkmatches !== "") {
        for (var lkey in rL) {
            for (mkey in res) {
                if (rL[lkey].href && rL[lkey].href.match(new RegExp(res[mkey], "g"))) {
                    links.push(rL[lkey]);
                    break;
                }
            }
        }
    }

    // handle forms
    var rB1 = Array.prototype.slice.call(document.getElementsByTagName('button'));
    var rB2 = Array.prototype.slice.call(document.getElementsByTagName('input'));
    var rB = rB1.concat(rB2);

    var forms = [];
    for (var x in rB) { // get an index-parallel array of parent forms
        forms.push(rB[x].form);
    }
    for (var y in rB) {
        for (mkey in res) {
            if (forms[y] !== null && forms[y].hasOwnProperty('action') && forms[y].action.match && forms[y].action.match(new RegExp(res[mkey], "g"))) {
                rB[y].href = forms[y].action;
                links.push(rB[y]);
                break;
            }
        }
    }

    // re-register actions
    if (links.length) {
        if (response.linksfoundindicator === "true")
            chrome.extension.sendRequest({"action": "pageActionToggle"});
        for (var key in links) {
            if (links[key].addEventListener) {
                links[key].addEventListener('click', clickHandler);
            }
        }
    }
});

// register a listener that'll display the dir/label selection dialog
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.action == "showLabelDirChooser" && request.url && request.settings) {
        showLabelDirChooser(request.settings, request.url, request.server);
        sendResponse({});
    }
});


function clickHandler(e) {
    if (e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return;

    e.preventDefault();
    e.stopPropagation();

    chrome.extension.sendRequest({
        "action": "addTorrent",
        "url": this.href
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

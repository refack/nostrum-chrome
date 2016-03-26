'use strict';
/*global $,chrome */

var menuItemIndexToServerIndex = [];

var RTA = window.RTA = {
    clients: {config: {}},

    getServers: function getServers() {
        RTA._serversCached = JSON.parse(localStorage.getItem("servers")).map(function (srv) {
            srv.utorrentrelativepath = srv.utorrentrelativepath || '';
            Object.setPrototypeOf(srv, RTA.clients[srv.client]);
            return srv;
        });
        return RTA._serversCached;
    },


    getTorrent: function (request, cb) {
        function cb1(res) {
            var opts = {};
            var nCB = $.noop;
            if (res.navigate) {
                opts.message = "Just HTML, navigating...";
                nCB = cb.bind(undefined, res);
            } else if (!res.error) {
                opts.title = "Done";
                opts.iconUrl = "icons/ck_alpha.png";
                opts.message = "Torrent added successfully.";
            } else if (res.hash) {
                opts.title = "Duplicate";
                opts.iconUrl = "icons/ex_alpha.png";
                opts.message = "Found a torrent with this hash on server:\n\n" + res.hash;
            } else if (res.resp) {
                opts.title = res.resp.title || "Error";
                opts.iconUrl = "icons/ex_alpha.png";
                opts.message = res.resp.error || "Server Error";
            } else {
                opts.title = "Error";
                opts.iconUrl = "icons/ex_alpha.png";
                opts.message = "Server didn't accept data:\n" + ((res.resp && res.resp.error) || res.statusText);
            }
            if (opts.title != 'Error') chrome.history.addUrl({url: request.url});
            chrome.notifications.update(nId, opts, function () {
                setTimeout(chrome.notifications.clear.bind(chrome.notifications, nId, $.noop), 6000);
                nCB();
            });
        }

        var opts = {
            type: "basic",
            title: "Fetch Torrent",
            message: encodeURI(request.url),
            iconUrl: "icons/up_alpha.png",
            isClickable: true,
            priority: 10
        };
        var nId = String(Date.now());
        chrome.notifications.create(nId, opts, function () {
            RTA._getTorrent(request, cb1);
        });
    },

    _getTorrent: function (request, cb) {
        var server = RTA.getServers()[0]; // primary server
        var url = request.url;
        request.name = (url.match(/\/([^\/]+.torrent)$/) || [])[1] || "file.torrent";
        if (url.substring(0, 4) !== "http") {
            var reGroups = /:\/{0,2}([a-zA-Z0-9]{40})/.exec(url);
            var hash = reGroups && reGroups[1] && reGroups[1].toUpperCase();
            server.check(hash).then(function (isDup) {
                if (isDup) return {error: true, hash: hash};
                var torcacheURI = hash ? ('http://torcache.net/torrent/' + hash + '.torrent') : url;
                return $.ajax(torcacheURI, {dataType: 'blob', timeout: 5000});
            }).always(function (blob, status) {
                if (blob instanceof Blob && blob.type === 'text/html') return cb({navigate: true});
                if (blob instanceof Object && (status == 'error' || status == 'timeout')) return server.add(request, cb);
                if (blob && blob.error) return cb(blob);
                request.blob = blob;
                return server.add(request, cb);
            });
        } else {
            $.ajax(request.url, {dataType: 'blob'}).always(function (blob, status) {
                if (blob instanceof Blob && blob.type === 'text/html') return cb({navigate: true});
                request.blob = blob;
                window.getInfohash(blob).then(
                    server.check.bind(server)
                ).then(
                    function (hash) {
                        if (hash) return cb({error: true, hash: hash});
                        return server.add(request, cb);
                    },
                    function () {
                        return server.add(request, cb);
                    }
                );
            });
        }
    },


    constructContextMenu: function () {
        chrome.contextMenus.removeAll();

        if (localStorage.getItem("catchfromcontextmenu") === "true") {
            // for if there's only one entry
            var contextMenuId = chrome.contextMenus.create({
                "title": "Add to Remote WebUI",
                "contexts": ["link"],
                "onclick": RTA.genericOnClick
            });
            menuItemIndexToServerIndex[contextMenuId] = 0;

            // check if there's more than one entry and add them as sub-entries in the context menu
            var servers = localStorage.getItem("servers") ? JSON.parse(localStorage.getItem("servers")) : [];
            var numServers = servers.length;

            if (numServers > 1) {
                for (var i = 0; i < numServers; i++) {
                    var thisId = chrome.contextMenus.create({
                        "title": servers[i].name,
                        "contexts": ["link"],
                        "parentId": contextMenuId,
                        "onclick": RTA.genericOnClick
                    });
                    menuItemIndexToServerIndex[thisId] = i;
                }
                chrome.contextMenus.create({"type": "separator", "contexts": ["link"], "parentId": contextMenuId});
                var allId = chrome.contextMenus.create({
                    "title": "send to all",
                    "contexts": ["link"],
                    "parentId": contextMenuId,
                    "onclick": RTA.genericOnClick
                });
                menuItemIndexToServerIndex[allId] = -1;
            }
        }
    },


    genericOnClick: function genericOnClick(info, tab) {
        var serverId = menuItemIndexToServerIndex[info.menuItemId];
        var servers = RTA.getServers();
        if (serverId === -1) { // send to all servers
            servers.forEach(function (server) {
                RTA.getTorrent(server, info.linkUrl);
            });
            return;
        }
        var server = servers[serverId];
        if (server.rutorrentdirlabelask === true && server.client === "ruTorrent") {
            chrome.tabs.sendRequest(tab.id, {
                "action": "showLabelDirChooser",
                "url": info.linkUrl,
                "settings": localStorage,
                "server": server
            });
        } else {
            RTA.getTorrent(server, info.linkUrl);
        }
    }
};


RTA.clients.uTorrent = {
    getAJAXParams: function getAJAXParams(path) {
        path = path || '';
        var server = this;
        var scheme = server.hostsecure ? "https://" : "http://";
        var relPath = server.utorrentrelativepath.replace(/^$/, "/gui/");
        var URI = scheme + server.host + ":" + server.port + relPath + path;
        var encodedKey = new StringView(server.login + ':' + server.password).toBase64(true)
        var params = {
            beforeSend: function(xhr){
                xhr.setRequestHeader('Authorization', 'Basic ' + encodedKey);
            },
            // password: server.password,
            // username: server.login,
            url: URI,
            dataType: path.includes('html') ? 'html' : 'json'
        };
        return params
    },


    getTokenPromise: function getTokenPromise() {
        var server = this;
        var ajaxParams = server.getAJAXParams("token.html");
        let ret = server.token || $.ajax(ajaxParams).then(function (res, textStatus) {
                server.token = (/<div[^>]*?>(.*?)<\/div>/.exec(res) || [])[1];
                if (!server.token)
                    throw new Error("Problem getting the uTorrent token.\nIs uTorrent running?\nusername/password corrent?\n" + textStatus);
                return server.token;
            })
        return $.when(ret);
    },

    
    add: function uTorrentAdder(request, cb) {
        var server = this;
        server.getTokenPromise().then(function (token) {
            var params = server.getAJAXParams();
            if (request.blob) {
/*                     var nBytes = request.blob.length, ui8Data = new Uint8Array(request.blob);
                for (var nIdx = 0; nIdx < nBytes; nIdx++) {
                  ui8Data[nIdx] = sData.charCodeAt(nIdx) & 0xff;
                }
*/
                var blob = request.blob.slice(0, request.blob.size, 'application/x-bittorrent');
                var fd = new FormData();
                fd.append("torrent_file", blob, Date.now() + ".torrent");
                params.type = 'POST';
                params.url += '?' + $.param({token: token, action: 'add-file'});
                params.data = fd;
                params.processData = false;
                params.contentType = false;
            } else {
                params.data = $.param({token: token, action: 'add-url', s: request.url});
            }
            return $.ajax(params);
        }).always(function (resp, textStatus) {
            if (textStatus !== 'success') {
                if (resp.statusText === 'error' && resp.status === 0) {
                    return cb({error: true, title: 'Server Down', resp: {error: 'Server Down'}});
                }
                var err = {error: "Server responded with HTTP code:\n" + resp.status + ' - ' + textStatus + ": " + resp.responseText};
                return cb({error: true, title: "Failure", resp: err});
            } else if (!resp) {
                return cb({error: true, title: "Failure", resp: {}});
            } else if (resp.error === "Can't add torrent: ") {
                return cb({error: true, title: "Duplicate", resp: resp});
            } else if (resp.error) {
                return cb({error: true, title: "Failure", resp: resp});
            } else {
                return cb({title: "Success"});
            }
        });
    },


    check: function uTorrentCheck(hash) {
        var server = this;
        var p = server.getTokenPromise().then(function (token) {
            var params = server.getAJAXParams();
            params.data = $.param({token: token, action: 'getprops', hash: hash});
            return $.ajax(params);
        }).then(function (res, textStatus) {
            if (!res) throw new Error("Got no respose from server:\n" + textStatus);
            if (res.error) throw new Error("Got error:\n" + res.error);
            return res.props && res.props.length && hash;
        });
        return p;
    }
};

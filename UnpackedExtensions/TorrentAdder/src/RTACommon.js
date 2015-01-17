/*global $,chrome */
(function (window) {
    'use strict';

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


        getTorrent: function (server, url, label, dir, cookie) {
            var name = (url.match(/\/([^\/]+.torrent)$/) || [])[1] || "file.torrent";
            if (url.substring(0, 4) !== "http") {
                var reGroups = /:\/{0,2}([a-zA-Z0-9]{20,50})/.exec(url) || [];
                var hash = reGroups[1] && reGroups[1].toUpperCase();
                server.check(hash).done(function (isDup) {
                    if (isDup) {
                        RTA.displayResponse("Duplicate", "Found a torrent with this has on server: " + hash, true);
                        return;
                    }
                    var newURI = hash ? ('http://torcache.net/torrent/' + hash + '.torrent') : url;
                    $.ajax(newURI, {type: 'HEAD'}).done(function () {
                        server.add(newURI, "", label, dir, cookie);
                    }).fail(function () {
                        server.add(url, "", label, dir, cookie);
                    });
                });
            } else {
                var def = $.Deferred();
                var xhr = new XMLHttpRequest();
                xhr.onload = function () { def.resolve(this.response); };
                xhr.onerror = function () { def.reject(new Error("The server sent the following HTTP status " + this.status + ":\n" + this.statusText)); };
                xhr.open('GET', url);
                xhr.responseType = 'blob';
                xhr.send();
                def.done(function (blob) {
                    if (blob instanceof Blob && blob.type === 'text/html') {
                        window.open(url, '_blank');
                        return;
                    }

                    window.getInfohash(blob).then(server.check.bind(server)).then(
                        function (hash) {
                            if (hash) {
                                RTA.displayResponse("Duplicate", "Found a torrent with this has on server: " + hash, true);
                                return;
                            }
                            server.add(blob, name, label, dir);
                        },
                        function () {
                            server.add(blob, name, label, dir);
                        }
                    );

                });

            }
        },


        displayResponse: function (title, message, error) {
            if (localStorage.getItem("showpopups") !== "true") return;
            var timeOut = localStorage.getItem('popupduration');
            var opts = {
                type: "basic",
                iconUrl: "icons/BitTorrent128" + (error ? "-red.png" : ".png"),
                priority: 0,
                title: title,
                message: message
            };
            var id = String(Math.floor(Math.random() * 99999));
            chrome.notifications.create(id, opts, function (myId) {
                setTimeout(function () { chrome.notifications.clear(myId, $.noop); }, timeOut);
            });
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
        getBaseURL: function getBaseURL() {
            var server = this;
            var scheme = server.hostsecure ? "https://" : "http://";
            var relPath = server.utorrentrelativepath.replace(/^$/, "/gui/");
            var baseURL = scheme + server.host + ":" + server.port + relPath;
            return baseURL;
        },


        getTokenPromise: function getTokenPromise() {
            var server = this;
            var ajaxParams = {
                url: server.getBaseURL() + "token.html",
                username: server.login,
                password: server.password
            };
            return $.when(
                server.token ||
                $.ajax(ajaxParams).then(function (res, textStatus) {
                    server.token = (/<div[^>]*?>(.*?)<\/div>/.exec(res) || [])[1];
                    if (!server.token)
                        throw new Error("Problem getting the uTorrent token.\nIs uTorrent running?\nusername/password corrent?\n" + textStatus);
                    return server.token;
                })
            );
        },

        add: function uTorrentAdder(torrentdata) {
            var server = this;
            server.getTokenPromise().then(function (token) {
                var params = {
                    url: server.getBaseURL(),
                    dataType: 'json',
                    username: server.login,
                    password: server.password
                };
                if (torrentdata instanceof Blob) {
                    var fd = new FormData();
                    fd.append("torrent_file", torrentdata, Date.now() + ".torrent");
                    params.type = 'POST';
                    params.url += '?' + $.param({token: token, action: 'add-file'});
                    params.data = fd;
                    params.processData = false;
                    params.contentType = false;
                } else {
                    params.data = $.param({token: token, action: 'add-url', s: torrentdata});
                }
                return $.ajax(params);
            }).done(function (resp) {
                if (!resp) {
                    RTA.displayResponse("Failure", "Server didn't response", true);
                } else if (resp.error === "Can't add torrent: ") {
                    RTA.displayResponse("Duplicate", "Torrent can't be added.", true);
                } else if (resp.error) {
                    RTA.displayResponse("Failure", "Server didn't accept data:\n" + resp.error, true);
                } else {
                    RTA.displayResponse("Success", "Torrent added successfully.");
                }
            }).fail(function (jqXHR, textStatus) {
                RTA.displayResponse("Failure", "Server responded with HTTP code:\n" + jqXHR.status + ' - ' + textStatus + ": " + jqXHR.responseText, true);
            });
        },


        check: function uTorrentCheck(hash) {
            var server = this;
            var p = server.getTokenPromise().then(function (token) {
                var params = {
                    url: server.getBaseURL(),
                    dataType: 'json',
                    username: server.login,
                    password: server.password,
                    data: $.param({token: token, action: 'getprops', hash: hash})
                };
                return $.ajax(params);
            }).then(function (res, textStatus) {
                if (!res) throw new Error("Got no respose from server:\n" + textStatus);
                if (res.error) throw new Error("Got error:\n" + res.error);
                return res.props && res.props.length && hash;
            });
            return p;
        }
    };


})(window);

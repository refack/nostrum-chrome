'use strict';
RTA.clients.uTorrentAdder = function uTorrentAdder(server, torrentdata, cookie) {
  var scheme = server.hostsecure ? "https://" : "http://";
  var relpath = server.utorrentrelativepath.replace(/^$/, "/gui/");
  var baseURL = scheme + server.host + ":" + server.port + relpath;

  jQuery.ajax(
    baseURL + "token.html",
    { username: server.login, password: server.password }
  ).then(function (resp, textStatus, jqXHR) {
    server.token = (/<div[^>]*?>(.*?)<\/div>/.exec(resp) || [])[1];
    if(!server.token) {
      RTA.displayResponse("Failure", "Problem getting the uTorrent token.\nIs uTorrent running?\nusername/password corrent?\n" + textStatus, true);
      return;
    }
    var data = jQuery.param({token: server.token, action: 'add-url', s: torrentdata});
    return jQuery.ajax(baseURL, {
      data: data,
      username: server.login,
      password: server.password
    });
  }).done(function (resp, textStatus, jqXHR) {
    if (!resp) return;
    if(/\{"build":\d+\}/.test(resp)) {
      RTA.displayResponse("Success", "Torrent added successfully.");
    } else {
      console.log("Torrent Adder", jqXHR);
      RTA.displayResponse("Failure", "Server didn't accept data:\n" + jqXHR.status + ":\n" + jqXHR.responseText, true);
    }
  }).fail(function (jqXHR, textStatus, errorThrown) {
    RTA.displayResponse("Failure", "Server responded with HTTP code:\n" + jqXHR.status + ": " + jqXHR.responseText, true);
  })
}
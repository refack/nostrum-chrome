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
    var isBEncode = torrentdata.substr(0, 40).lastIndexOf(':') > 7;
    var params = {
      url: baseURL,
      data: jQuery.param({token: server.token, action: 'add-url', s: torrentdata}),
      dataType: 'json',
      username: server.login,
      password: server.password
    };
    if (isBEncode) {
      var boundary = "AJAX-----------------------" + Date.now();
      params.type = 'POST';
      params.url += '?' + jQuery.param({token: server.token, action: 'add-file'});
      params.contentType = 'multipart/form-data; boundary=' + boundary;
      params.data = [
        '--' + boundary,
        'Content-Disposition: form-data; name="torrent_file"; filename="file.torrent"',
        'Content-Type: application/x-bittorrent',
        '',
        torrentdata,
        '--' + boundary,
        ''
      ].join('\r\n');
    };
    return jQuery.ajax(params);
  }).done(function (resp) {
    if (!resp) {
      RTA.displayResponse("Failure", "Server didn't response", true);
    } else if (resp.error === "Can't add torrent: ") {
      RTA.displayResponse("Duplicate", "Torrent already added.");
    } else if (resp.error) {
      RTA.displayResponse("Failure", "Server didn't accept data:\n" + resp.error, true);
    } else {
      RTA.displayResponse("Success", "Torrent added successfully.");
    }
  }).fail(function (jqXHR, textStatus, errorThrown) {
    RTA.displayResponse("Failure", "Server responded with HTTP code:\n" + jqXHR.status + ' - ' + textStatus + ": " + jqXHR.responseText, true);
  })
}
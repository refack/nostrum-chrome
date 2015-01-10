(function (RTA) {
'use strict';

  
function getBaseURL(server) {
  var scheme = server.hostsecure ? "https://" : "http://";
  var relpath = server.utorrentrelativepath.replace(/^$/, "/gui/");
  var baseURL = scheme + server.host + ":" + server.port + relpath;
  return baseURL;
}


function getTokenPromise(server) {
  var ajaxParams = {
    url: getBaseURL(server) + "token.html",
    username: server.login,
    password: server.password
  }
  return $.when( 
    server.token
    ||
    jQuery.ajax(ajaxParams).then(function (res, textStatus) {
      server.token = (/<div[^>]*?>(.*?)<\/div>/.exec(res) || [])[1];
      if (!server.token)
        throw new Error("Problem getting the uTorrent token.\nIs uTorrent running?\nusername/password corrent?\n" + textStatus);
      return server.token;
    })
  );
}


RTA.clients.uTorrentAdder = function uTorrentAdder(server, torrentdata, cookie) {
  getTokenPromise(server).then(function (token) {
    var params = {
      url: getBaseURL(server),
      dataType: 'json',
      username: server.login,
      password: server.password
    };
    if (torrentdata instanceof Blob) {
      var fd = new FormData();
      fd.append("torrent_file", torrentdata, Date.now() + ".torrent");
      params.type = 'POST';
      params.url += '?' + jQuery.param({token: server.token, action: 'add-file'});
      params.data = fd;
      params.processData = false;
      params.contentType = false;
    } else {
      params.data = jQuery.param({token: server.token, action: 'add-url', s: torrentdata});
    }
    return jQuery.ajax(params);
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
  }).fail(function (jqXHR, textStatus, errorThrown) {
    RTA.displayResponse("Failure", "Server responded with HTTP code:\n" + jqXHR.status + ' - ' + textStatus + ": " + jqXHR.responseText, true);
  })
}


RTA.clients.uTorrentCheck = function uTorrentCheck(server, hash) {
  return getTokenPromise(server).then(function (token) {
    return $.ajax({
      url: getBaseURL(server),
      dataType: 'json',
      username: server.login,
      password: server.password,
      data: jQuery.param({token: token, action: 'getprops', hash: hash})
    });
  }).then(function (res, textStatus) {
    if (!res) throw new Error("Got no respose from server:\n" + textStatus);
    if (res.error) throw new Error("Got error:\n" + res.error);
    return res.props && res.props.length;
  });
}


})(window.RTA);
function addTorrentToqBittorrentWebUI(data, torrentname) {
	var target;
	if(data.substring(0,7) == "magnet:")
		target = "download";
	else
		target = "upload";
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http"+((localStorage["hostsecure"]=='true')?"s":"")+"://"+localStorage["host"]+":"+localStorage["port"]+"/command/"+target, true, localStorage["login"], localStorage["password"]);
	xhr.onreadystatechange = function(data) {
		if(xhr.readyState == 4 && xhr.status == 200) {
			displayResponse("Success", "Torrent added successfully.");
		} else if(xhr.readyState == 4 && xhr.status != 200) {
			displayResponse("Failure", "Server responded with an irregular HTTP error code:\n"+xhr.status+": "+xhr.responseText);
		}
	};
	
	if(data.substring(0,7) == "magnet:") {
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		var message = "urls="+encodeURIComponent(data);
		xhr.send(message);
	} else {
		// mostly stolen from https://github.com/igstan/ajax-file-upload/blob/master/complex/uploader.js
		var boundary = "AJAX-----------------------"+(new Date).getTime();
		xhr.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + boundary);
		var message = "--" + boundary + "\r\n";
		   message += "Content-Disposition: form-data; name=\"torrentfile\"; filename=\""+((torrentname.length && torrentname.length>1) ? torrentname : (new Date).getTime())+"\"\r\n";
		   message += "Content-Type: application/x-bittorrent\r\n\r\n";
		   message += data + "\r\n";
		   message += "--" + boundary + "--\r\n";
		
		xhr.sendAsBinary(message);
	}
}
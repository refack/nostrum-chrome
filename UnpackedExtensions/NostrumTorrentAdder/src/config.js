'use strict';
var reCommentContents = /\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//;

function multiline(fn) {
	if (typeof fn !== 'function') {
		throw new TypeError('Expected a function.');
	}

	var match = reCommentContents.exec(fn.toString());

	if (!match) {
		throw new TypeError('Multiline comment missing.');
	}

	return match[1];
}


RTA.clients.config.getConfig = function(client, name) {
	var config = RTA.clients.config.generalsettings
		.replace(/\{clienttype\}/g, client)
		.replace(/\{name\}/g, name);
	return config;
};

RTA.clients.config.generalsettings = multiline(function(){/*
	<table>
			<tbody>
				<tr>
					<td><span class="title">Name</span></td>
					<td><input type="text" name="name" value="{name}" /></td>
				</tr>
				<tr>
					<td><span class="title">Type</span></td>
					<td><input type="hidden" name="client" value="{clienttype}" /> {clienttype}</td>
				</tr>
				<tr>
					<td><span class="title">Host</span></td>
					<td><input type="text" name="host" /><br />
						<span class="tip">The ip/hostname to connect to</span></td>
				</tr>
				<tr>
					<td><span class="title">Port</span></td>
					<td><input type="text" name="port" /><br />
						<span class="tip">The remote port</span></td>
				</tr>
				<tr>
					<td><span class="title">SSL</span></td>
					<td><input type="checkbox" name="hostsecure" /><br />
						<span class="tip">Check if the WebUI runs on SSL (http<strong>s</strong>://). Set the Port to 443!</span></td>
				</tr>
				<tr>
					<td><span class="title">Username</span></td>
					<td><input type="text" name="login" /><br />
						<span class="tip">Login name of the WebUI</span></td>
				</tr>
				<tr>
					<td><span class="title">Password</span></td>
					<td><input type="password" name="password" /><br />
						<span class="tip">Password of the WebUI</span></td>
				</tr>
			</tbody>

			<tbody name="utorrentspecifics" class="specifics">
				<tr>
					<td><span class="title">Relative path</span><br />(optional)</td>
					<td><input type="text" name="utorrentrelativepath" /><br />
						<span class="tip">Enter only the text in quotation marks: http://someserver.com&quot;<strong>/gui/</strong>&quot;<br />
							Note: Unless you are doing reverse-proxying, this field should be left empty</span></td>
				</tr>
			</tbody>
	 </table>
 */});

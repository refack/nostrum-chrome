// ==UserScript==
// @name    Hide JAVA section in GAE docs
// @match   http://code.google.com/appengine/docs/*
// ==/UserScript==

GM_log("Hide JAVA section in GAE docs")
GM_addStyle(".tlw-instance-2 {display:none}");
GM_addStyle(".tlw-instance-1 {display:none}");


var mp3 = true;
var links = '';
var textlang = ['Download this video!', 'Download'];
var isCosmicPanda = Boolean(document.getElementById('watch-tray'));
var chrome = chrome || {};

var is_dom_as_expected = Boolean(
  (document.getElementById('video-player') || document.getElementById('movie_player'))
  &&
  !(document.getElementById('embed-holder') || document.getElementById('watch-download'))
);

if (is_dom_as_expected) {
    if (document.getElementById('video-player') || document.getElementById('movie_player')) {
        var ncss = document.createElement('style');
        ncss.type = 'text/css';
        ncss.innerHTML = 'div#watch-download-links{display:none; width:85px; box-shadow:#999 0px 0px 3px 0px; border-bottom-left-radius:2px; border-bottom-right-radius:2px; float:left; background:#EBEBEB;}#watch-download-links div{height:25px; background:#FFF!important; line-height:25px; font-size:12px; cursor:pointer; padding:0 8px!important; margin: 1px 0px 0px 0px!important;text-align:left !important; }#watch-download-links div:hover{background:#EBEBEB!important;}#dl{float:left; padding:4px}#watch-download-links div a{color:#000!important; text-decoration:none!important; height:100%; width:100%;}#watch-sidebar iframe{width:234px;height:60px;margin:0px 30px;}#dl{float:left}#wdl{border-radius:5px; border:1px solid #EAEAEA; cursor:pointer; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:14px;margin:0px auto 10px auto; overflow:hidden; display:none; height:auto}#wdl div{padding:5px;}#wdl div a{color:#000; text-decoration:none}#wdl div:hover{background:#D1E1FA;}#watch-actions{height:auto!important}#watch-channel-brand-div{display:none!important}#watch-actions-area-mp3-download{border-radius:5px; border:1px solid #CCC; line-height:14px; overflow:hidden; height:auto; padding:5px; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:14px}#mp3-download-progress{border:1px solid #EAEAEA; padding:1px!important; height:7px; float:left}#mp3-download-progress-bar{height:7px; width:1px; padding:0px!important; -webkit-transition:width 3s linear}#mp3-download-progress-text{float:right; font-size:10px; line-height:10px;}#MP3Down{display:none}';
        document.getElementsByTagName('head').item(0).appendChild(ncss);
    }

    var obj;
    var titulo = document.getElementById('vt') ? document.getElementById('vt').innerHTML : document.getElementsByName('title').item(0).content.replace('/', '').replace(':', '').replace('"', '');
    if (document.getElementById('movie_player')) {//FLASH
        obj = document.getElementById('movie_player').getAttribute('flashvars');
    } else {//HTML5
        var script = document.getElementsByTagName('script');
        for (var i = 0; i < script.length; i++) {
            if (script[i].innerHTML.match('url_encoded_fmt_stream_map')) {
                obj = script[i].innerHTML;
            }
        }
    }
    
    if (obj) {
        var swfs = decodeURIComponent(decodeURIComponent(obj).split('url_encoded_fmt_stream_map')[1]).replace(/u0026/g, '&').split('url=');
        for (var j = 1; j < swfs.length - 1; j++) {
            var encodedTitle = encodeURIComponent(titulo);
            if (swfs[j].match('&itag=')) {
                swfs[j] = swfs[j].split('&itag=')[swfs[j].split('&itag=').length - 1].replace(',', '') + '|' + swfs[j].split('\\&quality=' || '&quality=')[0];
                if (swfs[j].match('&type')) {
                    swfs[j] = swfs[j].split('&type')[0];
                }
                var videoinfo = [];
                videoinfo = swfs[j].split('|');
                if (videoinfo[0] === '38') {
                    links += '<div id="38m"><a href="' + videoinfo[1] + '&title=' + encodedTitle + '">Original(MP4)</a></div>';
                }
                if (videoinfo[0] === '37') {
                    links += '<div id="18m"><a href="' + videoinfo[1] + '&title=' + encodedTitle + '">1080p(MP4)</a></div>';
                }
                if (videoinfo[0] === '22') {
                    links += '<div id="72m"><a href="' + videoinfo[1] + '&title=' + encodedTitle + '">720p (MP4)</a></div>';
                }
                if (videoinfo[0] === '18') {
                    links += '<div id="36m"><a href="' + videoinfo[1] + '&title=' + encodedTitle + '">360p (MP4)</a></div>';
                }
/*
                if (videoinfo[0] === '45') {
                    links += '<div id="72h"><a href="' + videoinfo[1] + '&title=' + encodedTitle + '">720p (WebM)</a></div>';
                }
                if (videoinfo[0] === '35') {
                    links += '<div id="48f"><a href="' + videoinfo[1] + '&title=' + encodedTitle + '">480p (FLV)</a></div>';
                }
                if (videoinfo[0] === '34') {
                    links += '<div id="36f"><a href="' + videoinfo[1] + '&title=' + encodedTitle + '">360p (FLV)</a></div>';
                }
                if (videoinfo[0] === '43') {
                    links += '<div id="36h"><a href="' + videoinfo[1] + '&title=' + encodedTitle + '">360p (WebM)</a></div>';
                }
                if (videoinfo[0] === '17') {
                    links += '<div id="3Gg"><a href="' + videoinfo[1] + '&title=' + encodedTitle + '">144p (3GP)</a></div>';
                }
                if (videoinfo[0] === '5') {
                    links += '<div id="24f"><a href="' + videoinfo[1] + '&title=' + encodedTitle + '">240p (FLV)</a></div>';
                }
*/
            }
        }
    } else {
        links = '';
    }
    if (mp3) {
        links += '<div id="mp3">MP3<span style="font-size:7px">BETA</span></div>';
    }

    if (window.location === window.top.location) {
        chrome.extension.sendRequest({title:'SubmitDownloadLinks', content:links}, function (response) {
            if (!response.activateOSD) {
                return;
            }
            var dlb;
            if (document.getElementById('watch-actions') && links !== '' && !document.getElementById('watch-download')) {
                dlb = document.createElement('button');
                dlb.setAttribute('id', 'watch-download');
                if (isCosmicPanda) {
                    dlb.setAttribute('class', 'yt-uix-button yt-uix-tooltip');
                } else {
                    dlb.setAttribute('class', 'yt-uix-button yt-uix-tooltip yt-uix-tooltip-reverse');
                }
                dlb.setAttribute('data-tooltip', textlang[0]);
                dlb.setAttribute('data-tooltip-title', textlang[0]);
                dlb.setAttribute('title', textlang[0]);
                dlb.innerHTML = '<span class="yt-uix-button-content">' + textlang[1] + '</span>&nbsp;<img class="yt-uix-button-arrow" src="http://s.ytimg.com/yt/img/pixel-vfl73.gif" alt=""><ul class="yt-uix-button-menu" style="display: none"><li id="watch-download-links">' + links + '</li></ul>';
                document.getElementById('watch-share').parentNode.insertBefore(dlb, document.getElementById('watch-share').nextSibling);
                if (document.getElementById('watch-actions').clientHeight > 28) {
                    document.getElementById('watch-like').getElementsByTagName('span').item(0).style.display = 'none';
                    if (isCosmicPanda) {
                        document.getElementById('watch-actions').getElementsByTagName('span').item(2).getElementsByTagName('span').item(0).style.display = 'none';
                    }
                }

            }
            if (document.getElementById('vo') && links !== '') {
                dlb = document.createElement('button');
                dlb.setAttribute('id', 'dl');
                dlb.setAttribute('class', 'b');
                dlb.setAttribute('onclick', 'wdl=document.getElementById(\'wdl\').style; if(wdl.display!==\'block\'){wdl.display=\'block\'}else{wdl.display=\'none\'}');
                dlb.innerHTML = 'Download';
                var dll = document.createElement('div');
                dll.setAttribute('id', 'wdl');
                dll.innerHTML = links;
                document.getElementById('rd').parentNode.insertBefore(dlb, document.getElementById('rd').nextSibling);
                document.getElementById('ffd').parentNode.insertBefore(dll, document.getElementById('ffd').nextSibling);
            }
            if (document.getElementById('channel-like-action') && document.getElementById('playnav-player')) {
                var addChannelLink = function () {
                    if (!document.getElementById('watch-download') && document.getElementById('movie_player')) {
                        titulo = document.getElementById('playnav-curvideo-title').getElementsByTagName('a').item(0).innerHTML;
                        var dlb = document.createElement('button');
                        dlb.setAttribute('id', 'watch-download');
                        dlb.setAttribute('class', 'yt-uix-button yt-uix-tooltip');
                        dlb.setAttribute('style', 'margin-left:9px');
                        dlb.setAttribute('title', textlang[0]);
                        dlb.innerHTML = '<span class="yt-uix-button-content">' + textlang[1] + '</span>&nbsp;<img class="yt-uix-button-arrow" src="http://s.ytimg.com/yt/img/pixel-vfl73.gif" alt=""><ul class="yt-uix-button-menu" style="display: none"><li id="watch-download-links">' + links + '</li></ul>';
                        document.getElementById('watch-unlike').parentNode.insertBefore(dlb, document.getElementById('watch-unlike').nextSibling);
                    }
                };
                document.getElementById('playnav-left-panel').addEventListener('DOMSubtreeModified', addChannelLink, false);
                addChannelLink();
            }
            if (document.getElementById('mp3')) {
                document.getElementById('mp3').onclick = function () {
                    if (!document.getElementById('watch-actions-area-mp3-download')) {
                        var mp3d = document.createElement('div');
                        var UpdateMP3Progress = function () {
                            chrome.extension.sendRequest({title:'RquestMP3Status'}, function (response) {
                                document.getElementById('mp3-download-status-text').innerHTML = response.status;
                                document.getElementById('mp3-download-progress-bar').style.width = response.progress + '%';
                                document.getElementById('mp3-download-progress-text').innerHTML = response.progress + '%';
                            });
                            if (response.progress !== '100') {
                                setTimeout(UpdateMP3Progress, 1000);
                            }
                        };
                        mp3d.setAttribute('id', 'watch-actions-area-mp3-download');
                        mp3d.innerHTML = '<div id="mp3-download-progress"><div id="mp3-download-progress-bar" style="width:0"></div></div><span id="mp3-download-progress-text">0%</span><br><span>Status: </span><span id="mp3-download-status-text">Connecting...</span><a href="http://www.youtube-mp3.org/" style="float:right; color:#000" target="_blank">Powered by www.YouTube-mp3.org</a><iframe id="MP3Down" src="' + 'http://www.youtube-mp3.org/' + '#' + window.location.href + '"></iframe>';
                        document.getElementById('watch-actions').parentNode.insertBefore(mp3d, document.getElementById('watch-actions').nextSibling);
                        document.getElementsByTagName('head')[0].innerHTML += isCosmicPanda ? '<style type="text/css">#watch-actions-area-mp3-download{margin:20px auto 10px auto;background:#FAFAFA; width:610px} #mp3-download-progress{width:575px}#mp3-download-progress-bar{background:-webkit-linear-gradient(0deg,#3f3f3f,#666)}</style>' : '<style type="text/css">#watch-actions-area-mp3-download{margin:0 auto 10px auto;}#mp3-download-progress{width:592px}#mp3-download-progress-bar{background:#D1E1FA}</style>';
                        document.getElementById('MP3Down').addEventListener('load', UpdateMP3Progress, false);
                    }
                };
            }
        });
    }
}


if (window.location.toString().match('youtube-mp3.org') && window.location.toString().split('#')[1]) {
    document.getElementById('youtube-url').value = window.location.toString().split('#')[1];
    document.getElementById('submit').click();
    CheckMP3Update();
}


function CheckMP3Update() {
    if (document.getElementById('dl_link').style.display === 'block') {
        window.location = document.getElementById('dl_link').getElementsByTagName('a').item(0).href;
        chrome.extension.sendRequest({title:'ConvertMP3Status', progress:'100', status:'Starting download'});
    } else {
        var status, progress;
        if (document.getElementById('progress').innerHTML.split('%')[1]) {
            if (document.getElementById('progress').innerHTML.split('%')[1].match('download')) {
                status = 'Downloading';
                progress = document.getElementById('progress').innerHTML.split('%')[0];
            } else if (document.getElementById('progress').innerHTML.match('convert')) {
                status = 'Converting';
                progress = '100';
            }
        } else if (document.getElementById('status_text').innerHTML.match('Processing')) {
            status = 'Processing video(This may take some time)';
            progress = '0';
        } else {
            status = 'Connecting';
            progress = '0';
        }
        chrome.extension.sendRequest({title:'ConvertMP3Status', progress:progress, status:status});
        setTimeout(CheckMP3Update, 1000);
    }
}
var defaultConfig = {
    "newTab": true,
    "newTabSelected": true,
    "newTabPosition": "Last",
    "trackGA": true,
    "showBlog": true,
    "searchEngines": [
        {"name": "Youtube", "url": "http://www.youtube.com/results?search_query=%s&aq=f"},
        {"name": "IMDB", "url": "http://www.imdb.com/find?q=%s&s=all"},
        {"name": "Wikipedia", "url": "http://en.wikipedia.org/w/index.php?title=Special:Search&search=%s"},
        {
            "name": "Amazon",
            "url": "http://www.amazon.com/gp/search?ie=UTF8&keywords=%s&tag=sisese-20&index=aps&linkCode=ur2&camp=1789&creative=9325"
        }

    ]
};

var config = initializeConfig(localStorage["config"], defaultConfig);

function initializeConfig(localConfig, defaultConfig) {
    if (localConfig == undefined) {
        //future me: load defaultConfig from website, dynamically
        //see this, http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
        //but i guess it will be easier to just load a page with the JSON... except for performance
        localConfig = defaultConfig;

        localStorage["config"] = JSON.stringify(localConfig);

    }
    else {
        localConfig = JSON.parse(localConfig);

        //compares localConfig with defaultConfig
        for (var key in defaultConfig) {
            if (defaultConfig.hasOwnProperty(key)) {
                if (localConfig[key] == undefined) {
                    console.log(key + " -> " + defaultConfig[key] + " ---> " + localConfig[key]);
                    localConfig[key] = defaultConfig[key];
                }
            }
        }
    }
    ;
    return localConfig;
}

function genericSearch(info, tab, idSE) {

    if (config.newTab) { //for "remember an update my created tabs" feature, here I'll store the ID of the created tab and then reuse it with an update. to store the ID of a created tab use a callback function on the tabs.create thing = function(Tab tab) {...};
        searchOnNewTab(idSE, info, tab);
    }
    else {
        //Todo: Refactor this out of the else and use the newTab variable
        chrome.tabs.update(tab.id, {"url": config.searchEngines[idSE].url.replace(/%s/g, info.selectionText).replace(/%S/g, info.selectionText)});

    }
    ;
    trackGA(idSE);

}

function openOptions() {
    chrome.tabs.create({"url": "options.html"});
}

function openBlog() {
    chrome.tabs.create({"url": "http://simpleselectsearch.blogspot.com/"});
}

function checkboxOnClick() {
    if (config.newTab) {
        config.newTab = false;

    }
    else {
        config.newTab = true;

    }
    ;

    localStorage["config"] = JSON.stringify(config);
    //aca deberia ser newTab=estado del check Menu

}

function bulkSearch(info, tab) {
    for (i = 0; i < config.searchEngines.length; ++i) {

        searchOnNewTab(i, info, tab);
        trackGA(i);
    }
}

function searchOnNewTab(newTabIndex, info, tab) {

    var newTab = {"url": config.searchEngines[newTabIndex].url.replace(new RegExp("%s", "g"), info.selectionText).replace(new RegExp("%S", "g"), info.selectionText)}

    if (config.newTabPosition == "First") {
        newTab.index = 0;
    }
    else if (config.newTabPosition == "Next") {
        newTab.index = tab.index + 1;
    }
    else if (config.newTabPosition == "Previous") {
        newTab.index = tab.index;
    }
    newTab.active = config.newTabSelected;
    chrome.tabs.create(newTab);
}


//Tracks google analytics
function trackGA(idSE) {
    if (config.trackGA) {
        _gaq.push(['_trackEvent', 'Search Click', config.searchEngines[idSE].name, config.searchEngines[idSE].url]);
    }
    else {
        _gaq.push(['_trackEvent', 'Search Click', 'Confidential', 'Confidential']);
    }
}

// Create menu items
function createMenu() {
    chrome.contextMenus.removeAll();
    var context = "selection";
    var title = chrome.i18n.getMessage("bg_searchStringOn");

    if (config.searchEngines.length > 1) {
        var id = chrome.contextMenus.create({
            "title": title,
            "contexts": [context],
            "onclick": function (idSE) { return function (info, tab) {genericSearch(info, tab, idSE) } }(0)
        });


        for (i = 0; i < config.searchEngines.length; ++i) {
            var child = chrome.contextMenus.create({
                "title": config.searchEngines[i].name,
                "parentId": id,
                "contexts": [context],
                "onclick": function (idSE) { return function (info, tab) {genericSearch(info, tab, idSE) } }(i)
            });

        }

        // separator
        var child = chrome.contextMenus.create({"type": "separator", "parentId": id, "contexts": [context]});

        //search on all
        var child = chrome.contextMenus.create({
            "title": chrome.i18n.getMessage("bg_searchEverywhere"),
            "parentId": id,
            "contexts": [context],
            "onclick": bulkSearch
        });
        // separator
        var child = chrome.contextMenus.create({"type": "separator", "parentId": id, "contexts": [context]});

        // check new tab
        var child = chrome.contextMenus.create({
            "title": chrome.i18n.getMessage("bg_openOnNewTab"),
            "type": "checkbox",
            "checked": config.newTab,
            "parentId": id,
            "contexts": [context],
            "onclick": checkboxOnClick
        });
        // options
        var child = chrome.contextMenus.create({
            "title": chrome.i18n.getMessage("bg_options"),
            "parentId": id,
            "contexts": [context],
            "onclick": openOptions
        });

        //Blog
        if (config.showBlog) {
            // separator
            var child = chrome.contextMenus.create({"type": "separator", "parentId": id, "contexts": [context]});
            var child = chrome.contextMenus.create({
                "title": chrome.i18n.getMessage("bg_extensionBlog"),
                "parentId": id,
                "contexts": [context],
                "onclick": openBlog
            });
        }


    }
    else {
        title = title + " ";


        for (i = 0; i < config.searchEngines.length; ++i) {
            var id = chrome.contextMenus.create({
                "title": title + config.searchEngines[i].name,
                "contexts": [context],
                "onclick": function (idSE) { return function (info, tab) {genericSearch(info, tab, idSE) } }(i)
            });
        }


    }

}
// initialize menu
createMenu();

// Google Analytics stuff

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-23660432-1']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    //ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();


//open Options if first time

function onInstall() {
    messageVersion = chrome.i18n.getMessage("bg_installMessage");
    chrome.tabs.create({"url": "options.html"});
}

function onUpdate() {
    //console.log(prevVersion);
    if (prevVersion != "0.2.1") {
        messageVersion = chrome.i18n.getMessage("bg_updateMessage").replace("{VersionNumber}", currVersion);
        chrome.tabs.create({"url": "options.html"});
    }
}

function getVersion() {
    var details = chrome.app.getDetails();
    return details.version;
}

// Check if the version has changed.
var currVersion = getVersion();
var prevVersion = localStorage['version']
var messageVersion = "";
if (currVersion != prevVersion) {
    // Check if we just installed this extension.
    if (typeof prevVersion == 'undefined') {
        onInstall();
    } else {
        onUpdate();
    }
    localStorage['version'] = currVersion;
}

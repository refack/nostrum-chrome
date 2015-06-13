'use strict';
/*global localStorage, chrome */
var defaultConfig = {
    "newTab": true,
    "newTabSelected": true,
    "newTabPosition": "Last",
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
    if (localConfig === undefined) {
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
                if (localConfig[key] === undefined) {
                    console.log(key + " -> " + defaultConfig[key] + " ---> " + localConfig[key]);
                    localConfig[key] = defaultConfig[key];
                }
            }
        }
    }
    return localConfig;
}

function genericSearch(info, tab, idSE) {

    if (config.newTab) { //for "remember an update my created tabs" feature, here I'll store the ID of the created tab and then reuse it with an update. to store the ID of a created tab use a callback function on the tabs.create thing = function(Tab tab) {...};
        searchOnNewTab(idSE, info, tab);
    } else {
        //Todo: Refactor this out of the else and use the newTab variable
        chrome.tabs.update(tab.id, {"url": config.searchEngines[idSE].url.replace(/%s/g, info.selectionText).replace(/%S/g, info.selectionText)});
    }
}

function openOptions() {
    chrome.tabs.create({"url": "options.html"});
}

function checkboxOnClick() {
    config.newTab = !config.newTab;
    localStorage["config"] = JSON.stringify(config);
}

function bulkSearch(info, tab) {
    for (var i = 0; i < config.searchEngines.length; ++i) {

        searchOnNewTab(i, info, tab);
    }
}

function searchOnNewTab(newTabIndex, info, tab) {

    var newTab = {
        url: config.searchEngines[newTabIndex].url.replace(new RegExp("%s", "g"), info.selectionText).replace(new RegExp("%S", "g"), info.selectionText),
        openerTabId: tab.id
    };

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


// Create menu items
function createMenu() {
    chrome.contextMenus.removeAll();
    var context = "selection";
    var title = chrome.i18n.getMessage("bg_searchStringOn");

    if (!config.searchEngines.length) {
        title = title + " ";


        for (var j = 0; j < config.searchEngines.length; ++j) {
            chrome.contextMenus.create({
                "title": title + config.searchEngines[j].name,
                "contexts": [context],
                "onclick": (function (idSE) { return function (info, tab) {genericSearch(info, tab, idSE); }; })(j) // jshint ignore:line
            });
        }

        return;
    }
    var id = chrome.contextMenus.create({
        "title": title,
        "contexts": [context],
        "onclick": function (idSE) { return function (info, tab) {genericSearch(info, tab, idSE); }; }(0)
    });


    for (var i = 0; i < config.searchEngines.length; ++i) {
        chrome.contextMenus.create({
            "title": config.searchEngines[i].name,
            "parentId": id,
            "contexts": [context],
            "onclick": (function (idSE) { return function (info, tab) {genericSearch(info, tab, idSE); }; })(i) // jshint ignore:line
        });

    }

    // separator
    chrome.contextMenus.create({"type": "separator", "parentId": id, "contexts": [context]});

    //search on all
    chrome.contextMenus.create({
        "title": chrome.i18n.getMessage("bg_searchEverywhere"),
        "parentId": id,
        "contexts": [context],
        "onclick": bulkSearch
    });
    // separator
    chrome.contextMenus.create({"type": "separator", "parentId": id, "contexts": [context]});

    // check new tab
    chrome.contextMenus.create({
        "title": chrome.i18n.getMessage("bg_openOnNewTab"),
        "type": "checkbox",
        "checked": config.newTab,
        "parentId": id,
        "contexts": [context],
        "onclick": checkboxOnClick
    });
    // options
    chrome.contextMenus.create({
        "title": chrome.i18n.getMessage("bg_options"),
        "parentId": id,
        "contexts": [context],
        "onclick": openOptions
    });

}
// initialize menu
createMenu();

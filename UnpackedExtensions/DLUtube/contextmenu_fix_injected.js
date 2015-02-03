'use strict';
/*global EventTarget */
EventTarget.prototype.__addEventListener = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function monkeyAttachEvent(t, originalHandler, c) {
    function monkeyHandler(e) {
        if (e.ctrlKey) return;
        //jshint -W040
        return originalHandler.call(this, e);
        //jshint +W040
    }

    var h = (t == "contextmenu") ? monkeyHandler : originalHandler;
    return this.__addEventListener(t, h, c);
};


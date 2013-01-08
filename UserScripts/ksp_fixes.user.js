// ==UserScript==
// @name    KSP fixs
// @match   http://*.ksp.co.il/*
// ==/UserScript==




clickdiv = !function(orig) {
    return function (arg1) {
        if (arguments.callee.caller.arguments[0].button != 0) return false;
        orig(arg1);
    }
}(clickdiv)
'use strict';
/*global document */

document.addEventListener("click", clickCapture, true);
document.addEventListener("mousedown", clickCapture, true);


function clickCapture(e) {
    if (!(e.ctrlKey && e.button === 0) && e.button !== 1) return true;

    var link = e.path && [].filter.call(e.path, function (n) { return n.tagName === 'A'; })[0];
    if (!link) {
        e.preventDefault();
    } else {
        e.stopPropagation();
        link.classList.add('nostrum-visited');
    }
    return true;
}

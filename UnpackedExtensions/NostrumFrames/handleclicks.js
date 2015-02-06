'use strict';
/*global document */

document.addEventListener("click", clickCapture, true);
document.addEventListener("mousedown", clickCapture, true);


function clickCapture(e) {
    if (!(e.ctrlKey && e.button === 0) && e.button !== 1) return true;

    var link = getAncestorOrSelfTag(e.target, 'A');
    if (!link)
        e.preventDefault();
    else
        e.stopPropagation();
    return true;
}


function getAncestorOrSelfTag(node, tag) {
    while (node && node.tagName !== tag) { node = node.parentNode; }
    return node;
}

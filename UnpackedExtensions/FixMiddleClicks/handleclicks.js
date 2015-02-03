/*global chrome */
(function(){
    'use strict';
    function getAncestorOrSelfLink(node){
        while(node && node.tagName !== "A"){ node = node.parentNode; }
        return node;
    }

    function isMiddleSimple(e){ return e.button===1; }
    function isMiddleRegular(e){ return e.ctrlKey && e.button===0 || isMiddleSimple(e); }

    chrome.runtime.sendMessage("get o", function(o) {
        var isMiddle = o.ctrlLeft ? isMiddleRegular : isMiddleSimple;
//        var color = o.color;

        document.addEventListener("click", clickCapture, true);
        document.addEventListener("mousedown", clickCapture, true);

        function clickCapture(e){
            if (!isMiddle(e)) return;
            var link = getAncestorOrSelfLink(e.target);
            if (!link) return e.preventDefault();
            link.style.opacity = 0.5;
            e.stopPropagation();
        }
    });
})();

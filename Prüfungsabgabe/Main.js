"use strict";
var IceShop;
(function (IceShop) {
    window.addEventListener('load', handleload);
    IceShop.canvas = document.querySelector("canvas");
    function handleload() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        IceShop.crc2 = canvas.getContext("2d");
        IceShop.drawBackground();
    }
    IceShop.handleload = handleload;
})(IceShop || (IceShop = {}));
//# sourceMappingURL=Main.js.map
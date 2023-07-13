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
        document.getElementById("start").addEventListener('click', startGame);
        IceShop.drawBackground();
    }
    IceShop.handleload = handleload;
    function startGame() {
        document.getElementById("canvas").classList.remove("hidden");
        document.getElementById("gamestart").classList.add("hidden");
        document.getElementById("order").classList.add("hidden");
    }
})(IceShop || (IceShop = {}));
//# sourceMappingURL=Main.js.map
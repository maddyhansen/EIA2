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
        IceShop.giveOrder();
    }
    IceShop.handleload = handleload;
    function startGame() {
        // handleGame();
        document.getElementById("canvas").classList.remove("hidden");
        document.getElementById("gamestart").classList.add("hidden");
        document.getElementById("order").classList.remove("hidden");
        document.getElementById("list").classList.remove("hidden");
    }
    // let entrance :  ; 
    // let exit =; 
    // function handleGame(){
    //     if (){
    //        giveOrder()
    //    }
    //    if(){
    //     }
    // }
})(IceShop || (IceShop = {}));
//# sourceMappingURL=Main.js.map
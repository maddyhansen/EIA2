"use strict";
var IceShop;
(function (IceShop) {
    window.addEventListener('load', handleload);
    IceShop.canvas = document.querySelector("canvas");
    IceShop.crc2 = IceShop.canvas.getContext("2d");
    const areaX = 450;
    const areaY = 50;
    const areaWidth = 600;
    const areaHeight = 450;
    IceShop.crc2.fillRect(areaX, areaY, areaWidth, areaHeight);
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
        document.getElementById("order").classList.add("hidden");
        document.getElementById("list").classList.remove("hidden");
        alert("Click on entrance area/door to get the formular");
    }
    IceShop.canvas.addEventListener('click', (event) => {
        const mouseX = event.clientX - IceShop.canvas.offsetLeft;
        const mouseY = event.clientY - IceShop.canvas.offsetTop;
        if (mouseX >= areaX &&
            mouseX <= areaX + areaWidth &&
            mouseY >= areaY &&
            mouseY <= areaY + areaHeight) {
            console.log('Mouse click inside the area');
            document.getElementById("order").classList.remove("hidden");
        }
    });
    // let entrance :  ; 
    // let exit:
    // entrance == exit 
    // function handleGame(){
    //     if (){
    //        giveOrder()
    //    }
    //    if(){
    //     }
    // }
})(IceShop || (IceShop = {}));
//# sourceMappingURL=Main.js.map
"use strict";
var IceShop;
(function (IceShop) {
    console.log("canvasisthere");
    function drawBackground() {
        drawWallsAndFloor();
        drawFontaine();
        drawCounter();
        drawBenchandChair();
        drawTable();
        // drawHuman();
        // drawWaiter();
        // drawFlavour();
        //drawToppings();
        drawCookies();
        console.log("handleLoad working");
    }
    IceShop.drawBackground = drawBackground;
    ;
    function drawWallsAndFloor() {
        //Background
        IceShop.crc2.fillStyle = "#718e79";
        IceShop.crc2.fillRect(0, 0, 1000, 500);
        //Floor
        IceShop.crc2.fillStyle = "#7bd1c4";
        IceShop.crc2.fillRect(50, 50, 870, 400);
        //Walls
        IceShop.crc2.fillStyle = "#ff6a00";
        IceShop.crc2.fillRect(50, 50, 850, 20);
        IceShop.crc2.fillStyle = "#ff6a00";
        IceShop.crc2.fillRect(600, 450, 300, 20);
        IceShop.crc2.fillStyle = "#ff6a00";
        IceShop.crc2.fillRect(50, 450, 350, 20);
        IceShop.crc2.fillStyle = "#ff6a00";
        IceShop.crc2.fillRect(50, 50, 20, 400);
        IceShop.crc2.fillStyle = "#ff6a00";
        IceShop.crc2.fillRect(900, 50, 20, 420);
    }
    ;
    function drawFontaine() {
        //Fontaine 
        IceShop.crc2.fillStyle = "#858585";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(500, 250, 100, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        IceShop.crc2.fillStyle = "#636363";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(500, 250, 75, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        //Water in Fontaine
        IceShop.crc2.fillStyle = "#4696c2";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(500, 250, 70, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        //Leaves
        IceShop.crc2.fillStyle = "#25e435";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(500, 230, 15, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        IceShop.crc2.fillStyle = "#25e435";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(470, 260, 10, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        IceShop.crc2.fillStyle = "#25e435";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(530, 250, 13, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        //Flowers
        IceShop.crc2.fillStyle = "#b10b6c";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(500, 275, 7, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        IceShop.crc2.fillStyle = "#b10b6c";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(500, 265, 7, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        IceShop.crc2.fillStyle = "#b10b6c";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(495, 270, 7, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        IceShop.crc2.fillStyle = "#b10b6c";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(505, 270, 7, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        IceShop.crc2.fillStyle = "#f0b019";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(500, 270, 5, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
    }
    ;
    function drawCounter() {
        //shopcounter
        IceShop.crc2.fillStyle = "#636363";
        IceShop.crc2.fillRect(100, 320, 80, 35);
        IceShop.crc2.fillRect(180, 320, 40, 95);
        //ICE Coops
        IceShop.crc2.fillStyle = "#c00c33";
        IceShop.crc2.fillRect(110, 325, 20, 20);
        IceShop.crc2.fillStyle = "#782b08";
        IceShop.crc2.fillRect(140, 325, 20, 20);
        IceShop.crc2.fillStyle = "#f4b14e";
        IceShop.crc2.fillRect(170, 325, 20, 20);
    }
    ;
    function drawBenchandChair() {
        //Bench left upper corner
        IceShop.crc2.fillStyle = "#733d07";
        IceShop.crc2.fillRect(90, 90, 90, 30);
        IceShop.crc2.fillRect(90, 90, 30, 100);
        //chair left upper corner
        IceShop.crc2.fillStyle = "#733d07";
        IceShop.crc2.fillRect(190, 140, 30, 30);
        IceShop.crc2.fillRect(140, 200, 30, 30);
        //Bench right upper corner
        IceShop.crc2.fillStyle = "#733d07";
        IceShop.crc2.fillRect(780, 90, 90, 30);
        IceShop.crc2.fillRect(850, 90, 30, 100);
        //chair right upper corner
        IceShop.crc2.fillStyle = "#733d07";
        IceShop.crc2.fillRect(750, 140, 30, 30);
        IceShop.crc2.fillRect(800, 200, 30, 30);
        //Bench right down corner
        IceShop.crc2.fillStyle = "#733d07";
        IceShop.crc2.fillRect(780, 400, 90, 30);
        IceShop.crc2.fillRect(840, 300, 30, 100);
        //chair right down corner
        IceShop.crc2.fillStyle = "#733d07";
        IceShop.crc2.fillRect(720, 350, 30, 30);
        IceShop.crc2.fillRect(780, 300, 30, 30);
    }
    function drawTable() {
        //Table left upper corner 
        IceShop.crc2.fillStyle = "#78c936";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(155, 155, 30, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        //Table right upper corner 
        IceShop.crc2.fillStyle = "#78c936";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(815, 160, 30, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        //Table right down corner 
        IceShop.crc2.fillStyle = "#78c936";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(800, 365, 30, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
    }
    // function drawCookies(){
    //     crc2.beginPath();
    //         crc2.fillStyle = "#bf731d";
    //         crc2.ellipse(200,80, 8, 2, 3, 0, 20);
    //         crc2.ellipse(240, 130, 8, 2, 3, 0, 20);
    //         crc2.fill();
    //         crc2.closePath();
    //         crc2.beginPath();
    //         crc2.ellipse(210, 110, 8, 2, 3, 0, 20);
    //         crc2.fill();
    //         crc2.closePath();
    //         crc2.beginPath();
    //         crc2.fillStyle = "#814e13";
    //         crc2.ellipse(200, 110, 8, 2, 3, 0, 20);
    //         crc2.ellipse(220, 90, 8, 2, 3, 0, 20);
    //         crc2.fill();
    //         crc2.closePath();
    //         crc2.beginPath();     
    //         crc2.ellipse(265, 145, 8, 2, 3, 0, 20);
    //         crc2.fill();
    //         crc2.closePath();
    //         crc2.beginPath(); 
    //         crc2.fillStyle = "#5d380e";
    //         crc2.ellipse(140, 140, 8, 2, 3, 0, 20);
    //         crc2.fill()
    //         crc2.closePath();
    //         crc2.beginPath(); 
    //         crc2.ellipse(280, 120, 8, 2, 3, 0, 20);
    //         crc2.ellipse(230, 120, 8, 2, 3, 0, 20);
    //         crc2.fill();
    // }
    // function drawToppings() {
    //     crc2.beginPath();
    //     crc2.rotate((45 * Math.PI) / 180);
    //     crc2.fillStyle = "#223b8c";
    //     crc2.fillRect(200, 0, 8, 2);
    //     crc2.fillRect(250, -80, 8, 2);
    //     crc2.fillRect(280, -95, 8, 2);
    //     crc2.fillRect(180, -90, 8, 2);
    //     crc2.fillRect(190, -70, 8, 2);
    //     crc2.fillRect(280, -75, 8, 2);
    //     crc2.fillRect(210, -80, 8, 2);
    //     crc2.fillRect(190, -60, 8, 2);
    //     crc2.closePath();
    //     crc2.beginPath();
    //     crc2.rotate((44 * Math.PI) / 180);
    //     crc2.fillStyle = "#166e2a";
    //     crc2.fillRect(150, -250, 8, 2);
    //     crc2.fillRect(130, -300, 8, 2);
    //     crc2.fillRect(130, -200, 8, 2);
    //     crc2.fillRect(130, -150, 8, 2);
    //     crc2.fillRect(80, -230, 8, 2);
    //     crc2.fillRect(90, -220, 8, 2);
    //     crc2.fillRect(150, -230, 8, 2);
    //     crc2.fillRect(130, -270, 8, 2);
    //     crc2.fillRect(130, -190, 8, 2);
    //     crc2.closePath();
    //     crc2.beginPath();
    //     crc2.rotate((46 * Math.PI) / 180);
    //     crc2.fillStyle = "#8a032b";
    //     crc2.fillRect(-40, -200, 8, 2);
    //     crc2.fillRect(-80, -230, 8, 2);
    //     crc2.fillRect(-40, -230, 8, 2);
    //     crc2.fillRect(-100, -310, 8, 2);
    //     crc2.fillRect(-120, -210, 8, 2);
    //     crc2.fillRect(-105, -245, 8, 2);
    //     crc2.fillRect(-30, -240, 8, 2);
    //     crc2.fillRect(-120, -320, 8, 2);
    //     crc2.fillRect(-130, -220, 8, 2);
    //     crc2.stroke();
    //     crc2.closePath();
    //     crc2.rotate(0);
    // }
    // function drawFlavour (){
    //     crc2.fillStyle = "#8a1534";
    //     crc2.beginPath();
    //     crc2.arc(700, 275, 30, 0, 2 * Math.PI);
    //     crc2.fill();
    //     crc2.closePath();
    //     crc2.fillStyle = "#b61b44";
    //     crc2.beginPath();
    //     crc2.arc(715, 250, 30, 0, 2 * Math.PI);
    //     crc2.fill();
    //     crc2.closePath();
    //     crc2.fillStyle = "#d11f4e";
    //     crc2.beginPath();
    //     crc2.arc(725, 275, 30, 0, 2 * Math.PI);
    //     crc2.fill();
    //     crc2.closePath();
    // }
    // function drawHuman(): void {
    //     //Smilemad
    //     //Head
    //     crc2.beginPath();
    //     crc2.fillStyle = "#c71b0f"; //mad head
    //     crc2.fillRect(720, 350, 30, 50);
    //     //Face
    //     crc2.fillStyle = "black";
    //     crc2.fillRect(725, 360, 5, 5);
    //     crc2.fillStyle = "black";
    //     crc2.fillRect(740, 360, 5, 5);
    //     //Mouthwincle sad
    //     //crc2.beginPath();
    //     //crc2.fillStyle = "black";
    //     //crc2.arc(735, 375, 7, 1 * Math.PI, 2 * Math.PI);
    //     //crc2.stroke();
    //     //crc2.closePath();
    //     //crc2.beginPath();
    //     //Smileunwell
    //     //Head
    //     crc2.beginPath();
    //     crc2.fillStyle = "#f90"; //unwell head
    //     crc2.fillRect(720, 350, 30, 50);
    //     //Face
    //     crc2.fillStyle = "black";
    //     crc2.fillRect(725, 360, 5, 5);
    //     crc2.fillStyle = "black";
    //     crc2.fillRect(740, 360, 5, 5);
    //     //Mouthwincle unwell
    //     // crc2.fillStyle = "black";
    //     // crc2.fillRect(730,370, 15, 2);
    //     //Smilehappy
    //     //Head
    //     crc2.beginPath();
    //     crc2.fillStyle = "#ffa78f"; //happy
    //     crc2.fillRect(720, 350, 30, 50);
    //     //Face
    //     crc2.fillStyle = "black";
    //     crc2.fillRect(725, 360, 5, 5);
    //     crc2.fillStyle = "black";
    //     crc2.fillRect(740, 360, 5, 5);
    //     //Mouthwincle happy
    //     /*
    //     crc2.beginPath();
    //     crc2.strokeStyle = "black";
    //     crc2.arc(735, 368, 5, 0,  1 * Math.PI);
    //     crc2.stroke();
    //     crc2.closePath();
    //     crc2.beginPath();*/
    //     //Body
    //     crc2.fillStyle = "#1d65c3";
    //     crc2.fillRect(720, 380, 30, 30);
    //     crc2.closePath();
    // }
    // function drawWaiter(): void {
    // //Smilehappy
    // //Head
    // crc2.beginPath();
    // crc2.fillStyle = "#ffa78f"; //happy
    // crc2.fillRect(720, 350, 30, 50);
    // //Face
    // crc2.fillStyle = "black";
    // crc2.fillRect(725, 360, 5, 5);
    // crc2.fillStyle = "black";
    // crc2.fillRect(740, 360, 5, 5);
    // //Mouthwincle happy
    // crc2.beginPath();
    // crc2.strokeStyle = "black";
    // crc2.arc(735, 368, 5, 0,  1 * Math.PI);
    // crc2.stroke();
    // crc2.closePath();
    // crc2.beginPath();
    // //Body
    // crc2.fillStyle = "white";
    // crc2.fillRect(720, 380, 30, 30);
    // crc2.closePath();
    // //Tie and Blazer
    // crc2.fillStyle = "black";
    // crc2.beginPath();
    // crc2.arc(735, 383, 5, 0, 2 * Math.PI);
    // crc2.fill();
    // crc2.closePath();
    // crc2.fillStyle = "black";
    // crc2.beginPath();
    // crc2.arc(735, 380, 5, 0, 2 * Math.PI);
    // crc2.fill();
    // crc2.closePath();
    // crc2.fillStyle = "black";
    // crc2.beginPath();
    // crc2.arc(735, 390, 5, 0, 2 * Math.PI);
    // crc2.fill();
    // crc2.closePath();
    // crc2.beginPath();
    // crc2.moveTo(720, 410);
    // crc2.lineTo(750, 390);
    // crc2.lineTo(750, 410);
    // crc2.fill();
    // crc2.beginPath();
    // crc2.moveTo(750, 410);
    // crc2.lineTo(720, 390);
    // crc2.lineTo(720, 410);
    // crc2.fill();
    // }
})(IceShop || (IceShop = {}));
//# sourceMappingURL=Background.js.map
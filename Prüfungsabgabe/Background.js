"use strict";
var IceShop;
(function (IceShop) {
    function drawBackground() {
        drawWallsAndFloor();
        drawFontaine();
        drawCounter();
        drawBenchandChair();
        drawTable();
        drawHuman();
        drawWaiter();
    }
    IceShop.drawBackground = drawBackground;
    ;
    console.log("Hi, I am your background!");
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
    function drawHuman() {
        //Smilemad
        //Head
        // crc2.beginPath();
        // crc2.fillStyle = "#c71b0f"; //mad head
        // crc2.fillRect(720, 350, 30, 50);
        // //Face
        // crc2.fillStyle = "black";
        // crc2.fillRect(725, 360, 5, 5);
        // crc2.fillStyle = "black";
        // crc2.fillRect(740, 360, 5, 5);
        //Mouthwincle sad
        //crc2.beginPath();
        //crc2.fillStyle = "black";
        //crc2.arc(735, 375, 7, 1 * Math.PI, 2 * Math.PI);
        //crc2.stroke();
        //crc2.closePath();
        //crc2.beginPath();
        // //Smileunwell
        // //Head
        // crc2.beginPath();
        // crc2.fillStyle = "#f90"; //unwell head
        // crc2.fillRect(420, 350, 30, 50);
        // //Face
        // crc2.fillStyle = "black";
        // crc2.fillRect(425, 360, 5, 5);
        // crc2.fillStyle = "black";
        // crc2.fillRect(440, 360, 5, 5);
        //Mouthwincle unwell
        // crc2.fillStyle = "black";
        // crc2.fillRect(730,370, 15, 2);
        //Smilehappy
        //Head
        IceShop.crc2.beginPath();
        IceShop.crc2.fillStyle = "#ffa78f"; //happy
        IceShop.crc2.fillRect(470, 350, 30, 50);
        //Face
        IceShop.crc2.fillStyle = "black";
        IceShop.crc2.fillRect(475, 360, 5, 5);
        IceShop.crc2.fillStyle = "black";
        IceShop.crc2.fillRect(490, 360, 5, 5);
        //Mouthwincle happy
        IceShop.crc2.beginPath();
        IceShop.crc2.strokeStyle = "black";
        IceShop.crc2.arc(485, 368, 5, 0, 1 * Math.PI);
        IceShop.crc2.stroke();
        IceShop.crc2.closePath();
        IceShop.crc2.beginPath();
        //Body
        IceShop.crc2.fillStyle = "#1d65c3";
        IceShop.crc2.fillRect(470, 380, 30, 30);
        IceShop.crc2.closePath();
    }
    function drawWaiter() {
        //Smilehappy
        //Head
        IceShop.crc2.beginPath();
        IceShop.crc2.fillStyle = "#ffa78f"; //happy
        IceShop.crc2.fillRect(720, 350, 30, 50);
        //Face
        IceShop.crc2.fillStyle = "black";
        IceShop.crc2.fillRect(725, 360, 5, 5);
        IceShop.crc2.fillStyle = "black";
        IceShop.crc2.fillRect(740, 360, 5, 5);
        //Mouthwincle happy
        IceShop.crc2.beginPath();
        IceShop.crc2.strokeStyle = "black";
        IceShop.crc2.arc(735, 368, 5, 0, 1 * Math.PI);
        IceShop.crc2.stroke();
        IceShop.crc2.closePath();
        IceShop.crc2.beginPath();
        //Body
        IceShop.crc2.fillStyle = "white";
        IceShop.crc2.fillRect(720, 380, 30, 30);
        IceShop.crc2.closePath();
        //Tie and Blazer
        IceShop.crc2.fillStyle = "black";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(735, 383, 5, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        IceShop.crc2.fillStyle = "black";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(735, 380, 5, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        IceShop.crc2.fillStyle = "black";
        IceShop.crc2.beginPath();
        IceShop.crc2.arc(735, 390, 5, 0, 2 * Math.PI);
        IceShop.crc2.fill();
        IceShop.crc2.closePath();
        IceShop.crc2.beginPath();
        IceShop.crc2.moveTo(720, 410);
        IceShop.crc2.lineTo(750, 390);
        IceShop.crc2.lineTo(750, 410);
        IceShop.crc2.fill();
        IceShop.crc2.beginPath();
        IceShop.crc2.moveTo(750, 410);
        IceShop.crc2.lineTo(720, 390);
        IceShop.crc2.lineTo(720, 410);
        IceShop.crc2.fill();
    }
})(IceShop || (IceShop = {}));
//# sourceMappingURL=Background.js.map
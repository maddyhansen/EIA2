"use strict";
var FlyingPeopleAlpsIII;
(function (FlyingPeopleAlpsIII) {
    console.log("Its me, hi I am the problem its me!");
    window.addEventListener('load', handleload);
    FlyingPeopleAlpsIII.goldy = 0.62;
    FlyingPeopleAlpsIII.canvas = document.querySelector("canvas");
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        FlyingPeopleAlpsIII.crc2 = canvas.getContext("2d");
        FlyingPeopleAlpsIII.horizon = FlyingPeopleAlpsIII.crc2.canvas.height * FlyingPeopleAlpsIII.goldy;
        console.log("Iamhereeee");
        console.log(FlyingPeopleAlpsIII.goldy);
        FlyingPeopleAlpsIII.drawBackground();
        FlyingPeopleAlpsIII.drawMountains(new FlyingPeopleAlpsIII.Vector(FlyingPeopleAlpsIII.horizon, 70));
        FlyingPeopleAlpsIII.drawSunny(new FlyingPeopleAlpsIII.Vector(100, 70));
        FlyingPeopleAlpsIII.drawCloud(new FlyingPeopleAlpsIII.Vector(500, 175), new FlyingPeopleAlpsIII.Vector(250, 75));
        FlyingPeopleAlpsIII.drawTriangle(new FlyingPeopleAlpsIII.Vector(0, 400));
        FlyingPeopleAlpsIII.drawLandingCircle(new FlyingPeopleAlpsIII.Vector(200, 400), 500, 30), new FlyingPeopleAlpsIII.Vector(190, 30);
        FlyingPeopleAlpsIII.drawShack(new FlyingPeopleAlpsIII.Vector(700, 550));
        FlyingPeopleAlpsIII.drawWindSock(new FlyingPeopleAlpsIII.Vector(380, 500));
        FlyingPeopleAlpsIII.drawTree(new FlyingPeopleAlpsIII.Vector(90, 190));
        FlyingPeopleAlpsIII.drawTree1(new FlyingPeopleAlpsIII.Vector(400, 190));
        FlyingPeopleAlpsIII.drawTree2(new FlyingPeopleAlpsIII.Vector(440, 190));
        FlyingPeopleAlpsIII.drawTree3(new FlyingPeopleAlpsIII.Vector(360, 190));
        FlyingPeopleAlpsIII.drawTree4(new FlyingPeopleAlpsIII.Vector(330, 190));
        FlyingPeopleAlpsIII.imgData = FlyingPeopleAlpsIII.crc2.getImageData(0, 0, FlyingPeopleAlpsIII.crc2.canvas.width, FlyingPeopleAlpsIII.crc2.canvas.height);
        console.log(FlyingPeopleAlpsIII.horizon);
        FlyingPeopleAlpsIII.crc2.putImageData(FlyingPeopleAlpsIII.imgData, 0, 0);
        createFlyingPerson();
        window.setInterval(animateFlyingPerson, 1000); //As soon as I change the number the FlyingPerson vanishes. I think the Intervall is going through changeColor instead of going through move().... Dont know how to fix it
        createBumbleBee();
        window.setInterval(animateBumblebee, 1);
    }
    let FlyingPerson = [];
    let insectArray = [];
    console.log(FlyingPerson[5]);
    FlyingPeopleAlpsIII.landingzone = new FlyingPeopleAlpsIII.Vector(400, 500); //Vector is not a constructor? (Konsole im Browser (debugger) meckert, hab aber keine Ahnung was das Problem ist...)
    FlyingPeopleAlpsIII.hikingzone = new FlyingPeopleAlpsIII.Vector(0, 440);
    FlyingPeopleAlpsIII.flystart = new FlyingPeopleAlpsIII.Vector(50, 150);
    function createFlyingPerson() {
        for (let iFlyingPerson = 0; iFlyingPerson < 10; iFlyingPerson++) {
            let paraglideri = new FlyingPeopleAlpsIII.paraglider(new FlyingPeopleAlpsIII.Vector(400, 500), "flying");
            FlyingPerson.push(paraglideri);
            //console.log(paraglideri)
            //console.log(FlyingPerson)
        }
    }
    function animateFlyingPerson() {
        FlyingPeopleAlpsIII.crc2.clearRect(0, 0, 1000, 600);
        FlyingPeopleAlpsIII.crc2.putImageData(FlyingPeopleAlpsIII.imgData, 0, 0);
        for (let paraglideri of FlyingPerson) {
            paraglideri.move(1 / 50); //hiermit kommt er auch nicht klar
            paraglideri.draw();
        }
    }
    function createBumbleBee() {
        for (let i = 0; i < 5; i++) {
            let bumblebee = new FlyingPeopleAlpsIII.bumblebees(0.5, new FlyingPeopleAlpsIII.Vector(10, 0));
            insectArray.push(bumblebee);
        }
    }
    function animateBumblebee() {
        FlyingPeopleAlpsIII.crc2.clearRect(0, 0, 1000, 600);
        FlyingPeopleAlpsIII.crc2.putImageData(FlyingPeopleAlpsIII.imgData, 0, 0);
        for (let bumblebee of insectArray) {
            bumblebee.move(1 / 50);
            bumblebee.draw();
        }
    }
    /* function drawflyingPerson(_position: Vector, _size: Vector) {
 
 
         crc2.beginPath();
         crc2.fillStyle = "#003300";
         crc2.fillRect(_position.x, _position.y, 10, 16);
         crc2.fillStyle = "#ffffcc";
         crc2.fillRect(_position.x, _position.y - 6, 10, 10);
         crc2.closePath();
 
         crc2.beginPath();
         crc2.moveTo(_position.x, _position.y);
         crc2.lineTo(_position.x - 20, _position.y - 20);
         crc2.lineTo(_position.x + 30, _position.y - 30);
         crc2.stroke();
         crc2.fillStyle = "#b30000";
         crc2.fill();
         crc2.closePath();
 
     };
 
     function drawPerson(_position: Vector, _size: Vector) {
 
         crc2.beginPath();
         crc2.fillStyle = "#003300";
         crc2.fillRect(_position.x, _position.y, 10, 16);
 
         crc2.fillStyle = "#ffffcc";
         crc2.fillRect(_position.x, _position.y - 6, 10, 10);
         crc2.closePath();
     }*/
})(FlyingPeopleAlpsIII || (FlyingPeopleAlpsIII = {}));
//# sourceMappingURL=script.js.map
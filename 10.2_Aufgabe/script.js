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
        createBumbleBee();
        createFlyingPerson();
        window.setInterval(animateFlyingPerson, 25);
    }
    let ObjectFlying = [];
    FlyingPeopleAlpsIII.landingzone = new FlyingPeopleAlpsIII.Vector(400, 500);
    FlyingPeopleAlpsIII.hikingzone = new FlyingPeopleAlpsIII.Vector(0, 440);
    FlyingPeopleAlpsIII.flystart = new FlyingPeopleAlpsIII.Vector(50, 150);
    function createFlyingPerson() {
        for (let iFlyingObject = 0; iFlyingObject < 10; iFlyingObject++) {
            let paraglideri = new FlyingPeopleAlpsIII.Paraglider();
            ObjectFlying.push(paraglideri);
        }
    }
    function createBumbleBee() {
        for (let i = 0; i < 5; i++) {
            let bumblebee = new FlyingPeopleAlpsIII.Bumblebees();
            ObjectFlying.push(bumblebee);
        }
    }
    function animateFlyingPerson() {
        FlyingPeopleAlpsIII.crc2.clearRect(0, 0, 1000, 600);
        FlyingPeopleAlpsIII.crc2.putImageData(FlyingPeopleAlpsIII.imgData, 0, 0);
        for (let paraglideri of ObjectFlying) {
            paraglideri.doActivity(1 / 50);
            paraglideri.draw();
        }
    }
})(FlyingPeopleAlpsIII || (FlyingPeopleAlpsIII = {}));
//# sourceMappingURL=script.js.map
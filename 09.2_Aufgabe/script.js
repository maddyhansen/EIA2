"use strict";
var FlyingPeopleAlpsII;
(function (FlyingPeopleAlpsII) {
    console.log("Its me, hi I am the problem its me!");
    window.addEventListener('load', handleload);
    FlyingPeopleAlpsII.goldy = 0.62;
    FlyingPeopleAlpsII.canvas = document.querySelector("canvas");
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        FlyingPeopleAlpsII.crc2 = canvas.getContext("2d");
        FlyingPeopleAlpsII.horizon = FlyingPeopleAlpsII.crc2.canvas.height * FlyingPeopleAlpsII.goldy;
        console.log("Iamhereeee");
        console.log(FlyingPeopleAlpsII.goldy);
        FlyingPeopleAlpsII.drawBackground();
        FlyingPeopleAlpsII.drawMountains(new FlyingPeopleAlpsII.Vector(FlyingPeopleAlpsII.horizon, 70));
        FlyingPeopleAlpsII.drawSunny(new FlyingPeopleAlpsII.Vector(100, 70));
        FlyingPeopleAlpsII.drawCloud(new FlyingPeopleAlpsII.Vector(500, 175), new FlyingPeopleAlpsII.Vector(250, 75));
        FlyingPeopleAlpsII.drawTriangle(new FlyingPeopleAlpsII.Vector(0, 400));
        FlyingPeopleAlpsII.drawLandingCircle(new FlyingPeopleAlpsII.Vector(0, 400), new FlyingPeopleAlpsII.Vector(190, 30), new FlyingPeopleAlpsII.Vector(190, 30));
        FlyingPeopleAlpsII.drawShack(new FlyingPeopleAlpsII.Vector(700, 550));
        FlyingPeopleAlpsII.drawWindSock(new FlyingPeopleAlpsII.Vector(380, 500));
        FlyingPeopleAlpsII.drawTree(new FlyingPeopleAlpsII.Vector(90, 190));
        FlyingPeopleAlpsII.drawTree1(new FlyingPeopleAlpsII.Vector(400, 190));
        FlyingPeopleAlpsII.drawTree2(new FlyingPeopleAlpsII.Vector(440, 190));
        FlyingPeopleAlpsII.drawTree3(new FlyingPeopleAlpsII.Vector(360, 190));
        FlyingPeopleAlpsII.drawTree4(new FlyingPeopleAlpsII.Vector(330, 190));
        FlyingPeopleAlpsII.imgData = FlyingPeopleAlpsII.crc2.getImageData(0, 0, FlyingPeopleAlpsII.crc2.canvas.width, FlyingPeopleAlpsII.crc2.canvas.height);
        console.log(FlyingPeopleAlpsII.horizon);
        animateFlyingPerson();
        createFlyingPerson();
        window.setInterval(animateFlyingPerson, 1000);
    }
    let FlyingPerson = [];
    FlyingPeopleAlpsII.landingzone = new FlyingPeopleAlpsII.Vector(400, 500); //Vector is not a constructor?
    FlyingPeopleAlpsII.hikingzone = new FlyingPeopleAlpsII.Vector(0, 440);
    FlyingPeopleAlpsII.flystart = new FlyingPeopleAlpsII.Vector(50, 150);
    function createFlyingPerson() {
        for (let iFlyingPerson = 0; iFlyingPerson < 10; iFlyingPerson++) {
            let paraglideri = new FlyingPeopleAlpsII.paraglider(new FlyingPeopleAlpsII.Vector(400, 500));
            FlyingPerson.push(paraglideri);
        }
    }
    function animateFlyingPerson() {
        FlyingPeopleAlpsII.crc2.putImageData(FlyingPeopleAlpsII.imgData, 0, 0);
        for (let paraglideri of FlyingPerson) {
            paraglideri.draw(new FlyingPeopleAlpsII.Vector(150, 150), new FlyingPeopleAlpsII.Vector(10, 16));
            paraglideri.move(1 / 1000); //hiermit kommt er auch nicht klar
        }
    }
    /*  function drawBee(_position: Vector): void {
          console.log("Bee1");
          crc2.save();
          crc2.translate(_position.x, _position.y);
  
          let grd = crc2.createLinearGradient(2, 3, 6, 8);
          grd.addColorStop(0, "yellow");
          grd.addColorStop(1, "black");
          grd.addColorStop(1, "yellow");
  
          crc2.beginPath();
          crc2.ellipse(-2, -10, 8, 2, 80, -2, 2 * Math.PI);
          crc2.fillStyle = "white";
          crc2.fill();
  
          crc2.beginPath();
          crc2.ellipse(0, 0, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
          crc2.fillStyle = grd;
          crc2.fill();
  
          crc2.beginPath();
          crc2.ellipse(2, -9, 8, 2, -80, 20, 2 * Math.PI);
          crc2.fillStyle = "lightgrey";
          crc2.fill();
  
          crc2.restore();
      }
  
  
  
      function drawflyingPerson(_position: Vector, _size: Vector) {
  
  
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
})(FlyingPeopleAlpsII || (FlyingPeopleAlpsII = {}));
//# sourceMappingURL=script.js.map
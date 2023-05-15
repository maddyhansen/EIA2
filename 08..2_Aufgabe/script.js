"use strict";
var FlyingPeopleAlps;
(function (FlyingPeopleAlps) {
    console.log("Its me, hi I am the problem its me!");
    window.addEventListener('load', handleload);
    let crc2;
    let goldy = 0.62;
    let canvas;
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * goldy;
        console.log("Iamhereeee");
        console.log(goldy);
        drawBackground();
        drawSunny({ x: 100, y: 70 });
        drawCloud({ x: 500, y: 175 }, { x: 250, y: 75 });
        drawTriangle({ x: 0, y: 440 });
        drawLandingCircle({ x: 400, y: 500 }, 190, 30);
        drawShack({ x: 700, y: 550 });
        drawWindSock({ x: 350, y: 580 });
        console.log(horizon);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(goldy, "white");
        gradient.addColorStop(1, "HSL(100,80%,30%)");
        console.log(gradient);
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log(canvas);
    }
    function drawSunny(_position) {
        console.log('Sun', _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60 ,100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawLandingCircle(_position, _radiusX, _radiusY) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(_radiusX / _radiusY, 1);
        crc2.fillStyle = "green";
        crc2.beginPath();
        crc2.arc(0, 0, _radiusY, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }
    function drawTriangle(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(600, 0);
        crc2.lineTo(0, -300);
        crc2.closePath();
        crc2.fillStyle = "grey";
        crc2.fill();
        crc2.restore();
    }
    function drawShack(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(70, 0);
        crc2.lineTo(70, -50);
        crc2.lineTo(0, -100);
        crc2.fillStyle = "lightblue";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(-50, -70);
        crc2.lineTo(5, -70);
        crc2.lineWidth = 10;
        crc2.strokeStyle = "blue";
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(80, -50);
        crc2.lineTo(-10, -100);
        crc2.lineWidth = 10;
        crc2.strokeStyle = "red";
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(-45, 0);
        crc2.lineTo(-45, -70);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.restore();
    }
    function drawWindSock(_position) {
        console.log("WindSock", _position);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -80);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.beginPath();
        crc2.ellipse(30, -80, 30, 10, Math.PI, 0, 1.75 * Math.PI);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
})(FlyingPeopleAlps || (FlyingPeopleAlps = {}));
//# sourceMappingURL=script.js.map
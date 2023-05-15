"use strict";
var CanvasI;
(function (CanvasI) {
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
        console.log("Iamhereeee");
        console.log(goldy);
        drawBackground();
        drawSunny({ x: 100, y: 70 });
        drawCloud({ x: 500, y: 175 }, { x: 250, y: 75 });
        drawPattern();
    }
    function drawPattern() {
        let pattern = document.createElement('canvas').getContext('2d');
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = '';
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();
        crc2.fillStyle = "" + crc2.createPattern(pattern.canvas, 'repeat');
        crc2.fillRect(0, 0, canvas.width, canvas.height);
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
        console.log('cloud');
        console.log("T2");
        let nParticles = 15;
        let particle = new Path2D();
        let radiusParticle = 20;
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0,100%,100%,0.5)");
        gradient.addColorStop(1, "HSLA(0,100%,100%,0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
        }
    }
})(CanvasI || (CanvasI = {}));
//# sourceMappingURL=script.js.map
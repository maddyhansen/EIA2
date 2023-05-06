"use strict";
var Canvas;
(function (Canvas) {
    console.log("Its me, hi I am the problem its me!");
    window.addEventListener('load', handleload);
    let crc2;
    let canvas;
    function handleload() {
        canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        console.log("Iamhereeee");
        changeColor();
        //drawPattern();
        getRandomNumber;
        drawBackground();
        drawCircles({ x: 500, y: 125 }, { x: 100, y: -100 });
        drawElipse({ x: 500, y: 125 }, { x: 300, y: -300 });
        drawTriangle({ x: 500, y: 125 }, { x: 1000, y: -500 });
        drawLine();
        drawParticle({ x: 500, y: 125 }, { x: 1000, y: -500 });
    }
    function getRandomNumber(_max, _min = 0) {
        return Math.floor(Math.random() * _max) + _min;
    }
    function changeColor() {
        const intensity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
        let randomColor1 = intensity[Math.floor(Math.random() * intensity.length)];
        let randomColor2 = intensity[Math.floor(Math.random() * intensity.length)];
        let randomColor3 = intensity[Math.floor(Math.random() * intensity.length)];
        let randomColor4 = intensity[Math.floor(Math.random() * intensity.length)];
        let randomColor5 = intensity[Math.floor(Math.random() * intensity.length)];
        let randomColor6 = intensity[Math.floor(Math.random() * intensity.length)];
        const randomColor = `#${randomColor1}${randomColor2}${randomColor3}${randomColor4}${randomColor5}${randomColor6}`;
        crc2.fillStyle = "randomColor";
        console.log(randomColor);
        return randomColor;
    }
    function drawBackground() {
        document.body.style.background = changeColor();
    }
    function drawTriangle(_position, _size) {
        crc2.beginPath();
        let triangleX0 = getRandomNumber(crc2.canvas.width);
        let triangleY0 = getRandomNumber(crc2.canvas.height);
        let triangleX1 = getRandomNumber(crc2.canvas.width);
        let triangleY1 = getRandomNumber(crc2.canvas.height);
        crc2.moveTo(getRandomNumber(triangleX0), getRandomNumber(triangleY0));
        crc2.lineTo(getRandomNumber(crc2.canvas.width), getRandomNumber(crc2.canvas.height));
        crc2.lineTo(triangleX1, triangleY1);
        crc2.closePath();
        crc2.fillStyle = changeColor();
        crc2.fill();
    }
    function drawElipse(_position, _size) {
        crc2.beginPath();
        let circx1 = getRandomNumber(crc2.canvas.width);
        let circy1 = getRandomNumber(crc2.canvas.height);
        let circxr1 = getRandomNumber(500, 125);
        let circyr1 = getRandomNumber(500, 125);
        crc2.ellipse(circx1, circy1, circxr1, circyr1, Math.PI / 4, 0, Math.PI * 2);
        crc2.fillStyle = changeColor();
        crc2.fill();
    }
    function drawCircles(_position, _size) {
        crc2.beginPath();
        let circx1 = getRandomNumber(crc2.canvas.width);
        let circy1 = getRandomNumber(crc2.canvas.height);
        let circxr1 = getRandomNumber(500, 125);
        let circyr1 = circxr1;
        crc2.ellipse(circx1, circy1, circxr1, circyr1, Math.PI / 4, 0, Math.PI * 2);
        crc2.fillStyle = changeColor();
        crc2.fill();
    }
    function drawLine() {
        crc2.beginPath();
        crc2.moveTo(150, 200);
        crc2.closePath();
        crc2.strokeStyle = changeColor();
        crc2.stroke();
    }
    /*function drawPattern(): void {
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement('canvas').getContext('2d');
        pattern.canvas.width = 3000;
        pattern.canvas.height = 1500;

        pattern.fillStyle = '#fec';
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();

        crc2.fillStyle = crc2.createPattern(pattern.canvas, 'repeat');
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }*/
    function drawParticle(_position, _size) {
        let nParticles = 10;
        let particle = new Path2D();
        let radiusParticle = 8;
        particle.arc(10, 10, radiusParticle, 10, 10 * Math.PI);
        crc2.fillStyle = changeColor();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
        for (let drawn = 0; drawn < nParticles; drawn++) {
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.save();
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=script.js.map
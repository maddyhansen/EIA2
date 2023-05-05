"use strict";
var Canvas;
(function (Canvas) {
    console.log("Its me, hi I am the problem its me!");
    window.addEventListener('load', handleload);
    let crc2;
    let canvas;
    function handleload(_event) {
        canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        console.log("Iamhereeee");
        changeColor();
        // randomPattern();
        // randomDots();
        //drawLine();
        drawParticle({ x: 500, y: 125 }, { x: 1000, y: -500 });
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
        document.body.style.backgroundColor = randomColor;
        crc2.fillStyle = "randomColor";
        console.log(randomColor);
        return randomColor;
        //crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
    /* function getRandomNumber(_max: number, _min: number = 0): number {
         return Math.floor(Math.random() * _max) + _min;
     }*/
    function drawParticle(_position, _size) {
        console.log("T2");
        let nParticles = 10;
        let particle = new Path2D();
        let radiusParticle = 8;
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        changeColor();
        crc2.fillStyle = "randomColor";
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
        /*function randomDots()
            const intensity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
            //canvas.height = canvas.width;
            //crc2.transform(1, 0, 0, -1, 0, canvas.height)
    
            let xArray = [];
            const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
    
            crc2.fillStyle = "white";
            for (let i = 0; i < xArray.length - 1; i++) {
                let x = xArray[i] * 400 / 150;
                let y = yArray[i] * 400 / 15;
                crc2.beginPath();
                crc2.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
                crc2.fill();
            }*/
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=script.js.map
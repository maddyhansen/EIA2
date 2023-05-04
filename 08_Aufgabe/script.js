"use strict";
var Canvas;
(function (Canvas) {
    console.log("Its me, hi I am the problem its me!");
    /* interface Vector {
         x: number;
         y: number;
     }*/
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
    }
    /* crc2.fillStyle = "#FF111111";
           crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
           crc2.beginPath();
           crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
           crc2.closePath();
           crc2.stroke();
           let path: Path2D = new Path2D();
           path.arc(60, 60, 50, 0, 2 * Math.PI);
           crc2.stroke(path);
           crc2.beginPath();
           crc2.moveTo(2.1, 1);
           crc2.lineTo(2.1, 10);
           crc2.moveTo(4.5, 1);
           crc2.lineTo(4.5, 10);
           crc2.moveTo(7.5, 1);
           crc2.lineTo(10.5, 10);
           crc2.stroke();
           let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);
   
           gradient.addColorStop(0, "black");
           gradient.addColorStop(.5, "red");
           gradient.addColorStop(1, "gold");
   
           crc2.fillStyle = gradient;
           crc2.fillRect(0, 0, 200, 100);
   
           let pattern: CanvasRenderingContext2D = document.createElement('canvas').getContext('2d');
           pattern.canvas.width = 40;
           pattern.canvas.height = 20;
   
           pattern.fillStyle = '#fec';
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
   
           crc2.fillStyle = crc2.createPattern(pattern.canvas, 'repeat');
           crc2.fillRect(0, 0, canvas.width, canvas.height);*/
    //  Array farben 
    /* array pattern
     array strichen
     array kreisen
 
 
     create something
     math random
 
     canvas */
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
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=script.js.map
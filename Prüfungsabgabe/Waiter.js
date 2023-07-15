"use strict";
var IceShop;
(function (IceShop) {
    class Waiter extends IceShop.Human {
        look;
        color;
        constructor() {
            super();
            this.color = this.changeColor();
        }
        getRandomNumber(_max, _min = 0) {
            return Math.floor(Math.random() * _max) + _min;
        }
        changeColor() {
            const intensity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
            let randomColor1 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor2 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor3 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor4 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor5 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor6 = intensity[Math.floor(Math.random() * intensity.length)];
            const randomColor = `#${randomColor1}${randomColor2}${randomColor3}${randomColor4}${randomColor5}${randomColor6}`;
            IceShop.crc2.fillStyle = "randomColor";
            return randomColor;
        }
        DoGame(_timeslice) {
        }
        drawHumans() {
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
    }
    IceShop.Waiter = Waiter;
})(IceShop || (IceShop = {}));
//# sourceMappingURL=Waiter.js.map
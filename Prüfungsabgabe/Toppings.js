"use strict";
var IceShop;
(function (IceShop) {
    class Toppings extends IceShop.IceCream {
        topping;
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
        drawOrder() {
            if (onclick)
                on;
            sprinkles;
            {
                IceShop.crc2.beginPath();
                IceShop.crc2.rotate((44 * Math.PI) / 180);
                IceShop.crc2.fillStyle = this.changeColor();
                IceShop.crc2.fillRect(150, -250, 8, 2);
                IceShop.crc2.fillRect(130, -300, 8, 2);
                IceShop.crc2.fillRect(130, -200, 8, 2);
                IceShop.crc2.fillRect(130, -150, 8, 2);
                IceShop.crc2.fillRect(80, -230, 8, 2);
                IceShop.crc2.fillRect(90, -220, 8, 2);
                IceShop.crc2.fillRect(150, -230, 8, 2);
                IceShop.crc2.fillRect(130, -270, 8, 2);
                IceShop.crc2.fillRect(130, -190, 8, 2);
                IceShop.crc2.closePath();
                IceShop.crc2.beginPath();
                IceShop.crc2.rotate((45 * Math.PI) / 180);
                IceShop.crc2.fillStyle = this.changeColor();
                IceShop.crc2.fillRect(200, 0, 8, 2);
                IceShop.crc2.fillRect(250, -80, 8, 2);
                IceShop.crc2.fillRect(280, -95, 8, 2);
                IceShop.crc2.fillRect(180, -90, 8, 2);
                IceShop.crc2.fillRect(190, -70, 8, 2);
                IceShop.crc2.fillRect(280, -75, 8, 2);
                IceShop.crc2.fillRect(210, -80, 8, 2);
                IceShop.crc2.fillRect(190, -60, 8, 2);
                IceShop.crc2.closePath();
            }
            if (onclick)
                on;
            cookie;
            chips;
            {
                IceShop.crc2.beginPath();
                IceShop.crc2.fillStyle = "#bf731d";
                IceShop.crc2.ellipse(200, 80, 8, 2, 3, 0, 20);
                IceShop.crc2.ellipse(240, 130, 8, 2, 3, 0, 20);
                IceShop.crc2.fill();
                IceShop.crc2.closePath();
                IceShop.crc2.beginPath();
                IceShop.crc2.ellipse(210, 110, 8, 2, 3, 0, 20);
                IceShop.crc2.fill();
                IceShop.crc2.closePath();
                IceShop.crc2.beginPath();
                IceShop.crc2.fillStyle = "#814e13";
                IceShop.crc2.ellipse(200, 110, 8, 2, 3, 0, 20);
                IceShop.crc2.ellipse(220, 90, 8, 2, 3, 0, 20);
                IceShop.crc2.fill();
                IceShop.crc2.closePath();
                IceShop.crc2.beginPath();
                IceShop.crc2.ellipse(265, 145, 8, 2, 3, 0, 20);
                IceShop.crc2.fill();
                IceShop.crc2.closePath();
                IceShop.crc2.beginPath();
                IceShop.crc2.fillStyle = "#5d380e";
                IceShop.crc2.ellipse(140, 140, 8, 2, 3, 0, 20);
                IceShop.crc2.fill();
                IceShop.crc2.closePath();
                IceShop.crc2.beginPath();
                IceShop.crc2.ellipse(280, 120, 8, 2, 3, 0, 20);
                IceShop.crc2.ellipse(230, 120, 8, 2, 3, 0, 20);
                IceShop.crc2.fill();
            }
            if (onclick)
                on;
            fruits;
            {
            }
            if (onclick)
                on;
            heavy;
            cream;
            {
            }
        }
    }
    IceShop.Toppings = Toppings;
})(IceShop || (IceShop = {}));
//# sourceMappingURL=Toppings.js.map
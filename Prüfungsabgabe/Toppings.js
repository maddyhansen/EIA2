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
    }
    IceShop.Toppings = Toppings;
})(IceShop || (IceShop = {}));
//# sourceMappingURL=Toppings.js.map
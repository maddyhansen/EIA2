"use strict";
var IceShop;
(function (IceShop) {
    class Human {
        position;
        velocity;
        constructor() {
            this.velocity = new IceShop.Vector(50, 0);
            this.velocity = new IceShop.Vector(120, 20);
            this.position = new IceShop.Vector(Math.random() * IceShop.crc2.canvas.width, Math.random() * IceShop.crc2.canvas.height);
        }
        DoGame(_timeslice) {
        }
        drawHumans() {
        }
    }
    IceShop.Human = Human;
})(IceShop || (IceShop = {}));
//# sourceMappingURL=HumanClass.js.map
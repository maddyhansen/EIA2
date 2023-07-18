"use strict";
var IceShop;
(function (IceShop) {
    class Human {
        position;
        velocity;
        constructor() {
            this.velocity = new IceShop.Vector(50, 0);
            this.velocity = new IceShop.Vector(120, 20);
            this.position = new IceShop.Vector(0, 0);
        }
        move(_velocity) {
        }
        drawHumans() {
        }
    }
    IceShop.Human = Human;
})(IceShop || (IceShop = {}));
//# sourceMappingURL=HumanClass.js.map
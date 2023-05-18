"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    /*Klassen*/
    class Animal {
        size = 30;
        color = "black";
        x = 0;
        constructor(_size, _color) {
            console.log("Hallo");
            this.color = _color;
            this.size = _size;
        }
        draw() {
            OldMcDonald.crc2.fillStyle = "black";
            OldMcDonald.crc2.fillRect(100, 100, 100, 50);
        }
        sing() { }
        ;
        eat() { }
        ;
    }
    OldMcDonald.Animal = Animal;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=animal.js.map
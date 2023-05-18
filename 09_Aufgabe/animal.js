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
            OldMcDonald.crc2.fillStyle = this.color;
            OldMcDonald.crc2.fillRect(this.x, 100, 100, this.size);
        }
    }
    OldMcDonald.Animal = Animal;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=animal.js.map
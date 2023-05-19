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
            OldMcDonald.crc2.fillStyle = "#8a8a8a";
            OldMcDonald.crc2.fillRect(100, 100, 55, 50);
            OldMcDonald.crc2.fillStyle = "#9c9b9a";
            OldMcDonald.crc2.fillRect(100, 150, 75, 70);
        }
        sing() { }
        ;
        eat() {
            let fullstorage = 10;
            if (fullstorage < 0) {
                console.log('x is less than y');
            }
        }
        ;
    }
    OldMcDonald.Animal = Animal;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=animal.js.map
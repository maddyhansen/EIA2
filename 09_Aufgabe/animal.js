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
            OldMcDonald.crc2.fillRect(this.x, 250, 55, this.size);
            OldMcDonald.crc2.fillStyle = this.color;
            OldMcDonald.crc2.fillRect(this.x, 195, 75, this.size);
            OldMcDonald.crc2.fillStyle = this.color;
            OldMcDonald.crc2.fillRect(this.x, 215, 12, this.size);
            OldMcDonald.crc2.fillStyle = this.color;
            OldMcDonald.crc2.fillRect(this.x, 218, 4, this.size);
            OldMcDonald.crc2.fillStyle = this.color;
            OldMcDonald.crc2.fillRect(885, 215, 12, 20);
            OldMcDonald.crc2.fillStyle = this.color;
            OldMcDonald.crc2.fillRect(888, 218, 4, 4);
            OldMcDonald.crc2.beginPath();
            OldMcDonald.crc2.ellipse(873, 248, 12, 12, 0, 0, Math.PI * 2);
            OldMcDonald.crc2.fillStyle = this.color;
            OldMcDonald.crc2.fill();
            OldMcDonald.crc2.closePath();
            OldMcDonald.crc2.beginPath();
            OldMcDonald.crc2.ellipse(878, 248, 3, 3, 0, 0, Math.PI * 2);
            OldMcDonald.crc2.fillStyle = "#9c9b9a";
            OldMcDonald.crc2.fill();
            OldMcDonald.crc2.closePath();
            OldMcDonald.crc2.fillStyle = "#9c9b9a";
            OldMcDonald.crc2.beginPath();
            OldMcDonald.crc2.moveTo(830, 160);
            OldMcDonald.crc2.lineTo(837, 195);
            OldMcDonald.crc2.lineTo(860, 195);
            OldMcDonald.crc2.fill();
            OldMcDonald.crc2.fillStyle = "#9c9b9a";
            OldMcDonald.crc2.beginPath();
            OldMcDonald.crc2.moveTo(920, 160);
            OldMcDonald.crc2.lineTo(912, 195);
            OldMcDonald.crc2.lineTo(890, 195);
            OldMcDonald.crc2.fill();
        }
        /*drawBody(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, 250, 55, this.size);
        }

        drawHead(): void {
            crc2.fillStyle = "#9c9b9a";
            crc2.fillRect(837, 195, 75, 70);
        }

        drawEyes(): void {

            crc2.fillStyle = "black";
            crc2.fillRect(850, 215, 12, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(853, 218, 4, 4);


            crc2.fillStyle = "black";
            crc2.fillRect(885, 215, 12, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(888, 218, 4, 4);
        }

        drawNose(): void {
            crc2.beginPath();
            crc2.ellipse(873, 248, 12, 12, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#8a8a8a";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.ellipse(867, 248, 3, 3, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#9c9b9a";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.ellipse(878, 248, 3, 3, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#9c9b9a";
            crc2.fill();
            crc2.closePath();

        }

        drawEars(): void {

            crc2.fillStyle = "#9c9b9a";
            crc2.beginPath();
            crc2.moveTo(830, 160);
            crc2.lineTo(837, 195);
            crc2.lineTo(860, 195);
            crc2.fill();


            crc2.fillStyle = "#9c9b9a";
            crc2.beginPath();
            crc2.moveTo(920, 160);
            crc2.lineTo(912, 195);
            crc2.lineTo(890, 195);
            crc2.fill();
        }*/
        sing() {
            let song = "OLD MC DONALD HAD A FARM!";
            let sing = song;
        }
        ;
        sound() {
            let sound = "EHHHHAHHHHH";
            console.log(sound);
            let sound1 = "MUHHHHHHH";
            let sound2 = "BOOOCKBOOOCK";
            let sound3 = "WUFFWUFF";
            let sound4 = "OINKOINK";
        }
        ;
        eat() {
            let fullstorage = 10;
            /* if (fullstorage < 0, fullstorage-- ) {
                 console.log('x is less than y');
             }*/
        }
        ;
    }
    OldMcDonald.Animal = Animal;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=animal.js.map
"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    /*normal script*/
    window.addEventListener("load", handleload);
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        OldMcDonald.crc2 = canvas.getContext("2d");
        document.getElementById("body").addEventListener('click', newDay);
        drawBackground();
        drawWall();
        food();
        singing();
    }
    function drawBackground() {
        let gradient = OldMcDonald.crc2.createLinearGradient(0, 0, 0, OldMcDonald.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "white");
        OldMcDonald.crc2.fillStyle = gradient;
        OldMcDonald.crc2.fillRect(0, 0, OldMcDonald.crc2.canvas.width, OldMcDonald.crc2.canvas.height);
    }
    ;
    function drawWall() {
        OldMcDonald.crc2.fillStyle = "#262626";
        OldMcDonald.crc2.fillRect(0, 290, OldMcDonald.crc2.canvas.width, 250);
    }
    function newDay() {
        console.log("Hallo0");
        donkey();
    }
    function donkey() {
        console.log("Hallo0");
        let donkey = new OldMcDonald.Animal("Donkey", "EHHHHHAHHHHH", "OLD MC DONALD HAD A FARM!", "HEU", 10);
        console.log(donkey);
        donkey.name = "_name";
        donkey.sound = "_sound";
        donkey.sing = "_sing";
        donkey.eat = "_eat";
        donkey.food = 10;
        donkey.soundAnimal();
        console.log(donkey.soundAnimal());
        donkey.singingSong();
        donkey.eatFood(10);
        OldMcDonald.crc2.fillStyle = "#8a8a8a";
        OldMcDonald.crc2.fillRect(847, 250, 55, 50);
        OldMcDonald.crc2.fillStyle = "#9c9b9a";
        OldMcDonald.crc2.fillRect(837, 195, 75, 70);
        OldMcDonald.crc2.fillStyle = "black";
        OldMcDonald.crc2.fillRect(850, 215, 12, 20);
        OldMcDonald.crc2.fillStyle = "white";
        OldMcDonald.crc2.fillRect(853, 218, 4, 4);
        OldMcDonald.crc2.fillStyle = "black";
        OldMcDonald.crc2.fillRect(885, 215, 12, 20);
        OldMcDonald.crc2.fillStyle = "white";
        OldMcDonald.crc2.fillRect(888, 218, 4, 4);
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.ellipse(873, 248, 12, 12, 0, 0, Math.PI * 2);
        OldMcDonald.crc2.fillStyle = "#8a8a8a";
        OldMcDonald.crc2.fill();
        OldMcDonald.crc2.closePath();
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.ellipse(867, 248, 3, 3, 0, 0, Math.PI * 2);
        OldMcDonald.crc2.fillStyle = "#9c9b9a";
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
    function singing() {
        console.log("Hallo1");
    }
    function food() {
        console.log("Hallo2");
    }
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=script.js.map
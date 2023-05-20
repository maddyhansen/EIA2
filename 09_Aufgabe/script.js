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
        let donkey = new OldMcDonald.Animal("Donkey", "EHHHHHAHHHHH", "OLD MC DONALD HAD A FARM!", "HEU", 10);
        console.log(donkey);
        donkey.name = "_name";
        donkey.sound = "_sound";
        donkey.sing = "_sing";
        donkey.eat = "_eat";
        donkey.food = 10;
        //donkey.draw();
        donkey.soundAnimal();
        console.log(donkey.soundAnimal());
        donkey.singingSong();
        donkey.eatFood(10);
        //donkey.drawBody();
        //donkey.drawHead();
        //donkey.drawEyes();
        //donkey.drawNose();
        //donkey.drawEars();
    }
    function singing() {
        console.log("Hallo1");
    }
    function food() {
        console.log("Hallo2");
    }
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=script.js.map
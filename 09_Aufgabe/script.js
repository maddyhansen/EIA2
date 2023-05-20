"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    /*normal script*/
    window.addEventListener("load", start);
    function start(_event) {
        let canvas = document.querySelector("canvas");
        OldMcDonald.crc2 = canvas.getContext("2d");
        drawBackground();
        drawWall();
        drawDonkey();
        //drawPig();
        /*let donkey: Animal = new Animal(70, "grey")
        console.log(donkey)
        // donkey.drawDonkey();
    
        let chicken: Animal = new Animal(70, "grey")
        console.log(chicken)
        // chicken.drawChicken();
    
        let dog: Animal = new Animal(70, "grey")
        console.log(dog)
        //dog.drawDog();
    
        let pig: Animal = new Animal(70, "grey")
        //pig.drawPig();
        console.log(pig)
    
        let cow: Animal = new Animal(70, "grey")
        console.log(cow)
        //chicken.drawCow();*/
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
    function drawDonkey() {
        let donkey = new OldMcDonald.Animal(70, "grey");
        console.log(donkey);
        donkey.draw();
        donkey.sound();
        console.log(donkey.sound());
        //donkey.drawBody();
        //donkey.drawHead();
        //donkey.drawEyes();
        //donkey.drawNose();
        //donkey.drawEars();
    }
    /*function drawPig() {
      let pig: Animal = new Animal(70, "grey")
      console.log(pig)
      pig.drawBody();
      pig.drawHead();
      pig.drawEyes();
      pig.drawNose();
      pig.drawEars();
    }*/
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=script.js.map
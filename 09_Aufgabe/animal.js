"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    /*Klassen und Interface*/
    class Animal {
        name;
        sound;
        sing;
        eat;
        food;
        constructor(_name, _sound, _sing, _eat, _food) {
            console.log("constructor");
            this.name = _name;
            this.sound = _sound;
            this.sing = _sing;
            this.eat = _eat;
            this.food = _food;
        }
        async singingSong() {
            let song = "OLD MC DONALD HAD A FARM!";
            let sing = song;
            console.log(sing);
        }
        ;
        soundAnimal(_sound) {
            this.sound = "_sound";
        }
        ;
        eatFood(_stockReamins) {
            OldMcDonald.fullstorage;
            console.log(OldMcDonald.fullstorage);
        }
    }
    OldMcDonald.Animal = Animal;
    ;
    OldMcDonald.fullstorage = {
        grass: 700,
        corn: 300,
        hay: 600,
        meat: 200,
        junk: 300,
    };
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=animal.js.map
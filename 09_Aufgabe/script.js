"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    /*normal script*/
    window.addEventListener("load", start);
    function start(_event) {
        let canvas = document.querySelector("canvas");
        OldMcDonald.crc2 = canvas.getContext("2d");
        let donkey = new OldMcDonald.Animal(70, "grey");
        console.log(donkey);
        donkey.draw();
    }
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=script.js.map
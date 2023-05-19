"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    /*normal script*/
    window.addEventListener("load", start);
    let canvas;
    function start(_event) {
        let canvas = document.querySelector("canvas");
        crc2: CanvasRenderingContext2D;
        let donkey = new OldMcDonald.Animal(70, "grey");
        console.log(donkey);
        donkey.draw();
    }
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=script.js.map
"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    /*normal script*/
    window.addEventListener("load", start);
    let donkey;
    function start(_event) {
        let canvas = document.querySelector("canvas");
        let crc2;
        donkey = new OldMcDonald.Animal(70, "grey");
        donkey.draw();
    }
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=script.js.map
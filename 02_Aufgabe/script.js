"use strict";
var eventuebung;
(function (eventuebung) {
    console.log("Hallo Start");
    window.addEventListener('load', handleLoad);
    function handleLoad() {
        document.addEventListener('mousemove', setInfoBox);
        document.addEventListener('click', logInfo);
        document.addEventListener('keyup', logInfo);
        document.body.addEventListener('click', logInfo);
        document.body.addEventListener('keyup', logInfo);
        document.getElementById('div0').addEventListener('click', logInfo);
        document.getElementById('div0').addEventListener('keyup', logInfo);
        document.getElementById('div1').addEventListener('click', logInfo);
        document.getElementById('div1').addEventListener('keyup', logInfo);
    }
    function setInfoBox(_event) {
        let positionx = _event.clientX;
        let positiony = _event.clientY;
        let span = document.createElement("span1");
        span.innerHTML = "span";
        span.className = "span";
        document.querySelector("#div0").appendChild(span);
        span.innerText = "Mouseposition: x : " + positionx + ", Y: " + positiony + _event.target;
        span.setAttribute('style', 'right: positionx + value + 10px');
        //span.setAttribute('style','right: positiony + value + 10px');
    }
    function logInfo(_event) {
        console.log(_event.target, _event.currentTarget, _event.type, _event);
    }
})(eventuebung || (eventuebung = {}));
//# sourceMappingURL=script.js.map
"use strict";
var eventuebung;
(function (eventuebung) {
    console.log("Hallo Start");
    window.addEventListener('load', handleLoad);
    let span = document.createElement("span");
    span.innerHTML = "span";
    span.className = "span";
    document.querySelector("#div0").appendChild(span);
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
        span.style.left = positionx + "px";
        span.style.top = positiony + "px";
        span.innerText = "Mouseposition: x : " + positionx + ", Y: " + positiony + _event.target;
    }
    function logInfo(_event) {
        console.log(_event.target, _event.currentTarget, _event.type, _event);
    }
    function btn() {
        console.log("hi ich funktioniere");
    }
    document.querySelector("#button")?.addEventListener('click', btn);
})(eventuebung || (eventuebung = {}));
//# sourceMappingURL=script.js.map
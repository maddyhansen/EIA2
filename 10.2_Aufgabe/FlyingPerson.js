"use strict";
var FlyingPeopleAlpsIII;
(function (FlyingPeopleAlpsIII) {
    class FlyingObject {
        position;
        velocity;
        constructor() {
            this.velocity = new FlyingPeopleAlpsIII.Vector(50, 0);
            this.velocity = new FlyingPeopleAlpsIII.Vector(120, 20);
            //this.velocity = _velocity;
            this.position = new FlyingPeopleAlpsIII.Vector(Math.random() * FlyingPeopleAlpsIII.crc2.canvas.width, Math.random() * FlyingPeopleAlpsIII.crc2.canvas.height);
            //this.position = _position;
        }
        doActivity(_timeslice) {
        }
        draw() {
        }
    }
    FlyingPeopleAlpsIII.FlyingObject = FlyingObject;
})(FlyingPeopleAlpsIII || (FlyingPeopleAlpsIII = {}));
//# sourceMappingURL=FlyingPerson.js.map
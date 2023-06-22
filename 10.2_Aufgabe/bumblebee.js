"use strict";
var FlyingPeopleAlpsIII;
(function (FlyingPeopleAlpsIII) {
    class Bumblebees extends FlyingPeopleAlpsIII.FlyingObject {
        size;
        constructor(_size, _position) {
            super();
            this.size = new FlyingPeopleAlpsIII.Vector(0, 0.5); /* , new Vector(10, 0) */
            if (_position)
                this.position = _position;
            else
                this.position = new FlyingPeopleAlpsIII.Vector(Math.random() * FlyingPeopleAlpsIII.crc2.canvas.width, Math.random() * FlyingPeopleAlpsIII.crc2.canvas.height);
            this.velocity = new FlyingPeopleAlpsIII.Vector(50, 0);
            this.velocity.randomize(120, 20);
        }
        doActivity(_timeslice) {
            let offset = new FlyingPeopleAlpsIII.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += FlyingPeopleAlpsIII.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += FlyingPeopleAlpsIII.crc2.canvas.height;
            if (this.position.x > FlyingPeopleAlpsIII.crc2.canvas.width)
                this.position.x -= FlyingPeopleAlpsIII.crc2.canvas.width;
            if (this.position.y > FlyingPeopleAlpsIII.crc2.canvas.height)
                this.position.y -= FlyingPeopleAlpsIII.crc2.canvas.height;
        }
        draw() {
            console.log("Bee1");
            FlyingPeopleAlpsIII.crc2.save();
            FlyingPeopleAlpsIII.crc2.translate(this.position.x, this.position.y);
            let grd = FlyingPeopleAlpsIII.crc2.createLinearGradient(2, 3, 6, 8);
            grd.addColorStop(0, "yellow");
            grd.addColorStop(1, "black");
            grd.addColorStop(1, "yellow");
            FlyingPeopleAlpsIII.crc2.beginPath();
            FlyingPeopleAlpsIII.crc2.ellipse(-2, -10, 8, 2, 80, -2, 2 * Math.PI);
            FlyingPeopleAlpsIII.crc2.fillStyle = "white";
            FlyingPeopleAlpsIII.crc2.fill();
            FlyingPeopleAlpsIII.crc2.beginPath();
            FlyingPeopleAlpsIII.crc2.ellipse(0, 0, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
            FlyingPeopleAlpsIII.crc2.fillStyle = grd;
            FlyingPeopleAlpsIII.crc2.fill();
            FlyingPeopleAlpsIII.crc2.beginPath();
            FlyingPeopleAlpsIII.crc2.ellipse(2, -9, 8, 2, -80, 20, 2 * Math.PI);
            FlyingPeopleAlpsIII.crc2.fillStyle = "lightgrey";
            FlyingPeopleAlpsIII.crc2.fill();
            FlyingPeopleAlpsIII.crc2.restore();
        }
        ;
    }
    FlyingPeopleAlpsIII.Bumblebees = Bumblebees;
})(FlyingPeopleAlpsIII || (FlyingPeopleAlpsIII = {}));
//# sourceMappingURL=bumblebee.js.map
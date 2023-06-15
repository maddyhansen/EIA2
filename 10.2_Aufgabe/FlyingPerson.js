"use strict";
var FlyingPeopleAlpsIII;
(function (FlyingPeopleAlpsIII) {
    class paraglider {
        position;
        velocity;
        activity;
        constructor(_velocity, _activity) {
            this.velocity = new FlyingPeopleAlpsIII.Vector(50, 0);
            this.velocity = new FlyingPeopleAlpsIII.Vector(120, 20);
            //this.velocity = _velocity;
            this.position = new FlyingPeopleAlpsIII.Vector(150, 20);
            //this.position = _position;
            this.activity = "flying";
            this.activity = _activity;
        }
        getRandomNumber(_max, _min = 0) {
            return Math.floor(Math.random() * _max) + _min;
        }
        changeColor() {
            const intensity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
            let randomColor1 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor2 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor3 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor4 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor5 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor6 = intensity[Math.floor(Math.random() * intensity.length)];
            const randomColor = `#${randomColor1}${randomColor2}${randomColor3}${randomColor4}${randomColor5}${randomColor6}`;
            FlyingPeopleAlpsIII.crc2.fillStyle = "randomColor";
            return randomColor;
        }
        move(_timeslice) {
            let offset = new FlyingPeopleAlpsIII.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            console.log(this.position);
            this.activity = "flying";
            let y_ground = new FlyingPeopleAlpsIII.Vector(200, 500);
            let flyground = new FlyingPeopleAlpsIII.Vector(150, 50);
            let x_ground = new FlyingPeopleAlpsIII.Vector(50, 10);
            /* if (flystart > y_ground) {//flystart
                 //this.draw(_y: 400, 10)
                 this.activity = "walking";
                 this.position.x += crc2.canvas.width;
             }
 
             if (hikingzone.x > x_ground.x && hikingzone.y > x_ground.y) {
                 this.position.x -= crc2.canvas.width;
                 this.activity = "climbing"
             }
 
             if (flystart = flyground) {
                 this.position.y += crc2.canvas.height;
                 this.activity = "flying"
             }*/
        }
        draw() {
            if (this.activity = "flying") {
                //Schirm
                FlyingPeopleAlpsIII.crc2.beginPath();
                FlyingPeopleAlpsIII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsIII.crc2.fillRect(this.position.x, this.position.y, 10, 16);
                FlyingPeopleAlpsIII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsIII.crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                FlyingPeopleAlpsIII.crc2.closePath();
                FlyingPeopleAlpsIII.crc2.beginPath();
                FlyingPeopleAlpsIII.crc2.moveTo(this.position.x, this.position.y);
                FlyingPeopleAlpsIII.crc2.lineTo(this.position.x - 20, this.position.y - 20);
                FlyingPeopleAlpsIII.crc2.lineTo(this.position.x + 30, this.position.y - 30);
                FlyingPeopleAlpsIII.crc2.stroke();
                FlyingPeopleAlpsIII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsIII.crc2.fill();
                FlyingPeopleAlpsIII.crc2.closePath();
            }
            console.log(this.activity = "flying");
            if (this.activity = "walking") {
                //Kein Schirm
                FlyingPeopleAlpsIII.crc2.beginPath();
                FlyingPeopleAlpsIII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsIII.crc2.fillRect(this.position.x, this.position.y, 10, 16);
                FlyingPeopleAlpsIII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsIII.crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                FlyingPeopleAlpsIII.crc2.closePath();
            }
            if (this.activity = "climbing") {
                //KeinSchirm
                FlyingPeopleAlpsIII.crc2.beginPath();
                FlyingPeopleAlpsIII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsIII.crc2.fillRect(this.position.x, this.position.y, 10, 16);
                FlyingPeopleAlpsIII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsIII.crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                FlyingPeopleAlpsIII.crc2.closePath();
            }
        }
        ;
    }
    FlyingPeopleAlpsIII.paraglider = paraglider;
})(FlyingPeopleAlpsIII || (FlyingPeopleAlpsIII = {}));
//# sourceMappingURL=FlyingPerson.js.map
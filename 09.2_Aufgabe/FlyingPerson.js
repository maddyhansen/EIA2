"use strict";
var FlyingPeopleAlpsII;
(function (FlyingPeopleAlpsII) {
    class paraglider {
        position;
        velocity;
        activity;
        constructor(_velocity) {
            this.velocity = new FlyingPeopleAlpsII.Vector(10, 0);
            this.velocity = _velocity;
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
            FlyingPeopleAlpsII.crc2.fillStyle = "randomColor";
            console.log(randomColor);
            return randomColor;
        }
        draw(_position, _size) {
            if (this.activity = "flying") {
                //Schirm
                FlyingPeopleAlpsII.crc2.beginPath();
                FlyingPeopleAlpsII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsII.crc2.fillRect(_position.x, _position.y, 10, 16);
                FlyingPeopleAlpsII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsII.crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                FlyingPeopleAlpsII.crc2.closePath();
                FlyingPeopleAlpsII.crc2.beginPath();
                FlyingPeopleAlpsII.crc2.moveTo(_position.x, _position.y);
                FlyingPeopleAlpsII.crc2.lineTo(_position.x - 20, _position.y - 20);
                FlyingPeopleAlpsII.crc2.lineTo(_position.x + 30, _position.y - 30);
                FlyingPeopleAlpsII.crc2.stroke();
                FlyingPeopleAlpsII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsII.crc2.fill();
                FlyingPeopleAlpsII.crc2.closePath();
            }
            if (this.activity = "walking") {
                //Kein Schirm
                FlyingPeopleAlpsII.crc2.beginPath();
                FlyingPeopleAlpsII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsII.crc2.fillRect(_position.x, _position.y, 10, 16);
                FlyingPeopleAlpsII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsII.crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                FlyingPeopleAlpsII.crc2.closePath();
            }
            if (this.activity = "climbing") {
                //KeinSchirm
                FlyingPeopleAlpsII.crc2.beginPath();
                FlyingPeopleAlpsII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsII.crc2.fillRect(_position.x, _position.y, 10, 16);
                FlyingPeopleAlpsII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsII.crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                FlyingPeopleAlpsII.crc2.closePath();
            }
        }
        ;
        move(_timeslice) {
            let offset = new FlyingPeopleAlpsII.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            this.velocity;
            this.position;
            if (FlyingPeopleAlpsII.flystart) {
                this.position.x += FlyingPeopleAlpsII.crc2.canvas.width;
                this.activity = "flying";
            }
            if (FlyingPeopleAlpsII.landingzone) {
                this.position.y += FlyingPeopleAlpsII.crc2.canvas.height;
                this.activity = "walking";
            }
            if (FlyingPeopleAlpsII.hikingzone) {
                this.position.x -= FlyingPeopleAlpsII.crc2.canvas.width;
                this.activity = "climbing";
            }
        }
        fly(_position, _size) {
            this.activity = "flying";
            return this.activity;
        }
        walk(_position, _size) {
            this.activity = "walking";
            return this.activity;
        }
        climb(_position, _size) {
            this.activity = "climbing";
            return this.activity;
        }
    }
    FlyingPeopleAlpsII.paraglider = paraglider;
})(FlyingPeopleAlpsII || (FlyingPeopleAlpsII = {}));
//# sourceMappingURL=FlyingPerson.js.map
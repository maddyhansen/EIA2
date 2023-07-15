"use strict";
var IceShop;
(function (IceShop) {
    class Customer extends IceShop.Human {
        look;
        color;
        constructor() {
            super();
            this.color = this.changeColor();
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
            IceShop.crc2.fillStyle = "randomColor";
            return randomColor;
        }
        DoGame(_timeslice) {
        }
        drawHumans() {
            //Body
            IceShop.crc2.fillStyle = this.color;
            IceShop.crc2.fillRect(720, 380, 30, 30);
            IceShop.crc2.closePath();
            if (this.look == "happy") {
                //HappyCustomer
                //Head
                IceShop.crc2.beginPath();
                IceShop.crc2.fillStyle = "#ffa78f"; //happy
                IceShop.crc2.fillRect(this.position.x, this.position.y, 30, 50);
                //Face
                IceShop.crc2.fillStyle = "black";
                IceShop.crc2.fillRect(this.position.x, this.position.y, 5, 5);
                IceShop.crc2.fillStyle = "black";
                IceShop.crc2.fillRect(740, 360, 5, 5);
                //Mouthwincle happy
                IceShop.crc2.beginPath();
                IceShop.crc2.strokeStyle = "black";
                IceShop.crc2.arc(this.position.x, this.position.y, 5, 0, 1 * Math.PI);
                IceShop.crc2.stroke();
                IceShop.crc2.closePath();
                IceShop.crc2.beginPath();
                console.log(this.position);
            }
            if (this.look == "unwell") {
                //Smileunwell
                //Head
                IceShop.crc2.beginPath();
                IceShop.crc2.fillStyle = "#f90"; //unwell head color
                IceShop.crc2.fillRect(720, 350, 30, 50);
                //Face
                IceShop.crc2.fillStyle = "black";
                IceShop.crc2.fillRect(725, 360, 5, 5);
                IceShop.crc2.fillStyle = "black";
                IceShop.crc2.fillRect(740, 360, 5, 5);
                //Mouthwincle unwell
                IceShop.crc2.fillStyle = "black";
                IceShop.crc2.fillRect(730, 370, 15, 2);
            }
            if (this.look == "mad") {
                //Smilemad
                //Head
                IceShop.crc2.beginPath();
                IceShop.crc2.fillStyle = "#c71b0f"; //mad head colour
                IceShop.crc2.fillRect(720, 350, 30, 50);
                //Face
                IceShop.crc2.fillStyle = "black";
                IceShop.crc2.fillRect(725, 360, 5, 5);
                IceShop.crc2.fillStyle = "black";
                IceShop.crc2.fillRect(740, 360, 5, 5);
                //Mouthwincle sad
                IceShop.crc2.beginPath();
                IceShop.crc2.fillStyle = "black";
                IceShop.crc2.arc(735, 375, 7, 1 * Math.PI, 2 * Math.PI);
                IceShop.crc2.stroke();
                IceShop.crc2.closePath();
                IceShop.crc2.beginPath();
            }
        }
        ;
    }
    IceShop.Customer = Customer;
})(IceShop || (IceShop = {}));
//# sourceMappingURL=Customer.js.map
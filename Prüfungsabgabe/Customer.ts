namespace IceShop {
    export class Customer extends Human {
        look: string;
        color: string;

        constructor() {
            super();
            this.color = this.changeColor();
        }

        getRandomNumber(_max: number, _min: number = 0): number {
            return Math.floor(Math.random() * _max) + _min;
        }

        changeColor(): string {
            const intensity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
            let randomColor1 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor2 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor3 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor4 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor5 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor6 = intensity[Math.floor(Math.random() * intensity.length)];
            const randomColor: string = `#${randomColor1}${randomColor2}${randomColor3}${randomColor4}${randomColor5}${randomColor6}`;
            crc2.fillStyle = "randomColor";

            return randomColor;
        }

        DoGame(_timeslice: number): void {

        }

        drawHumans() {

            //Body
            crc2.fillStyle = this.color;
            crc2.fillRect(720, 380, 30, 30);
            crc2.closePath();

            if (this.look == "happy") {
                //HappyCustomer
                //Head
                crc2.beginPath();
                crc2.fillStyle = "#ffa78f"; //happy
                crc2.fillRect(this.position.x, this.position.y, 30, 50);

                //Face
                crc2.fillStyle = "black";
                crc2.fillRect(this.position.x, this.position.y, 5, 5);

                crc2.fillStyle = "black";
                crc2.fillRect(740, 360, 5, 5);

                //Mouthwincle happy
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.arc(this.position.x, this.position.y, 5, 0, 1 * Math.PI);
                crc2.stroke();
                crc2.closePath();
                crc2.beginPath();

                console.log(this.position)
            }

            if (this.look == "unwell") { //this.look == 1min 
                //Smileunwell
                //Head
                crc2.beginPath();
                crc2.fillStyle = "#f90"; //unwell head color
                crc2.fillRect(720, 350, 30, 50);

                //Face
                crc2.fillStyle = "black";
                crc2.fillRect(725, 360, 5, 5);

                crc2.fillStyle = "black";
                crc2.fillRect(740, 360, 5, 5);

                //Mouthwincle unwell
                crc2.fillStyle = "black";
                crc2.fillRect(730, 370, 15, 2);

            }

            if (this.look == "mad") {
                //Smilemad
                //Head
                crc2.beginPath();
                crc2.fillStyle = "#c71b0f"; //mad head colour
                crc2.fillRect(720, 350, 30, 50);

                //Face
                crc2.fillStyle = "black";
                crc2.fillRect(725, 360, 5, 5);

                crc2.fillStyle = "black";
                crc2.fillRect(740, 360, 5, 5);

                //Mouthwincle sad
                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.arc(735, 375, 7, 1 * Math.PI, 2 * Math.PI);
                crc2.stroke();
                crc2.closePath();
                crc2.beginPath();
            }
        };

    }



}
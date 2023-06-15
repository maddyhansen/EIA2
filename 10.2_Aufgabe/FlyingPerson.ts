namespace FlyingPeopleAlpsIII {

    export class paraglider {
        position: Vector;
        velocity: Vector;
        activity: string;

        constructor(_velocity: Vector, _activity: string) {

            this.velocity = new Vector(50, 0);
            this.velocity = new Vector(120, 20);
            //this.velocity = _velocity;

            this.position = new Vector(150, 20);
            //this.position = _position;

            this.activity = "flying";
            this.activity = _activity;
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
        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            console.log(this.position)
            this.activity = "flying";

            let y_ground: Vector = new Vector(200, 500);
            let flyground: Vector = new Vector(150, 50);
            let x_ground: Vector = new Vector(50, 10);


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
                crc2.beginPath();
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(this.position.x, this.position.y, 10, 16);
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                crc2.closePath();

                crc2.beginPath();
                crc2.moveTo(this.position.x, this.position.y);
                crc2.lineTo(this.position.x - 20, this.position.y - 20);
                crc2.lineTo(this.position.x + 30, this.position.y - 30);
                crc2.stroke();
                crc2.fillStyle = this.changeColor();
                crc2.fill();
                crc2.closePath();
            }
            console.log(this.activity = "flying")

            if (this.activity = "walking") {
                //Kein Schirm
                crc2.beginPath();
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(this.position.x, this.position.y, 10, 16);

                crc2.fillStyle = this.changeColor();
                crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                crc2.closePath();
            }

            if (this.activity = "climbing") {
                //KeinSchirm
                crc2.beginPath();
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(this.position.x, this.position.y, 10, 16);

                crc2.fillStyle = this.changeColor();
                crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                crc2.closePath();
            }
        };

        /* move(_timeslice: number): void {
                let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset); //kommt mit add nicht klar, wieso weiß ich nicht genau. Er ist in Vector deklariert.
    
                this.activity = "flying";
    
                let y_ground: Vector = new Vector(200, 500);
                let flyground: Vector = new Vector(150, 50);
                let x_ground: Vector = new Vector(50, 10);
    
               if (flystart > y_ground) {//flystart
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
                }

    }*/


    }
}
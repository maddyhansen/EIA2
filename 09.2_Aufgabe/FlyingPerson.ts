namespace FlyingPeopleAlpsII {

    export class paraglider {
        position: Vector;
        velocity: Vector;
        activity: string;

        constructor(_velocity: Vector) {

        this.velocity = new Vector(10, 0);
        this.velocity.randomize(70, 70);
            this.velocity = _velocity;
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
            console.log(randomColor);

            return randomColor;
        }

        draw(_position: Vector, _size: Vector) {

            if (this.activity = "flying") {
                //Schirm
                crc2.beginPath();
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(_position.x, _position.y, 10, 16);
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                crc2.closePath();

                crc2.beginPath();
                crc2.moveTo(_position.x, _position.y);
                crc2.lineTo(_position.x - 20, _position.y - 20);
                crc2.lineTo(_position.x + 30, _position.y - 30);
                crc2.stroke();
                crc2.fillStyle = this.changeColor();
                crc2.fill();
                crc2.closePath();
            }

          /*  if (this.activity = "walking") {
                //Kein Schirm
                crc2.beginPath();
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(_position.x, _position.y, 10, 16);

                crc2.fillStyle = this.changeColor();
                crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                crc2.closePath();
            }
            if (this.activity = "climbing") {
                //KeinSchirm
                crc2.beginPath();
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(_position.x, _position.y, 10, 16);

                crc2.fillStyle = this.changeColor();
                crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                crc2.closePath();
            }*/
        };

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset); //kommt mit add nicht klar, wieso weiß ich nicht genau. Er ist in Vector deklariert.

            this.velocity
            this.position

            if (flystart) {
                this.position.x += crc2.canvas.width;
                this.activity = "flying"
                this.draw(400, 10 )
            }

            /*if (landingzone) {
                this.position.y += crc2.canvas.height;
            this.activity = "walking"
            }
                
            if (hikingzone){
                this.position.x -= crc2.canvas.width;
                this.activity = "climbing"
            }*/
            
        }

        fly(_position: Vector, _size: Vector) {
            this.activity = "flying";
            return this.activity;
        }

        walk(_position: Vector, _size: Vector) {
            this.activity = "walking";
            return this.activity;
        }

        climb(_position: Vector, _size: Vector) {
            this.activity = "climbing"
            return this.activity;
        }

    }











}
namespace OldMcDonald {
    /*Klassen*/
    export class Animal {
        size: number = 30;
        color: string = "black";
        x: number = 0;

        constructor(_size: number, _color: string) {
            console.log("Hallo")
            this.color = _color;
            this.size = _size
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, 250, 55, this.size);

            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, 195, 75, this.size);

            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, 215, 12, this.size);
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, 218, 4, this.size);

            crc2.fillStyle = this.color;
            crc2.fillRect(885, 215, 12, 20);
            crc2.fillStyle = this.color;
            crc2.fillRect(888, 218, 4, 4);

            crc2.beginPath();
            crc2.ellipse(873, 248, 12, 12, 0, 0, Math.PI * 2);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.ellipse(878, 248, 3, 3, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#9c9b9a";
            crc2.fill();
            crc2.closePath();

            crc2.fillStyle = "#9c9b9a";
            crc2.beginPath();
            crc2.moveTo(830, 160);
            crc2.lineTo(837, 195);
            crc2.lineTo(860, 195);
            crc2.fill();


            crc2.fillStyle = "#9c9b9a";
            crc2.beginPath();
            crc2.moveTo(920, 160);
            crc2.lineTo(912, 195);
            crc2.lineTo(890, 195);
            crc2.fill();
        }
        /*drawBody(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, 250, 55, this.size);
        }

        drawHead(): void {
            crc2.fillStyle = "#9c9b9a";
            crc2.fillRect(837, 195, 75, 70);
        }

        drawEyes(): void {

            crc2.fillStyle = "black";
            crc2.fillRect(850, 215, 12, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(853, 218, 4, 4);


            crc2.fillStyle = "black";
            crc2.fillRect(885, 215, 12, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(888, 218, 4, 4);
        }

        drawNose(): void {
            crc2.beginPath();
            crc2.ellipse(873, 248, 12, 12, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#8a8a8a";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.ellipse(867, 248, 3, 3, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#9c9b9a";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.ellipse(878, 248, 3, 3, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#9c9b9a";
            crc2.fill();
            crc2.closePath();

        }

        drawEars(): void {

            crc2.fillStyle = "#9c9b9a";
            crc2.beginPath();
            crc2.moveTo(830, 160);
            crc2.lineTo(837, 195);
            crc2.lineTo(860, 195);
            crc2.fill();


            crc2.fillStyle = "#9c9b9a";
            crc2.beginPath();
            crc2.moveTo(920, 160);
            crc2.lineTo(912, 195);
            crc2.lineTo(890, 195);
            crc2.fill();
        }*/


        sing(): void { 
            let song: string = "OLD MC DONALD HAD A FARM!";
            let sing: string = song; 
        };
        sound(): void {
            let sound: string = "EHHHHAHHHHH"
            console.log(sound)
            let sound1: string = "MUHHHHHHH"
            let sound2: string = "BOOOCKBOOOCK"
            let sound3: string = "WUFFWUFF"
            let sound4: string = "OINKOINK"
        };
        eat(): void {
            let fullstorage: number = 10;
            /* if (fullstorage < 0, fullstorage-- ) {
                 console.log('x is less than y');
             }*/
        };
    }
}

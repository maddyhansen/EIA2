namespace IceShop {
    export class Waiter extends Human {

        constructor() {
            super();
        }

        move(_verlocity: Vector): void {

        }

        drawHumans() {

            //Smilehappy
            //Head
            crc2.beginPath();
            crc2.fillStyle = "#ffa78f"; //happy
            crc2.fillRect(720, 350, 30, 50);

            //Face
            crc2.fillStyle = "black";
            crc2.fillRect(725, 360, 5, 5);

            crc2.fillStyle = "black";
            crc2.fillRect(740, 360, 5, 5);

            //Mouthwincle happy
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.arc(735, 368, 5, 0, 1 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();

            //Body
            crc2.fillStyle = "white";
            crc2.fillRect(720, 380, 30, 30);
            crc2.closePath();

            //Tie and Blazer
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(735, 383, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(735, 380, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(735, 390, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(720, 410);
            crc2.lineTo(750, 390);
            crc2.lineTo(750, 410);
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(750, 410);
            crc2.lineTo(720, 390);
            crc2.lineTo(720, 410);
            crc2.fill();



        }
    }
}
namespace IceShop{
   export class Human {

        position: Vector;
        velocity: Vector;


        constructor() {

            this.velocity = new Vector(50, 0);
            this.velocity = new Vector(120, 20);

            this.position = new Vector(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height)
        }

        DoGame(_timeslice: number): void {

        }

        drawHumans(): void {

        }

    }
}
namespace FlyingPeopleAlpsIII {

    export class FlyingObject {
        position: Vector;
        velocity: Vector;


        constructor() {

            this.velocity = new Vector(50, 0);
            this.velocity = new Vector(120, 20);

            this.position = new Vector(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height)
        }

        doActivity(_timeslice: number): void {

        }

        draw(): void {

        }


    }

}
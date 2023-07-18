namespace IceShop{
   export class Human {

        position: Vector;
        velocity: Vector;


        constructor() {

            this.velocity = new Vector(50, 0);
            this.velocity = new Vector(120, 20);

            this.position = new Vector(0,0)
        }

        move(_velocity:Vector): void {

        }

        drawHumans(): void {

        }

    }
}
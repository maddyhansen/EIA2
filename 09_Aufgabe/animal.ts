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
            crc2.fillStyle = "black";
            crc2.fillRect(100, 100, 100, 50);
        }

        sing(): void {};

        eat(): void {};
    }

}

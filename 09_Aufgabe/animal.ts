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
            crc2.fillStyle = "#8a8a8a";
            crc2.fillRect(100, 100, 55, 50);

            crc2.fillStyle = "#9c9b9a";
            crc2.fillRect(100, 150, 75, 70);
        }

        sing(): void { };
        eat(): void {
            let fullstorage: number = 10;
            if (fullstorage < 0) {
                console.log('x is less than y');
            }
        };
    }

}

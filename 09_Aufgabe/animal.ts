namespace OldMcDonald {
    /*Klassen und Interface*/
    export class Animal {
        name: string;
        sound: string;
        sing: string;
        eat: string;
        food: number;

        constructor(_name: string, _sound: string, _sing: string, _eat: string, _food: number) {
            console.log("constructor")
            this.name = _name;
            this.sound = _sound;
            this.sing = _sing;
            this.eat = _eat;
            this.food = _food;
        }
        async singingSong() {
            let song: string = "OLD MC DONALD HAD A FARM!";
            let sing: string = song;
            console.log(sing)
        };

        soundAnimal(_sound: string): void {
            this.sound = "_sound";
        };


        eatFood(_stockReamins: number): void {
            fullstorage
            console.log(fullstorage)
        }
    };

    export interface Food {
        grass: number;
        corn: number;
        hay: number;
        meat: number;
        junk: number;
    }

    export let fullstorage: Food = {
        grass: 700,
        corn: 300,
        hay: 600,
        meat: 200,
        junk: 300,
    };

}

namespace OldMcDonald {

  /*normal script*/
  window.addEventListener("load", handleload);
  export let crc2: CanvasRenderingContext2D;
  export let canvas: HTMLCanvasElement;

  function handleload(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    document.getElementById("body")!.addEventListener('click', newDay);
    drawBackground();
    drawWall();
    food()
    singing()

  }

  function drawBackground(): void {

    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "lightblue");
    gradient.addColorStop(1, "white");

    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

  };
  function drawWall(): void {
    crc2.fillStyle = "#262626";
    crc2.fillRect(0, 290, crc2.canvas.width, 250);
  }

  function newDay(): void{
    console.log("Hallo0")
    let donkey: Animal = new Animal("Donkey", "EHHHHHAHHHHH", "OLD MC DONALD HAD A FARM!", "HEU", 10)
    console.log(donkey)
    donkey.name = "_name";
    donkey.sound = "_sound";
    donkey.sing = "_sing";
    donkey.eat = "_eat";
    donkey.food = 10;
    //donkey.draw();
    donkey.soundAnimal();
    console.log(donkey.soundAnimal())

    donkey.singingSong();
    donkey.eatFood(10)
    //donkey.drawBody();
    //donkey.drawHead();
    //donkey.drawEyes();
    //donkey.drawNose();
    //donkey.drawEars();
  }

  function singing(){
    console.log("Hallo1")
  }

  function food(){
    console.log("Hallo2")
  }


}

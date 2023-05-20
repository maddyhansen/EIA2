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

  function newDay(): void {
    console.log("Hallo0")
    donkey();
  }

  function donkey() {
    console.log("Hallo0")
    let donkey: Animal = new Animal("Donkey", "EHHHHHAHHHHH", "OLD MC DONALD HAD A FARM!", "HEU", 10)
    console.log(donkey)
    donkey.name = "_name";
    donkey.sound = "_sound";
    donkey.sing = "_sing";
    donkey.eat = "_eat";
    donkey.food = 10;
    donkey.soundAnimal();
    console.log(donkey.soundAnimal())

    donkey.singingSong();
    donkey.eatFood(10);

    crc2.fillStyle = "#8a8a8a";
    crc2.fillRect(847, 250, 55, 50);

    crc2.fillStyle = "#9c9b9a";
    crc2.fillRect(837, 195, 75, 70);

    crc2.fillStyle = "black";
    crc2.fillRect(850, 215, 12, 20);
    crc2.fillStyle = "white";
    crc2.fillRect(853, 218, 4, 4);


    crc2.fillStyle = "black";
    crc2.fillRect(885, 215, 12, 20);
    crc2.fillStyle = "white";
    crc2.fillRect(888, 218, 4, 4);

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

  function singing() {
    console.log("Hallo1")
  }

  function food() {
    console.log("Hallo2")
  }


}

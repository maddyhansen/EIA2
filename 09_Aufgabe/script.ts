namespace OldMcDonald {

  /*normal script*/
  window.addEventListener("load", handleload);
  export let crc2: CanvasRenderingContext2D;
  export let canvas: HTMLCanvasElement;

  function handleload(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    body.document.addEventListener('click', newDay);
    drawBackground();
    drawWall();
    drawDonkey();
    drawPig();
    food()
    singing()
    

    /*let donkey: Animal = new Animal(70, "grey")
    console.log(donkey)
    // donkey.drawDonkey();

    let chicken: Animal = new Animal(70, "grey")
    console.log(chicken)
    // chicken.drawChicken();

    let dog: Animal = new Animal(70, "grey")
    console.log(dog)
    //dog.drawDog();

    let pig: Animal = new Animal(70, "grey")
    //pig.drawPig();
    console.log(pig)

    let cow: Animal = new Animal(70, "grey")
    console.log(cow)
    //chicken.drawCow();*/

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

  function newDay(){
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
    //donkey.drawBody();
    //donkey.drawHead();
    //donkey.drawEyes();
    //donkey.drawNose();
    //donkey.drawEars();
  }

  function drawDonkey() {
    
  }

  function drawPig() {
    let pig: Animal = new Animal()
    console.log(pig)
    //pig.draw();
    pig.sound();
   // pig.drawBody();
   // pig.drawHead();
   // pig.drawEyes();
   // pig.drawNose();
   // pig.drawEars();
  }

  function singing(){
    console.log("Hallo")
  }

  function food(){
    console.log("Hallo")
  }


}

namespace OldMcDonald {

  /*normal script*/
  window.addEventListener("load", handleload);
  export let crc2: CanvasRenderingContext2D;
  export let canvas: HTMLCanvasElement;

  let animals: Animal[] = [];

  function handleload(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    document.getElementById("button")!.addEventListener('click', newDay);
    drawBackground();
    drawWall();
    //food()
    //singing()
  }

  function drawBackground(): void {

    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "lightblue");
    gradient.addColorStop(1, "white");

    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

  };
  function drawWall(): void {
    crc2.fillStyle = "HSLA(137, 74%, 33%, 1)";
    crc2.fillRect(0, 290, crc2.canvas.width, 250);
  }

  function newDay(): void {
    console.log("newDay")
    donkey();
    pig();
    dog();
    chicken();
    cow();
  }

  function donkey() {
    console.log("donkey")
    let donkey: Animal = new Animal("Donkey", "EHHHHHAHHHHH", "OLD MC DONALD HAD A FARM!", "HEU", 10)
    console.log(donkey)
    donkey.name = "";
    donkey.sound = "";
    donkey.sing = "";
    donkey.eat = "";
    donkey.food = 10;
    donkey.soundAnimal("EHHHHHAHHHHH");
    console.log(donkey.sound)

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

    animals.push(donkey)
    console.log(animals)
  }

  function pig() {
    console.log("pig")
    let pig: Animal = new Animal("Pig", "OINK OINK", "OLD MC DONALD HAD A FARM!", "Junk", 10)
    console.log(pig)
    pig.name = "_name";
    pig.sound = "_sound";
    pig.sing = "_sing";
    pig.eat = "_eat";
    pig.food = 10;
    //pig.soundAnimal();
    //console.log(pig.soundAnimal())

    pig.singingSong();
    pig.eatFood(10);

    crc2.fillStyle = "#e8bebe";
    crc2.fillRect(445, 250, 60, 50);

    crc2.fillStyle = "#e8bebe";
    crc2.fillRect(437, 195, 75, 70);

    crc2.fillStyle = "black";
    crc2.fillRect(445, 215, 18, 20);
    crc2.fillStyle = "white";
    crc2.fillRect(447, 218, 4, 4);

    crc2.fillStyle = "black";
    crc2.fillRect(485, 215, 18, 20);
    crc2.fillStyle = "white";
    crc2.fillRect(488, 218, 4, 4);

    crc2.fillStyle = "#f5cece";
    crc2.fillRect(462, 238, 20, 20);

    crc2.fillStyle = "#e3b1b1";
    crc2.fillRect(466, 242, 4, 11);

    crc2.fillStyle = "#e3b1b1";
    crc2.fillRect(476, 242, 4, 11);

    crc2.fillStyle = "#e8bebe";
    crc2.beginPath();
    crc2.moveTo(460, 175);
    crc2.lineTo(430, 195);
    crc2.lineTo(460, 195);
    crc2.fill();

    crc2.fillStyle = "#e8bebe";
    crc2.beginPath();
    crc2.moveTo(490, 175);
    crc2.lineTo(518, 195);
    crc2.lineTo(490, 195);
    crc2.fill();

    animals.push(pig)
  }

  function chicken() {
    console.log("chick")
    let chicken: Animal = new Animal("Chicken", "BOOOCK BOOOOCK", "OLD MC DONALD HAD A FARM!", "KORN", 10)
    console.log(chicken)
    chicken.name = "_name";
    chicken.sound = "_sound";
    chicken.sing = "_sing";
    chicken.eat = "_eat";
    chicken.food = 10;
    //chicken.soundAnimal();

    crc2.fillStyle = "#ffffff";
    crc2.fillRect(645, 250, 60, 50);

    crc2.fillStyle = "#ffffff";
    crc2.fillRect(637, 195, 75, 70);

    crc2.fillStyle = "black";
    crc2.fillRect(650, 215, 10, 20);
    crc2.fillStyle = "white";
    crc2.fillRect(653, 218, 4, 4);

    crc2.fillStyle = "black";
    crc2.fillRect(685, 215, 10, 20);
    crc2.fillStyle = "white";
    crc2.fillRect(688, 218, 4, 4);

    crc2.fillStyle = "#d6b245";
    crc2.beginPath();
    crc2.moveTo(660, 240);
    crc2.lineTo(688, 240);
    crc2.lineTo(673, 260);
    crc2.fill();

    animals.push(chicken)
  }

  function cow() {
    console.log("cow")
    let cow: Animal = new Animal("COW", "MUHHHHHHHH", "OLD MC DONALD HAD A FARM!", "GRAS", 10)
    cow.name = "_name";
    cow.sound = "_sound";
    cow.sing = "_sing";
    cow.eat = "_eat";
    cow.food = 10;
    //cow.soundAnimal();
    //console.log(cow.soundAnimal())

    crc2.fillStyle = "#e3dfdc";
    crc2.fillRect(250, 250, 50, 50);

    crc2.fillStyle = "#f0ece9";
    crc2.fillRect(240, 195, 70, 70);

    crc2.fillStyle = "black";
    crc2.fillRect(250, 215, 10, 20);
    crc2.fillStyle = "white";
    crc2.fillRect(253, 218, 4, 4);

    crc2.fillStyle = "black";
    crc2.fillRect(285, 215, 10, 20);
    crc2.fillStyle = "white";
    crc2.fillRect(288, 218, 4, 4);

    crc2.beginPath();
    crc2.ellipse(273, 245, 15, 10, 0, 0, Math.PI * 2);
    crc2.fillStyle = "#e3dfdc";
    crc2.fill();
    crc2.closePath();

    crc2.beginPath();
    crc2.ellipse(267, 245, 4, 4, 0, 0, Math.PI * 2);
    crc2.fillStyle = "#ababab";
    crc2.fill();
    crc2.closePath();

    crc2.beginPath();
    crc2.ellipse(280, 245, 4, 4, 0, 0, Math.PI * 2);
    crc2.fillStyle = "#ababab";
    crc2.fill();
    crc2.closePath();

    crc2.fillStyle = "#f0ece9";
    crc2.beginPath();
    crc2.moveTo(260, 175);
    crc2.lineTo(225, 195);
    crc2.lineTo(260, 195);
    crc2.fill();

    crc2.fillStyle = "#f0ece9";
    crc2.beginPath();
    crc2.moveTo(290, 175);
    crc2.lineTo(330, 195);
    crc2.lineTo(290, 195);
    crc2.fill();

    animals.push(cow)
  }

  function dog() {
    console.log("dog")
    let dog: Animal = new Animal("DOG", "WUFFF WIFFF", "OLD MC DONALD HAD A FARM!", "FLEISCH", 10)
    dog.name = "_name";
    dog.sound = "_sound";
    dog.sing = "_sing";
    dog.eat = "_eat";
    dog.food = 10;
    //dog.soundAnimal();
    //console.log(dog.soundAnimal())


    crc2.fillStyle = "#858585";
    crc2.fillRect(50, 250, 50, 50); // Body

    crc2.fillStyle = "#858585";
    crc2.fillRect(40, 195, 70, 70); // Head

    crc2.fillStyle = "black";
    crc2.fillRect(50, 215, 14, 20);
    crc2.fillStyle = "white";
    crc2.fillRect(53, 218, 4, 4);

    crc2.fillStyle = "black";
    crc2.fillRect(85, 215, 14, 20);
    crc2.fillStyle = "white";
    crc2.fillRect(88, 218, 4, 4);

    crc2.fillStyle = "black";
    crc2.fillRect(68, 238, 10, 5);

    crc2.fillStyle = "#858585";
    crc2.fillRect(25, 188, 25, 15);


    crc2.fillStyle = "#858585";
    crc2.fillRect(100, 188, 25, 15);

    animals.push(dog)
  }

 /* function singing() {
    console.log("Hallo1")
    const para = document.createElement("p");
    para.innerText = "This is a paragraph";
    document.body.appendChild(para);
  }

  function food() {
    console.log("Hallo2")
  }*/


}

namespace OldMcDonald {

  /*normal script*/
  window.addEventListener("load", start);
  export let crc2: CanvasRenderingContext2D;

  let donkey: Animal; 

  function start (_event:Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    let crc2: CanvasRenderingContext2D;

    donkey = new Animal(70, "grey")
    donkey.draw()
  }
}

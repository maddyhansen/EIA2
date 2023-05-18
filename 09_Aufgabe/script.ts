namespace OldMcDonald {

  /*normal script*/
  window.addEventListener("load", start);
  export let crc2: CanvasRenderingContext2D;
  let canvas: HTMLCanvasElement;

  function start(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    let crc2: CanvasRenderingContext2D;

    let donkey : Animal = new Animal(70, "grey")
    console.log(donkey)
    donkey.draw();

  }

}

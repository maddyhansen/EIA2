namespace OldMcDonald {

  /*normal script*/
  window.addEventListener("load", start);
  export let crc2: CanvasRenderingContext2D;
  export let canvas: HTMLCanvasElement;

  function start(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    let donkey : Animal = new Animal(70, "grey")
    console.log(donkey)
    donkey.draw();

  }

}

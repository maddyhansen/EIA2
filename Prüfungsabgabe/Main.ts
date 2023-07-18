namespace IceShop {

    window.addEventListener('load', handleload);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;

    export function handleload(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d")
        document.getElementById("start")!.addEventListener('click', startGame);
        drawBackground();
        giveOrder();
    

    }

    function startGame(){
       // handleGame();
        document.getElementById("canvas")!.classList.remove("hidden");
        document.getElementById("gamestart")!.classList.add("hidden");
        document.getElementById("order")!.classList.remove("hidden");
        document.getElementById("list")!.classList.remove("hidden");
    }

   // let entrance :  ; 
   // let exit =; 

   // function handleGame(){
   //     if (){
    //        giveOrder()

    //    }
    //    if(){

    //     }

    // }

}
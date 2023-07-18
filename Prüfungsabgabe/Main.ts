namespace IceShop {

    window.addEventListener('load', handleload);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d")

    
    const areaX = 450;
    const areaY = 50; 
    const areaWidth = 600; 
    const areaHeight = 450; 

    crc2.fillRect(areaX, areaY, areaWidth, areaHeight);

    export function handleload(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d")
        document.getElementById("start")!.addEventListener('click', startGame);
        drawBackground();
        giveOrder();


    }

    function startGame() {
        // handleGame();
        document.getElementById("canvas")!.classList.remove("hidden");
        document.getElementById("gamestart")!.classList.add("hidden");
        document.getElementById("order")!.classList.add("hidden");
        document.getElementById("list")!.classList.remove("hidden");
        alert("Click on entrance area/door to get the formular")

    }

    canvas.addEventListener('click', (event) => {
        const mouseX = event.clientX - canvas.offsetLeft;
        const mouseY = event.clientY - canvas.offsetTop; 
        if (
            mouseX >= areaX &&
            mouseX <= areaX + areaWidth &&
            mouseY >= areaY &&
            mouseY <= areaY + areaHeight
        ) {
            console.log('Mouse click inside the area');
            document.getElementById("order")!.classList.remove("hidden");
        }
    });

    // let entrance :  ; 
    // let exit:
    // entrance == exit 

    // function handleGame(){
    //     if (){
    //        giveOrder()

    //    }
    //    if(){

    //     }

    // }

}
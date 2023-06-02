namespace FlyingPeopleAlpsII {

    console.log("Its me, hi I am the problem its me!")

    window.addEventListener('load', handleload);
    export let crc2: CanvasRenderingContext2D;
    export let goldy: number = 0.62;
    export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    export let horizon: number

    function handleload(_event: Event) {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d")

        horizon = crc2.canvas.height * goldy;
        console.log("Iamhereeee");
        console.log(goldy);
        drawBackground();
        drawMountains({ x: horizon, y: 70 });
        drawSunny({ x: 100, y: 70 });
        drawCloud({ x: 500, y: 175 }, { x: 250, y: 75 });
        drawTriangle({ x: 0, y: 440 });
        drawLandingCircle({ x: 400, y: 500 }, 190, 30);
        drawShack({ x: 700, y: 550 });
        drawWindSock({ x: 380, y: 500 });
        drawTree({ x: 90, y: 190 });
        drawTree1({ x: 400, y: 190 });
        drawTree2({ x: 440, y: 190 });
        drawTree3({ x: 360, y: 190 });
        drawTree4({ x: 330, y: 190 });
        console.log(horizon)

        animateFlyingPerson()
        createFlyingPerson()

    }

    let paraglider: paraglider[] = [];
    export let landingzone: number = ( _x: 400, _y: 500)
    export let hikingzone: number = (_x: 0,_y: 440 )
    export let flystart: number = (_x: 50,_y: 150 )

    function createFlyingPerson(): void {

        for (let iFlyingPerson: number = 0; iFlyingPerson < 13; iFlyingPerson++) {
            let paraglideri: paraglider  = new paraglider;
            paraglider.push(paraglideri);
        }
    }
    
    
    function animateFlyingPerson(): void {
    
        crc2.putImageData(drawBackground, 0, 0);
    
        for (let paraglideri of paraglider) {
            paraglider.draw(Vector, Vector);
            paraglider.move(1/1000);
        }
    
    }
    

  /*  function drawBee(_position: Vector): void {
        console.log("Bee1");
        crc2.save();
        crc2.translate(_position.x, _position.y);

        let grd = crc2.createLinearGradient(2, 3, 6, 8);
        grd.addColorStop(0, "yellow");
        grd.addColorStop(1, "black");
        grd.addColorStop(1, "yellow");

        crc2.beginPath();
        crc2.ellipse(-2, -10, 8, 2, 80, -2, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(0, 0, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
        crc2.fillStyle = grd;
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(2, -9, 8, 2, -80, 20, 2 * Math.PI);
        crc2.fillStyle = "lightgrey";
        crc2.fill();

        crc2.restore();
    }



    function drawflyingPerson(_position: Vector, _size: Vector) {


        crc2.beginPath();
        crc2.fillStyle = "#003300";
        crc2.fillRect(_position.x, _position.y, 10, 16);
        crc2.fillStyle = "#ffffcc";
        crc2.fillRect(_position.x, _position.y - 6, 10, 10);
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x - 20, _position.y - 20);
        crc2.lineTo(_position.x + 30, _position.y - 30);
        crc2.stroke();
        crc2.fillStyle = "#b30000";
        crc2.fill();
        crc2.closePath();

    };

    function drawPerson(_position: Vector, _size: Vector) {

        crc2.beginPath();
        crc2.fillStyle = "#003300";
        crc2.fillRect(_position.x, _position.y, 10, 16);

        crc2.fillStyle = "#ffffcc";
        crc2.fillRect(_position.x, _position.y - 6, 10, 10);
        crc2.closePath();
    }*/

}

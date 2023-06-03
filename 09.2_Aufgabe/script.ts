namespace FlyingPeopleAlpsII {

    console.log("Its me, hi I am the problem its me!")

    window.addEventListener('load', handleload);
    export let imgData: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let goldy: number = 0.62;
    export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    export let horizon1: Vector
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
        drawMountains(new Vector(horizon,70));
        drawSunny(new Vector(100, 70));
        drawCloud(new Vector(500, 175), new Vector(250, 75));
        drawTriangle(new Vector(0, 400));
        drawLandingCircle(new Vector(0, 400) , new Vector (190, 30), new Vector (190, 30));
        drawShack(new Vector(700, 550));
        drawWindSock(new Vector (380,500));
        drawTree(new Vector (90, 190 ));
        drawTree1(new Vector (400, 190));
        drawTree2(new Vector(440, 190));
        drawTree3(new Vector (360,190 ));
        drawTree4(new Vector (330, 190 ));
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
            console.log(horizon)

        animateFlyingPerson()
        createFlyingPerson();
        window.setInterval(animateFlyingPerson, 1000)
        }

    let FlyingPerson: paraglider[] = [];
        export let landingzone: Vector = new Vector(400, 500); //Vector is not a constructor?
        export let hikingzone: Vector = new Vector(0, 440);
        export let flystart: Vector = new Vector(50, 150);

        function createFlyingPerson(): void {

            for (let iFlyingPerson: number = 0; iFlyingPerson < 10; iFlyingPerson++) {
                let paraglideri: paraglider = new paraglider(new Vector(400, 500));
                FlyingPerson.push(paraglideri);
            }
        }


        function animateFlyingPerson(): void {

            crc2.putImageData(imgData, 0, 0);

            for (let paraglideri of FlyingPerson) {
                paraglideri.draw(new Vector(150, 150), new Vector(10,16));
                paraglideri.move(1 / 1000); //hiermit kommt er auch nicht klar
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

namespace CanvasI {

    console.log("Its me, hi I am the problem its me!")

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener('load', handleload);
    let crc2: CanvasRenderingContext2D;
    let goldy: number = 0.62;

    function handleload(_event:Event) {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d")
        console.log("Iamhereeee");
        console.log(goldy);
        drawBackground();
        drawSunny({ x: 100, y: 70 });
        drawCloud({ x: 500, y: 175 }, { x: 250, y: 75 });
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(goldy, "white");
        gradient.addColorStop(1, "HSL(100,80%,30%)"); 
        console.log(gradient)
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSunny(_position: Vector): void {
        console.log('Sun', _position);

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60 ,100%, 50%, 0)")

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position: Vector, _size: Vector): void {
        console.log('cloud');
        console.log("T2");
        let nParticles: number = 15;
        let particle: Path2D = new Path2D();
        let radiusParticle: number = 20; 
        let gradient: CanvasGradient = crc2.createRadialGradient(0,0,0,0,0,radiusParticle);
    
        particle.arc(0,0,radiusParticle,0,2*Math.PI);
        gradient.addColorStop(0,"HSLA(0,100%,100%,0.5)");
        gradient.addColorStop(1,"HSLA(0,100%,100%,0)");
    
        crc2.save();  
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient; 
    
        for (let drawn: number = 0; drawn < nParticles; drawn++){
        let x: number = (Math.random() - 0.5)* _size.x; 
        let y: number = - (Math.random() * _size.y);
        crc2.translate(x,y);    
        crc2.fill(particle);
    }

}}

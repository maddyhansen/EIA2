namespace IceShop {
    console.log("canvasisthere");

    export function drawBackground() {
        drawWallsAndFloor();
        drawFontaine();
        drawCounter();
        drawBenchandChair();
        drawTable();
        console.log("handleLoad working");
    };

    function drawWallsAndFloor(): void {
        //Background
        crc2.fillStyle = "#718e79";
        crc2.fillRect(0, 0, 1000, 500);
        //Floor
        crc2.fillStyle = "#7bd1c4";
        crc2.fillRect(50, 50, 870, 400);
        //Walls
        crc2.fillStyle = "#ff6a00";
        crc2.fillRect(50, 50, 850, 20);
        crc2.fillRect(1390, 320, 10, 200);

        crc2.fillStyle = "#ff6a00";
        crc2.fillRect(600, 450, 300, 20);
        crc2.fillRect(1390, 320, 10, 200);

        crc2.fillStyle = "#ff6a00";
        crc2.fillRect(50, 450, 350, 20);
        crc2.fillRect(1390, 320, 10, 200);

        crc2.fillStyle = "#ff6a00";
        crc2.fillRect(50, 450, 350, 20);
        crc2.fillRect(50, 50, 20, 400);

        crc2.fillStyle = "#ff6a00";
        crc2.fillRect(50, 450, 350, 20);
        crc2.fillRect(900, 50, 20, 420);
    };

    function drawFontaine(): void {
        //Fontaine 
        crc2.fillStyle = "#858585";
        crc2.beginPath();
        crc2.arc(500, 250, 100, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.fillStyle = "#636363";
        crc2.beginPath();
        crc2.arc(500, 250, 75, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        //Water in Fontaine
        crc2.fillStyle = "#4696c2";
        crc2.beginPath();
        crc2.arc(500, 250, 70, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        //Leaves
        crc2.fillStyle = "#25e435";
        crc2.beginPath();
        crc2.arc(500, 230, 15, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.fillStyle = "#25e435";
        crc2.beginPath();
        crc2.arc(470, 260, 10, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.fillStyle = "#25e435";
        crc2.beginPath();
        crc2.arc(530, 250, 13, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        //Flowers
        crc2.fillStyle = "#b10b6c";
        crc2.beginPath();
        crc2.arc(500, 275, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.fillStyle = "#b10b6c";
        crc2.beginPath();
        crc2.arc(500, 265, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.fillStyle = "#b10b6c";
        crc2.beginPath();
        crc2.arc(495, 270, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.fillStyle = "#b10b6c";
        crc2.beginPath();
        crc2.arc(505, 270, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.fillStyle = "#f0b019";
        crc2.beginPath();
        crc2.arc(500, 270, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    };

    function drawCounter(): void {
        //shopcounter
        crc2.fillStyle = "#636363";
        crc2.fillRect(100, 320, 80, 35);
        crc2.fillRect(180, 320, 40, 95);

        //ICE Coops
        crc2.fillStyle = "#c00c33";
        crc2.fillRect(110, 325, 20, 20);

        crc2.fillStyle = "#782b08";
        crc2.fillRect(140, 325, 20, 20);

        crc2.fillStyle = "#f4b14e";
        crc2.fillRect(170, 325, 20, 20);



    };

    function drawBenchandChair(): void {
        //Bench left upper corner
        crc2.fillStyle = "#733d07";
        crc2.fillRect(90, 90, 90, 30);
        crc2.fillRect(90, 90, 30, 100);

        //chair left upper corner
        crc2.fillStyle = "#733d07";
        crc2.fillRect(190, 140, 30, 30);
        crc2.fillRect(140, 200, 30, 30);

        //Bench right upper corner
        crc2.fillStyle = "#733d07";
        crc2.fillRect(780, 90, 90, 30);
        crc2.fillRect(850, 90, 30, 100);

        //chair right upper corner
        crc2.fillStyle = "#733d07";
        crc2.fillRect(750, 140, 30, 30);
        crc2.fillRect(800, 200, 30, 30);

        //Bench right down corner
        crc2.fillStyle = "#733d07";
        crc2.fillRect(780, 400, 90, 30);
        crc2.fillRect(840, 300, 30, 100);

        //chair right down corner
        crc2.fillStyle = "#733d07";
        crc2.fillRect(720, 350, 30, 30);
        crc2.fillRect(780, 300, 30, 30);
    }

    function drawTable(): void {
        //Table left upper corner 
        crc2.fillStyle = "#78c936";
        crc2.beginPath();
        crc2.arc(155, 155, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        //Table right upper corner 
        crc2.fillStyle = "#78c936";
        crc2.beginPath();
        crc2.arc(815, 160, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        //Table right down corner 
        crc2.fillStyle = "#78c936";
        crc2.beginPath();
        crc2.arc(800, 365, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }

}
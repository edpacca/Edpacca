import { drawCircle, drawLine } from "$lib/ts/canvas/canvasUtils"

const ORANGE = "rgb(255, 150, 150)"
const DARK_ORANGE = "rgb(200, 100, 100)"
const WHITE = "white";
const GREY_30 = "rgba(150, 150, 150, 0.3)";

export function drawCharacter(context: CanvasRenderingContext2D, x: number, y: number) {
    
    let startX: number, startY: number, endX: number, endY: number;
    
    const HEAD_POINTS: [number, number][] = [
        // top 
        [15, 0],
        // ear
        [15, -10],
        [20, 0],
        [10, 10],
        // side
        [5, 20],
        [0, 10],
        [-10, 40],
        [-25, 50],
        // chin
        [-10, 10],
        [-10, 5],
        [-10, 0]
    ]

    const EAR_POINTS: [number, number][] = [

    ]

    drawShape(HEAD_POINTS, 1, GREY_30, GREY_30);
    reset();

    drawShape(EAR_POINTS, 2, "blue", DARK_ORANGE)

    function drawNextLine(xOffset: number, yOffset: number) {
        endX = startX + xOffset;
        endY = startY + yOffset;
        drawLine(context, startX, startY, endX, endY);
        startX = endX;
        startY = endY;
    }

    function drawReflection(xOffset: number, yOffset: number) {
        drawNextLine(xOffset * -1, yOffset);
    }

    function drawShape(points: [number, number][], lineWidth: number, stroke: string, fill?: string) {
        reset();
        context.beginPath();
        context.moveTo(x, y);
        points.forEach(p => drawNextLine(p[0], p[1]));
        reset();
        points.forEach(p => drawReflection(p[0], p[1]));
        context.closePath();

        context.lineCap = 'round';
        context.lineWidth = lineWidth;
        context.strokeStyle = stroke;
        if (fill) context.fillStyle = fill;
        context.fill();
        context.stroke();
    }

    function reset() {
        startX = x;
        startY = y;
    }
}   

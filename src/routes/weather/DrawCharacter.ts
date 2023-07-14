import { drawCircle, drawLine } from "$lib/ts/canvas/canvasUtils"

const ORANGE = "rgb(255, 150, 150)"
const WHITE = "white";

export function drawCharacter(context: CanvasRenderingContext2D, x: number, y: number) {
    


    // drawCircle(context, x - 35, y - 100, 100, undefined, ORANGE)
    // drawCircle(context, x + 35, y - 100, 100, undefined, ORANGE)
    let startX = x;
    let startY = y;
    let endX: number, endY: number;
    let COLOUR = ORANGE;

    // DRAW HEAD
    context.beginPath();
    const HEAD_POINTS = [
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

    HEAD_POINTS.forEach(p => drawNextLine(p[0], p[1]));
    startX = x;
    startY = y;
    HEAD_POINTS.forEach(p => drawReflection(p[0], p[1]));

    context.stroke();


    function drawNextLine(xOffset: number, yOffset: number) {
        endX = startX + xOffset;
        endY = startY + yOffset;
        drawLine(context, startX, startY, endX, endY, 4, COLOUR);
        startX = endX;
        startY = endY;
    }

    function drawReflection(xOffset: number, yOffset: number) {
        drawNextLine(xOffset * -1, yOffset);
    }

}   

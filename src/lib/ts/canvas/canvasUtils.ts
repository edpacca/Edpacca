export function drawCircle(context: CanvasRenderingContext2D,
    x: number, y: number, radius: number, stroke?: string, fill?: string) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI *2, false);
    if (stroke) {
        context.strokeStyle = stroke;
        context.stroke();
    }
    if (fill) {
        context.fillStyle = fill;
        context.fill();
    }
    context.closePath();
}

export function drawLine(context: CanvasRenderingContext2D,
    startX: number, startY: number, endX: number, endY: number, lineWidth: number, stroke: string) {
    context.moveTo(startX, startY);
    context.lineCap = 'round';
    context.lineWidth = lineWidth;
    context.lineTo(endX, endY);
    context.strokeStyle = stroke;
}
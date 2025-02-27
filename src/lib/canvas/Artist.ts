import { drawLine } from "$lib/canvas/canvasUtils";

export class Artist {
	ctx: CanvasRenderingContext2D;
	rootX: number;
	rootY: number;
	startX: number;
	startY: number;
	endX: number;
	endY: number;

	constructor(context: CanvasRenderingContext2D, x: number, y: number) {
		this.startX = x;
		this.startY = y;
		this.endX = x;
		this.endY = y;
		this.rootX = x;
		this.rootY = y;
		this.ctx = context;
	}

	reset(xOffset: number, yOffset: number) {
		this.startX = this.rootX + xOffset;
		this.startY = this.rootY + yOffset;
	}

	drawNextLine(xOffset: number, yOffset: number) {
		this.endX = this.startX + xOffset;
		this.endY = this.startY + yOffset;
		drawLine(this.ctx, this.startX, this.startY, this.endX, this.endY);
		this.startX = this.endX;
		this.startY = this.endY;
	}

	drawShape(
		points: Points,
		reflect: boolean,
		xOffset: number,
		yOffset: number,
		lineWidth: number,
		stroke?: string,
		fill?: string | CanvasGradient,
	) {
		this.ctx.beginPath();
		this.ctx.moveTo(this.startX, this.startY);
		points.forEach((p) => this.drawNextLine(p[0], p[1]));
		if (reflect) {
			this.reset(xOffset, yOffset);
			points.forEach((p) => this.drawReflection(p[0], p[1]));
		}
		this.ctx.closePath();

		if (stroke) {
			this.ctx.lineCap = "round";
			this.ctx.lineWidth = lineWidth;
			this.ctx.strokeStyle = stroke;
			this.ctx.stroke();
		}
		if (fill) {
			this.ctx.fillStyle = fill;
			this.ctx.fill();
		}
	}

	drawReflection(xOffset: number, yOffset: number) {
		this.drawNextLine(xOffset * -1, yOffset);
	}
}

import { Animator } from "$lib/canvas/Animator";
import { randIntBetween } from "$lib/utils";

export class Thunder extends Animator {
	frequency: number;
	width: number;
	height: number;

	countTo: number = 20;
	count: number = 0;
	flashCount: number = 0;
	flashes: number = 2;

	constructor(context: CanvasRenderingContext2D, canvasHeight: number, canvasWidth: number, frequency: number) {
		super(context);
		this.frequency = frequency;
		this.width = canvasWidth;
		this.height = canvasHeight;
		this.resetCounts();
	}

	animate() {
		if (this.count >= this.countTo) {
			if (this.flashCount <= this.flashes) {
				if (this.flashCount % 8 == 0) {
					this.drawFlash();
				} else if (this.flashCount % 4 == 0) {
					this.drawBlank();
				}
				this.flashCount++;
			} else {
				this.drawBlank();
				this.resetCounts();
			}
		} else {
			this.count++;
		}
	}

	resetCounts() {
		this.count = 0;
		this.flashCount = 0;
		this.flashes = randIntBetween(4, 20);
		this.countTo = randIntBetween(80, 400);
	}

	drawFlash() {
		this.ctx.fillStyle = "white";
		this.ctx.fillRect(0, 0, this.width, this.height);
	}
	drawBlank() {
		this.ctx.fillStyle = "none";
		this.ctx.fillRect(0, 0, this.width, this.height);
	}
}

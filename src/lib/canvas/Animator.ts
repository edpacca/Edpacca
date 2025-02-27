export abstract class Animator {
	ctx: CanvasRenderingContext2D;

	constructor(context: CanvasRenderingContext2D) {
		this.ctx = context;
	}

	abstract animate(): void;
}

import { Animator } from "$lib/canvas/Animator";
import { Vector2D } from "$lib/mechanics/vector";
import { randBetween } from "$lib/utils/maths";

const TWO_PI = Math.PI * 2;
const ORB_SIZE_VARIANCE = [0.8, 1.2];
const ORB_X_SPREAD_FACTOR = [-2, 2];
const ORB_Y_SPREAD_FACTOR = [-0.5, 1];

export class Cloud extends Animator {
	position: Vector2D;
	speed: number;
	orbs: Orb[] = [];
	width: number;
	radius: number;
	size: number;
	color: string;

	constructor(context: CanvasRenderingContext2D, x: number, y: number, radius: number, size: number, speed: number, color: string) {
		super(context);
		this.position = new Vector2D(x, y);
		this.speed = speed;
		this.size = size;
		this.ctx = context;
		this.width = 0;
		this.color = color;
		this.radius = radius;
	}

	animate = () => {
		this.position.x += this.speed;
		// regenerate once cloud has left screen
		if (this.position.x > this.ctx.canvas.width + this.width) {
			this.generate();
			this.position.x = -this.width;
			// vary height, keep within top half of canvas
			this.position.y += randBetween(-this.width, this.width);
			this.position.y = Math.max(0, this.position.y);
			this.position.y = Math.min(this.ctx.canvas.height / 2, this.position.y);
		}
		this.draw();
	};

	draw = () => {
		this.orbs.forEach((orb) => orb.draw(this.ctx, this.position.x, this.position.y));
	};

	generate = () => {
		let smallestX = 0;
		let largestX = 0;

		this.orbs.splice(0, this.orbs.length);

		for (let i = 0; i < this.size; i++) {
			const orbRadius = randBetween(this.radius * ORB_SIZE_VARIANCE[0], this.radius * ORB_SIZE_VARIANCE[1]);
			const orbX = randBetween(ORB_X_SPREAD_FACTOR[0] * this.radius, ORB_X_SPREAD_FACTOR[1] * this.radius);
			const orbY = randBetween(ORB_Y_SPREAD_FACTOR[0] * this.radius, ORB_Y_SPREAD_FACTOR[1] * this.radius);
			if (orbX < smallestX) {
				smallestX = orbX;
			}
			if (orbX > largestX) {
				largestX = orbX;
			}
			this.orbs.push(new Orb(orbX, orbY, orbRadius, this.color));
		}

		this.width = largestX - smallestX;
	};
}

class Orb {
	pos: Vector2D;
	color: string;
	radius: number;

	constructor(x: number, y: number, radius: number, color: string) {
		this.color = color;
		this.radius = radius;
		this.pos = new Vector2D(x, y);
	}

	draw = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
		const absX = x + this.pos.x;
		const absY = y + this.pos.y;

		const radialGradient = ctx.createRadialGradient(absX, absY, 0, absX, absY, this.radius);
		radialGradient.addColorStop(0, this.color);
		radialGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
		ctx.beginPath();
		ctx.fillStyle = radialGradient;
		ctx.arc(absX, absY, this.radius, 0, TWO_PI, true);
		ctx.fill();
		ctx.closePath();
	};
}

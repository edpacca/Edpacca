import { Animator } from "$lib/canvas/Animator";

export class Bluebody extends Animator {
	radialGradient: CanvasGradient;
	orbitPosX: number;
	orbitPosY: number;
	orbitCenX: number;
	orbitCenY: number;
	orbitRadius: number;
	orbitBodyRadius: number;
	canvasWidth: number;
	canvasHeight: number;

	constructor(
		context: CanvasRenderingContext2D,
		time: Date,
		orbitCenX: number,
		orbitCenY: number,
		orbitRadius: number,
		orbitBodyRadius: number,
		canvasWidth: number,
		canvasHeight: number,
	) {
		super(context);
		this.canvasHeight = canvasHeight;
		this.canvasWidth = canvasWidth;
		// ctx.beginPath();
		// ctx.arc(
		//     orbitCentreX,
		//     orbitCentreY,
		//     orbitRadius,
		//     Math.PI, Math.PI * 2, false);
		// ctx.stroke();
		this.orbitPosX = 0;
		this.orbitPosY = 0;
		this.orbitCenY = orbitCenY;
		this.orbitCenX = orbitCenX;

		this.orbitRadius = orbitRadius;
		this.orbitBodyRadius = orbitBodyRadius;
		this.updateTime(time);
		this.radialGradient = context.createRadialGradient(0, 0, 0, 0, 0, 0);
		this.ctx = context;
		// sun or moon

		// context.fillRect(orbitPositionX, orbitPositionY, orbitBodyRadius * 2, orbitBodyRadius * 2);
	}

	updateTime(time: Date) {
		const hours = time.getHours();
		const minutes = time.getMinutes();

		const decimal = hours + (minutes / 60);
		const moduloTime = decimal + (6 % 24);
		const orbitAngle = Math.PI - ((((2 * Math.PI) / 24) * moduloTime) % Math.PI) - Math.PI / 2;


		const orbitLenX = Math.sin(orbitAngle) * this.orbitRadius;
		const orbitLenY = Math.cos(orbitAngle) * this.orbitRadius;
		this.orbitPosX = this.orbitCenX - orbitLenX;
		this.orbitPosY = this.orbitCenY - orbitLenY;

		this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

		if (hours >= 6 && hours < 18) {
			this.radialGradient = this.getSunRadialGradient(this.ctx, this.orbitPosX, this.orbitPosY, this.orbitBodyRadius);
		} else {
			this.radialGradient = this.getMoonRadialGradient(this.ctx, this.orbitPosX, this.orbitPosY, this.orbitBodyRadius);
		}
		this.draw();

	}

	animate = () => {
		this.draw();
	};

	draw = () => {
		this.ctx.fillStyle = this.radialGradient;
		this.ctx.arc(this.orbitPosX, this.orbitPosY, this.orbitBodyRadius, 0, 2 * Math.PI, false);
		this.ctx.fill();
	};

	getSunRadialGradient(context: CanvasRenderingContext2D, x: number, y: number, r: number) {
		const radialGradient = context.createRadialGradient(x, y, r * 0.8, x, y, r);
		radialGradient.addColorStop(0, "rgba(255, 240, 210, 1)");
		radialGradient.addColorStop(1, "rgba(255, 255, 0, 0)");
		return radialGradient;
	}

	getMoonRadialGradient(context: CanvasRenderingContext2D, x: number, y: number, r: number) {
		const radialGradient = context.createRadialGradient(x, y, r * 0.5, x, y, r * 0.8);
		radialGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
		radialGradient.addColorStop(1, "rgba(50, 50, 50, 0)");
		return radialGradient;
	}
}

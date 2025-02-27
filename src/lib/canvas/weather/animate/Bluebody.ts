import { Animator } from "$lib/canvas/Animator";

export class Bluebody extends Animator {
	radialGradient: CanvasGradient;
	orbitPosX: number;
	orbitPosY: number;
	orbitBodyRadius: number;

	constructor(
		context: CanvasRenderingContext2D,
		time: Date,
		orbitCenX: number,
		orbitCenY: number,
		orbitRadius: number,
		orbitBodyRadius: number,
	) {
		super(context);
		// ctx.beginPath();
		// ctx.arc(
		//     orbitCentreX,
		//     orbitCentreY,
		//     orbitRadius,
		//     Math.PI, Math.PI * 2, false);
		// ctx.stroke();
		const hours = time.getHours();
		const moduloTime = hours + (6 % 24);
		const orbitAngle = Math.PI - ((((2 * Math.PI) / 24) * moduloTime) % Math.PI) - Math.PI / 2;
		const orbitLenX = Math.sin(orbitAngle) * orbitRadius;
		const orbitLenY = Math.cos(orbitAngle) * orbitRadius;
		this.orbitPosX = orbitCenX - orbitLenX;
		this.orbitPosY = orbitCenY - orbitLenY;
		this.orbitBodyRadius = orbitBodyRadius;
		this.ctx = context;
		// sun or moon
		if (hours >= 6 && hours < 18) {
			this.radialGradient = this.getSunRadialGradient(context, this.orbitPosX, this.orbitPosY, orbitBodyRadius);
		} else {
			this.radialGradient = this.getMoonRadialGradient(context, this.orbitPosX, this.orbitPosY, orbitBodyRadius);
		}

		// context.fillRect(orbitPositionX, orbitPositionY, orbitBodyRadius * 2, orbitBodyRadius * 2);
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

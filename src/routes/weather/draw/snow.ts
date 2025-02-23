import { drawLine, drawLineAtAngle } from "$lib/canvasUtils";
import { Vector2D } from "$lib/mechanics/vector";
import { Drop, Precipitator } from "./precipitater";

const SNOW_COLOR = "rgb(180, 190, 255)";
// const FLAKE_SIZE = 40;
// const FLAKE_BRANCH_LENGTH = FLAKE_SIZE / 2;

export class Snow extends Precipitator {
  constructor(
    context: CanvasRenderingContext2D,
    speed: number,
    density: number,
    windSpeed: number,
    size: number,
  ) {
    super(context, speed, density, windSpeed, size);
  }

  generateDrop(x: number, y: number): Drop {
    return new SnowFlake(this.size, new Vector2D(x, y));
  }

  draw = () => {
    this.drops.forEach((drop) => drop.draw(this.ctx));
  };
}

class SnowFlake extends Drop {
  constructor(size: number, initPos: Vector2D) {
    super(size, initPos);
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.strokeStyle = SNOW_COLOR;
    context.lineCap = "round";
    context.lineWidth = this.size / 20;

    this.drawBranch(context, this.size / 2, Math.PI / 6);
    this.drawBranch(context, this.size / 2, Math.PI / 2);
    this.drawBranch(context, this.size / 2, (5 * Math.PI) / 6);
    this.drawBranch(context, this.size / 2, (7 * Math.PI) / 6);
    this.drawBranch(context, this.size / 2, (3 * Math.PI) / 2);
    this.drawBranch(context, this.size / 2, (11 * Math.PI) / 6);

    context.stroke();
    context.closePath();
  }

  drawBranch = (context: CanvasRenderingContext2D, radius: number, angle: number) => {
    const offsetX = radius * Math.cos(angle);
    const offsetY = radius * Math.sin(angle);

    // draw main branch
    context.moveTo(this.position.x, this.position.y);
    context.lineTo(this.position.x - offsetX, this.position.y - offsetY);

    const r2 = radius * 0.5; // length from origin to start of sub branch
    const r3 = radius * 1.1; // length from
    const subBranchAngle = Math.PI / 6;
    const r4 = (r2 + r3) * Math.tan(subBranchAngle);

    const x2 = this.position.x - r2 * Math.cos(angle);
    const y2 = this.position.y - r2 * Math.sin(angle);

    const x3 = this.position.x - r4 * Math.cos(subBranchAngle + angle);
    const y3 = this.position.y - r4 * Math.sin(subBranchAngle + angle);

    const x4 = this.position.x - r4 * Math.cos(angle - subBranchAngle);
    const y4 = this.position.y - r4 * Math.sin(angle - subBranchAngle);

    context.moveTo(x2, y2);
    context.lineTo(x3, y3);
    context.moveTo(x2, y2);
    context.lineTo(x4, y4);
  };
}

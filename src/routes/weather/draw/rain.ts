import { Vector2D } from "$lib/mechanics/vector";
import { Drop, Precipitator } from "./precipitater";

const RAIN_COLOR = "rgb(90, 140, 210)";
const DROP_SIZE = 10;

export class Rain extends Precipitator {
  constructor(
    context: CanvasRenderingContext2D,
    speed: number,
    density: number,
    windSpeed: number,
  ) {
    super(context, speed, density, windSpeed, DROP_SIZE);
  }

  generateDrop(x: number, y: number): Drop {
    return new RainDrop(DROP_SIZE, new Vector2D(x, y));
  }
}

class RainDrop extends Drop {
  height: number;

  constructor(size: number, initPos: Vector2D) {
    super(size, initPos);
    this.height = size * 2.5;
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.fillStyle = RAIN_COLOR;
    context.moveTo(this.position.x, this.position.y);
    context.lineTo(this.position.x - this.size, this.position.y + this.height);
    context.lineTo(this.position.x + this.size, this.position.y + this.height);
    context.lineTo(this.position.x, this.position.y);
    context.fill();
    context.arc(
      this.position.x,
      this.position.y + this.height,
      this.size,
      1.9 * Math.PI,
      1.1 * Math.PI,
    );
    context.fill();
    context.closePath();
  }
}

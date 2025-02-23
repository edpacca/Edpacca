import { Vector2D } from "$lib/mechanics/vector";

export abstract class Precipitator {
  ctx: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  drops: Drop[] = [];
  dropSpeed: number;
  windSpeed: number;
  size: number;

  constructor(
    context: CanvasRenderingContext2D,
    speed: number,
    density: number,
    windSpeed: number,
    size: number,
  ) {
    this.ctx = context;
    this.canvasWidth = context.canvas.width;
    this.canvasHeight = context.canvas.height;
    this.dropSpeed = speed;
    this.size = size;
    this.windSpeed = windSpeed;
    const dropSpacing = this.size / density;
    const columns = Math.floor(this.canvasWidth / (this.size + dropSpacing));

    for (let i = 0; i < columns; i++) {
      this.drops.push(
        this.generateDrop(i * (dropSpacing + this.size), Math.random() * this.canvasHeight),
      );
    }
  }

  abstract generateDrop(x: number, y: number): Drop;

  animate = () => {
    this.drops.forEach((drop) => {
      drop.position.y += this.dropSpeed;
      drop.position.x += this.windSpeed / 10;

      if (drop.position.y > this.canvasHeight) {
        // vary starting position for variety of y position
        drop.position.y = 0 - Math.random() * this.canvasHeight;
        // shift drop position left or right up to drop width
        drop.position.x = drop.position.x + (Math.random() * 2 - 1.0) * 3 * this.size;
      }
      if (drop.position.x > this.canvasWidth) {
        drop.position.x = 0;
      }
      drop.draw(this.ctx);
    });
  };
}

export abstract class Drop {
  position: Vector2D;
  size: number;

  constructor(size: number, initPos: Vector2D) {
    this.position = initPos;
    this.size = size;
  }

  abstract draw(context: CanvasRenderingContext2D): void;
}

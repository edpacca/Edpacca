import { Vector2D } from "$lib/mechanics/vector";

const RAIN_COLOR = "rgb(70, 130, 255)";
const DROP_SIZE = 10;

export class Rain {

    ctx: CanvasRenderingContext2D;
    canvasWidth: number;
    canvasHeight: number;
    rainDrops: RainDrop[] = [];
    rainSpeed: number;
    windSpeed: number;

    constructor(
        context: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement,
        speed: number,
        density: number,
        windSpeed: number) {
        this.ctx = context;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.rainSpeed = speed;
        this.windSpeed = windSpeed;
        const dropSpacing = DROP_SIZE / density;
        const columns = Math.floor(this.canvasWidth/ (DROP_SIZE + dropSpacing));

        for (let i = 0; i < columns; i ++) {
            this.rainDrops.push(new RainDrop(DROP_SIZE, new Vector2D(i * (dropSpacing + DROP_SIZE), Math.random() * this.canvasHeight)));
        }

        context.fillStyle = RAIN_COLOR;

    }

    animate = () => {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.rainDrops.forEach(drop => {
            drop.position.y += this.rainSpeed;
            drop.position.x += this.windSpeed / 10;
            if (drop.position.y > this.canvasHeight) {
                // vary starting position for variety of y position
                drop.position.y = 0 - (Math.random() * this.canvasHeight);
                // shift drop position left or right up to drop width
                drop.position.x = drop.position.x + (((Math.random() * 2) - 1.0) * 3 * DROP_SIZE)
            }
            if (drop.position.x > this.canvasWidth) {
                drop.position.x = 0;
            }
            drop.draw(this.ctx);
        });
        requestAnimationFrame(this.animate);
    }

}

class RainDrop {
    position: Vector2D;
    size: number;
    height: number;

    constructor(size: number, initPos: Vector2D) {
        this.position = initPos;
        this.size = size;
        this.height = size * 2.5;
    }


    draw(context: CanvasRenderingContext2D) {
        context.beginPath()
        context.moveTo(this.position.x, this.position.y);
        context.lineTo(this.position.x - this.size, this.position.y + this.height);
        context.lineTo(this.position.x + this.size, this.position.y + this.height);
        context.lineTo(this.position.x, this.position.y);
        context.fill();
        context.arc(this.position.x, this.position.y + this.height, this.size, 1.9*Math.PI, 1.1*Math.PI)
        context.fill();
        context.closePath();
    }
}



import { resolveCollisions, type Rect } from "./mechanics/rect";
import { Vector2D, randomVector } from "./mechanics/vector";

const GRAVITY = new Vector2D(0, 1);
const DAMPING_FACTOR = 0.47;
const MIN_MAGNITUDE = 4.8
const FONT_SIZE = 84;

const COLORS = [
    "blue",
    "red",
    "green",
    "purple",
    "orange",
    "magenta",
    "lime"
]

function getRects(wordBlocks: WordBlock[]): Rect[] {
    return wordBlocks.map(block => block.getRect());
}

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex]
}

export class WordSoup {

    wordBlocks: WordBlock[] = [];
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    lastTime: number = 0;
    randomForces: boolean = false;
    gravity: Vector2D = GRAVITY;

    constructor(canvas: HTMLCanvasElement, words: string[]) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.ctx.textAlign = "left";
        this.ctx.textBaseline = "top";

        words.forEach(word => {
            this.wordBlocks.push(new WordBlock(word, FONT_SIZE, getRandomColor()));
        })
        
        let lastPlacedBlock: WordBlock;
        const nextPosition = new Vector2D(10, 10);
        const maxBlockHeight = Math.max(...this.wordBlocks.map(b => b.height));
        this.wordBlocks.forEach(block => {
            if (lastPlacedBlock) {
                nextPosition.x += lastPlacedBlock.width + (Math.random() * lastPlacedBlock.width);
                if (nextPosition.x + block.width > canvas.width) {
                    nextPosition.x = 10 + (Math.random() * 10);
                    nextPosition.y += maxBlockHeight + 10 + (Math.random() * maxBlockHeight)
                }
            }

            block.position.x = nextPosition.x;
            block.position.y = nextPosition.y;
            lastPlacedBlock = block;
            block.draw(this.ctx);
        });
    }

    setForces(value: Vector2D, randomForces: boolean = false) {
        this.randomForces = randomForces;
        this.gravity = value;
    }

    animate = (time: number) => {
        // const deltaT = (time - this.lastTime) / 1000;
        this.lastTime = time;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const rects = getRects(this.wordBlocks);
        this.wordBlocks.forEach(block => {
            const force = this.randomForces ? randomVector(1, 2) : this.gravity;
            this.updateVelocity(block, rects, force);
            block.draw(this.ctx);
        });
        requestAnimationFrame(this.animate);
    }

    updateVelocity(word: WordBlock, collisionRects: Rect[], force: Vector2D) {
        word.velocity.add(force);

        const potentialPos = new Vector2D(word.position.x + word.velocity.x, 
            word.position.y + word.velocity.y);
        
        const potentialRect: Rect = {
            x1: potentialPos.x,
            x2: potentialPos.x + word.width,
            y1: potentialPos.y,
            y2: potentialPos.y + word.height
        }

        const response = resolveCollisions(potentialRect, word.getRect(), collisionRects, word.velocity);
        
        let rectangleCollision = false;
        let boundaryCollision = false;

        if (!response.isZero()) {
            rectangleCollision = true;
            word.velocity.add(response);
            word.velocity.attenuate(DAMPING_FACTOR * 1.2, MIN_MAGNITUDE);
        }

        if (potentialPos.x < 0 || potentialPos.x >= this.canvas.width - word.width || Math.abs(response.x) > 0) {
            word.velocity.x = word.velocity.x * -1;
            boundaryCollision = true;
        }

        if (potentialPos.y < 0 || potentialPos.y >= this.canvas.height - word.height || Math.abs(response.y) > 0) {
            word.velocity.y = word.velocity.y * -1;
            boundaryCollision = true;
        }

        if (boundaryCollision) {
            word.velocity.attenuate(DAMPING_FACTOR, MIN_MAGNITUDE);
        }

        word.position.add(word.velocity);
    }
}

class WordBlock {
    height: number
    width: number
    color: string
    word: string
    charSize: number;
    velocity: Vector2D;
    position: Vector2D = new Vector2D(0, 0);
    rotation: number = 0;

    constructor(word: string, charSize: number, color: string) {
        this.height = charSize + 8;
        this.width = (charSize * word.length * 0.6) + 8;
        this.color = color
        this.word = word;
        this.charSize = charSize;
        this.velocity = new Vector2D(0, 0);
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.position.round();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.fillStyle = "white";
        ctx.font = `bold ${this.charSize}px 'Fira Mono'`;
        ctx.fillText(this.word, this.position.x + 4, this.position.y + 5);
    }

    setRandomPosition(bounds: Vector2D) {
        this.position.x = Math.floor((Math.random() * (bounds.x - this.width)));
        this.position.y = Math.floor((Math.random() * (bounds.y - this.height)));
    }

    getRect(): Rect {
        return {
            x1: this.position.x,
            x2: this.position.x + this.width,
            y1: this.position.y,
            y2: this.position.y + this.height,
        }
    }
}


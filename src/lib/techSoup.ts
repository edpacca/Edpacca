class Vector2D {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(vector: Vector2D) {
        this.x += vector.x;
        this.y += vector.y;
    }

    round() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
    }

    ZERO() {
        this.x = 0;
        this.y = 0;
    }
}

type Rect = {
    x1: number
    x2: number
    y1: number
    y2: number
}

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

// returns positive value if there is any overlapping area
function getAreaOverlap(r1: Rect, r2: Rect) {
    const width = Math.min(r1.x2, r2.x2) - Math.max(r1.x1, r2.x1);
    const height = Math.min(r1.y2, r2.y2) - Math.max(r1.y1, r2.y1);
    const area = width * height;
    return area > 0 ? new Vector2D(width, height) : false;
}

// returns a responseVector
function resolveCollisions(rect: Rect, velocity: Vector2D, collisionRects: Rect[]) {
    const sumResponse = new Vector2D(0, 0);

    collisionRects.forEach(collisionRect => {
        if (!checkSame(rect, collisionRect)) {
            const areaOverlap = getAreaOverlap(rect, collisionRect)
            if (areaOverlap) {
                // get opposite direction to current velocity
                const xMod = velocity.x > 0 ? -1 : 1;
                const yMod = velocity.y > 0 ? -1 : 1;
                const response = new Vector2D(areaOverlap.x * xMod * dampingFactor * 0.002, 
                    areaOverlap.y * yMod * dampingFactor * 0.002);
                sumResponse.add(response);
            }
        } else {
            console.log(rect, collisionRect);
        }
    });

    return sumResponse;
}

function checkSame(r1: Rect, r2: Rect) {
    return r1 == r2;
}

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex]
}

const gravity = new Vector2D(0, 2);
const dampingFactor = 0.57;
const minimum = 6.8
const fontSize = 20;


export class WordSoup {

    wordBlocks: WordBlock[] = [];
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement, words: string[]) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.ctx.textAlign = "left";
        this.ctx.textBaseline = "top";

        words.forEach(word => {
            this.wordBlocks.push(new WordBlock(word, Math.random() * 100 + fontSize, getRandomColor()));
        })
        
        this.wordBlocks.forEach((block, i, blocks) => {
            block.setRandomPosition(
                new Vector2D(this.canvas.width, this.canvas.height),
                getRects(blocks.slice(0, i)));
            block.draw(this.ctx);
        });
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const blockRects = getRects(this.wordBlocks);
        this.wordBlocks.forEach((wordBlock) => {
            this.updateVelocity(wordBlock,  gravity, blockRects);
            wordBlock.draw(this.ctx);
        });
    }

    updateVelocity(word: WordBlock, incident: Vector2D, collisionRects: Rect[]) {
        word.velocity.add(incident);

        const potentialPos = new Vector2D(word.position.x + word.velocity.x, 
            word.position.y + word.velocity.y);
        
        const potentialRect: Rect = {
            x1: potentialPos.x,
            x2: potentialPos.x + word.width,
            y1: potentialPos.y,
            y2: potentialPos.y + word.height
        }

        const collisionAdjustment = resolveCollisions(potentialRect, word.velocity, collisionRects);
        word.velocity.add(collisionAdjustment);

        if ((potentialPos.x < 0 || potentialPos.x >= this.canvas.width - word.width)) {
            word.velocity.x = word.velocity.x * -1 * dampingFactor;
            if (Math.abs(word.velocity.x) <= minimum) {
                word.velocity.x = 0;
            }
        }

        if ((potentialPos.y < 0 || potentialPos.y >= this.canvas.height - word.height)) {
            word.velocity.y = word.velocity.y * -1 * dampingFactor;
            if (Math.abs(word.velocity.y) <= minimum) {
                word.velocity.y = 0;
            }
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

    constructor(word: string, charSize: number, color: string) {
        this.height = charSize;
        this.width = charSize * word.length * 0.6;
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
        ctx.fillText(this.word, this.position.x, this.position.y);
    }

    setRandomPosition(bounds: Vector2D, occupiedSpaces: Rect[]) {
        this.position.x = Math.floor((Math.random() * (bounds.x - this.width)))
        this.position.y = Math.floor((Math.random() * (bounds.y - this.height)))
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


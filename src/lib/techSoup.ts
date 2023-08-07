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




const COLORS = [
    "blue",
    "red",
    "green",
    "purple",
    "orange",
    "magenta",
    "lime"
]

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex]
}

const gravity = new Vector2D(0, 2);
const dampingFactor = 0.57;
const minimum = 6.8
const fontSize = 84;


export class WordSoup {

    wordBlocks: WordBlock[] = [];
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement, words: string[]) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.ctx.textAlign = "left";
        this.ctx.textBaseline = "top";
        this.ctx.font = `bold ${fontSize}px 'Fira Mono'`;

        words.forEach(word => {
            this.wordBlocks.push(new WordBlock(word, fontSize, getRandomColor()));
        })

        this.wordBlocks.forEach(wordBlock => {
            wordBlock.setRandomPosition(new Vector2D(this.canvas.width, this.canvas.height));
            wordBlock.draw(this.ctx);
        });
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.wordBlocks.forEach(wordBlock => {
            this.updateVelocity(wordBlock,  gravity);
            wordBlock.draw(this.ctx);
        });
    }

    updateVelocity(word: WordBlock, incident: Vector2D) {
        word.velocity.add(incident);

        const potentialPos = new Vector2D(word.position.x + word.velocity.x, 
            word.position.y + word.velocity.y);

        if (potentialPos.x < 0 || potentialPos.x >= this.canvas.width - word.width) {
            word.velocity.x = word.velocity.x * -1 * dampingFactor;
            if (Math.abs(word.velocity.x) <= minimum) {
                word.velocity.x = 0;
            }
        } 

        if (potentialPos.y < 0 || potentialPos.y >= this.canvas.height - word.height) {
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
        ctx.fillText(this.word, this.position.x, this.position.y)
    }

    setRandomPosition(bounds: Vector2D) {
        this.position.x = Math.floor((Math.random() * (bounds.x - this.width)))
        this.position.y = Math.floor((Math.random() * (bounds.y - this.height)))
    }
}


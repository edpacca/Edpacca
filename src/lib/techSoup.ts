type Position = {
    x: number,
    y: number
}

export function populateCanvas(canvas: HTMLCanvasElement, words: string[], charSize: number) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
        const word = new WordBlock(words[0], charSize, { x: 10, y: 10}, "blue");
        word.draw(ctx);
        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            word.update(ctx, 0, 2);
        }

        animate();
    }
}

class WordBlock {

    height: number
    width: number
    x: number
    y: number
    color: string
    word: string
    charSize: number;

    constructor(word: string, charSize: number, position: Position, color: string) {
        this.height = charSize;
        this.width = charSize * word.length * 0.6
        this.x = position.x
        this.y = position.y
        this.color = color
        this.word = word;
        this.charSize = charSize;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "white";
        ctx.fillText(this.word, this.x, this.y)
    }

    update(cxt: CanvasRenderingContext2D, dx: number, dy: number) {
        this.x = this.x += dx;
        this.y = this.y += dy;
        this.draw(cxt);
    }
}


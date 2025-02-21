const MAX_ANGLE = 2 * Math.PI / 6;
const MAX_BRANCH = 3;
const DEPTH = 15;

export class Tree {

    startPoints: Point[] = [];
    endPoints: Point[] = [];
    angles: number[] = [];
    lengths: number[] = [];
    colors: string[] = [];

    ctx: CanvasRenderingContext2D;


    constructor(context: CanvasRenderingContext2D,
        startX: number,
        startY: number,
        length: number,
        angle: number) {

        this.ctx = context;

        this.populateLayers(startX, startY, angle, length, DEPTH);
    }

    populateLayers(startX: number, startY: number, angle: number, length: number, depth: number) {

            const rand = Math.random;
            const endX = startX + length * Math.cos(angle);
            const endY = startY + length * Math.sin(angle);

            this.startPoints.push([startX, startY]);
            this.endPoints.push([endX, endY]);

            const newDepth = depth - 1;

            const subBranches = (rand() * (MAX_BRANCH - 1)) + 1;
            let nextColor: string;
            if (depth <= 2) {
                nextColor = `rgb(30, ${(((rand() * 64) + 128) >> 0)}, 0)`;
              }
              else {
                nextColor = `rgb(30, ${(((rand() * 64) + 64) >> 0)}, 20)`;
            }
            this.colors.push(nextColor);

            for (let i = 0; i < subBranches; i++) {
                const newAngle = angle + rand() * MAX_ANGLE - MAX_ANGLE * 0.5;
                const newLength = length * (0.7 + rand() * 0.3);
                this.angles.push(newAngle);
                this.lengths.push(newLength);
                this.populateLayers(endX, endY, newAngle, newLength, newDepth);
            }
        }

        animate() {
            this.draw();
        }

        draw() {
            let i = 0;

            while(i < this.startPoints.length) {
                let branchWidth = 12;
                for(let j = DEPTH; j >= 0; j--) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.startPoints[i][0], this.startPoints[i][1]);
                    this.ctx.lineCap = 'round';
                    this.ctx.lineWidth = branchWidth;
                    this.ctx.lineTo(this.endPoints[i][0], this.endPoints[i][1]);
                    this.ctx.strokeStyle = this.colors[j];
                    this.ctx.stroke();
                    i++;
                    branchWidth *= 0.7;
                }
            }
        }

}

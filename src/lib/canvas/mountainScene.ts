import { Artist } from "../../Artist";
import { drawCircle } from "./canvasUtils";
import { TREE_LINE_LEFT, TREE_LINE_RIGHT } from "../data/mountainSceneData";

export class MountainScene
{
    ctx: CanvasRenderingContext2D
    anCtx: CanvasRenderingContext2D
    width: number
    height: number
    progressPercentage: number = 0.5

    constructor(ctx: CanvasRenderingContext2D,anCtx: CanvasRenderingContext2D, width: number, height: number, initialPercentage: number)
    {
        this.ctx = ctx;
        this.anCtx = anCtx;
        this.width = width;
        this.height = height;

        this.drawMountainScene();
        this.setAnimationSceneValues(initialPercentage);
    }

    drawMountainScene() {

        const a = new Artist(this.ctx, 0, 0);
        const SHADOW = "#715a74";
        const HIGHLIGHT = "#ce8eaa";
        const HILL_LEFT_FILL = "rgb(65, 63, 85)";
        const HILL_RIGHT_FILL = "rgb(74, 75, 96)";
        const TREE_FILL = "rgb(47, 48, 69)";
        const TREE_LINE = "rgb(71, 82, 104)";
        const STARS = "rgba(255, 255, 255, 0.2)";

        const LEFT_HILL: Points = [
            [0, -this.height * 0.3 ],
            [this.width * 0.6, this.height * 0.3 ],
        ];

        const RIGHT_HILL: Points = [
            [0, -this.height * 0.2],
            [-this.width * 0.6, this.height * 0.2 ],
        ];

        const MOUNTAIN_SHADOW: Points = [
            [-this.width * 0.5, this.height * 0.55],
            [this.width, 0],
            [-this.width * 0.5, -this.height * 0.55 ],
        ];

        const MOUNTAIN_HIGHLIGHT: Points = [
            [this.width * 0.5, this.height * 0.55],
            [-this.width * 0.5, 0],
            [-this.width * 0.1, - this.height * 0.15],
            [this.width * 0.1, this.height * 0.05],
            [-this.width * 0.1, - this.height * 0.2],
            [this.width * 0.1, this.height * 0.1],
            [-this.width * 0.05, - this.height * 0.1],
            [this.width * 0.1, this.height * 0.08],
            [this.width * 0.1, this.height * 0.05],
            [-this.width * 0.1, -this.height * 0.25],
            [this.width * 0.08, this.height * 0.1]
        ];

        const TREE_CONE_LEFT: Points = [
            [this.width * 0.07, this.height * 0.03],
            [-this.width * 0.035, -this.height * 0.25],
        ];
        const TREE_CONE_LEFT_SMALLER: Points = [
            [this.width * 0.05, this.height * 0.025],
            [-this.width * 0.025, -this.height * 0.2],
        ];

        const TREE_CONE_RIGHT: Points = [
            [this.width * 0.07, -this.height * 0.03],
            [-this.width * 0.035, -this.height * 0.25],
        ];
        const TREE_CONE_RIGHT_LARGER: Points = [
            [this.width * 0.08, -this.height * 0.025],
            [-this.width * 0.04, -this.height * 0.35],
        ];

        const CLOUDS: Points = [
            [this.width, 0],
            [0, this.height * 0.5],
            [-this.width, 0],
        ];

        const cloudGradient = this.ctx.createLinearGradient(
            this.width * 0.5, this.height,
            this.width * 0.5, this.height * 0.6);
        cloudGradient.addColorStop(0, "rgba(240,240,240,0.9");
        cloudGradient.addColorStop(0.2, "rgba(240,240,240,0.7");
        cloudGradient.addColorStop(0.8, "rgba(240,240,240,0.1");
        cloudGradient.addColorStop(1, "transparent");

        const GLOW: Points = [
            [this.width * 0.5, 0],
            [0, this.height * 0.7],
            [-this.width * 0.5, 0],
        ]

        const glowGradient = this.ctx.createLinearGradient(
            this.width, this.height,
            this.width * 0.95, this.height * 0.35);
        glowGradient.addColorStop(0, "rgb(246, 174, 156)");
        glowGradient.addColorStop(0.5, "rgb(160, 113, 133");
        glowGradient.addColorStop(1, "transparent");

        // eslint-disable-next-line
        function generateTreeLine(height: number, width: number): Points {
            const points: Points = [
                [0, height * 0.2],
                [-width * 0.5, 0],
            ];
            let absX = 0;
            let yDirection = 1;
            let x = 0;
            let y = 0;
            while(absX < width * 0.5) {
                x = Math.random() * width * 0.01;
                yDirection *= -1;
                y = yDirection * height * 0.05 * Math.random();
                points.push([x, y]);
                absX += x;
            }

            return points;
        }

        a.reset(this.width * 0.5, this.height * 0.3)
        a.drawShape(GLOW, false, 0, 0, 0, undefined, glowGradient);

        // Mountain
        a.reset(this.width * 0.5, this.height * 0.45);
        a.drawShape(MOUNTAIN_SHADOW, false, 0, 0, 0, SHADOW, SHADOW);
        a.reset(this.width * 0.5, this.height * 0.45);
        a.drawShape(MOUNTAIN_HIGHLIGHT, false, 0, 0, 0, HIGHLIGHT, HIGHLIGHT);

        // Clouds
        a.reset(0, this.height * 0.5)
        a.drawShape(CLOUDS, false, 0, 0, 0, undefined, cloudGradient);

        // Trees back
        a.reset(this.width * 0.5, this.height * 0.96)
        a.drawShape(TREE_LINE_LEFT, false, 0, 0, 0, TREE_LINE, TREE_LINE);
        a.reset(this.width, this.height * 0.76)
        a.drawShape(TREE_LINE_RIGHT, false, 0, 0, 0, TREE_LINE, TREE_LINE);

        // Hills
        a.reset(0, this.height);
        a.drawShape(LEFT_HILL, false, 0, 0, 0, HILL_LEFT_FILL, HILL_LEFT_FILL)
        a.reset(this.width, this.height);
        a.drawShape(RIGHT_HILL, false, 0, 0, 0, HILL_RIGHT_FILL, HILL_RIGHT_FILL)

        // Trees left
        a.reset(-this.width * 0.01, this.height * 0.72);
        a.drawShape(TREE_CONE_LEFT, false, 0, 0, 0, TREE_FILL, TREE_FILL)
        a.reset(this.width * 0.04, this.height * 0.80);
        a.drawShape(TREE_CONE_LEFT, false, 0, 0, 0, TREE_FILL, TREE_FILL)
        a.reset(this.width * 0.14, this.height * 0.88);
        a.drawShape(TREE_CONE_LEFT_SMALLER, false, 0, 0, 0, TREE_FILL, TREE_FILL)

        // Trees right
        a.reset(this.width * 0.95, this.height * 0.9);
        a.drawShape(TREE_CONE_RIGHT, false, 0, 0, 0, TREE_FILL, TREE_FILL)
        a.reset(this.width * 0.86, this.height * 0.86);
        a.drawShape(TREE_CONE_RIGHT, false, 0, 0, 0, TREE_FILL, TREE_FILL)
        a.reset(this.width * 0.76, this.height * 0.95);
        a.drawShape(TREE_CONE_RIGHT_LARGER, false, 0, 0, 0, TREE_FILL, TREE_FILL)

        function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, stroke: string) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y);
            ctx.strokeStyle = stroke;
            ctx.lineWidth = 4;
            ctx.stroke();
            ctx.closePath();
        }

        drawStar(this.ctx, this.width * 0.1, this.height * 0.15, STARS);
        drawStar(this.ctx, this.width * 0.23, this.height * 0.34, STARS);
        drawStar(this.ctx, this.width * 0.37, this.height * 0.17, STARS);
        drawStar(this.ctx, this.width * 0.66, this.height * 0.05, STARS);
        drawStar(this.ctx, this.width * 0.13, this.height * 0.4, STARS);
        drawStar(this.ctx, this.width * 0.72, this.height * 0.53, STARS);
        drawStar(this.ctx, this.width * 0.81, this.height * 0.47, STARS);
        drawStar(this.ctx, this.width * 0.92, this.height * 0.07, STARS);

        // Moon
        const radius = this.width * 0.04;
        const circle1 = [this.width * 0.5, this.height * 0.15];
        const circle2 = [circle1[0] - (radius / 3), circle1[1] - (radius / 3)];

        this.ctx.fillStyle = "white";
        this.ctx.beginPath();
        this.ctx.arc(circle1[0], circle1[1], radius, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.beginPath();
        this.ctx.arc(circle2[0], circle2[1], radius, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.globalCompositeOperation = 'source-over';

    }

    xIntersect = 0.1875;
    yIntersect = 0.79375;
    intersection: number[] = []
    adj: number = 0
    opp: number = 0
    indicatorRadius: number = 0
    indicatorX: number = 0
    indicatorY: number = 0

    setAnimationSceneValues(percentage: number)
    {

        this.anCtx.clearRect(
            this.indicatorX - this.indicatorRadius, this.indicatorY - this.indicatorRadius,
            this.indicatorX, this.indicatorY
        )

        this.progressPercentage = percentage
        this.xIntersect = 0.1875;
        this.yIntersect = 0.79375;
        this.intersection = [this.xIntersect * this.width, this.yIntersect * this.height];
        this.adj = this.width * (0.5 - this.xIntersect);
        this.opp = this.height * (0.55 - (1 - this.yIntersect));

        this.indicatorRadius = this.width * 0.05;
        this.indicatorX = (this.adj * this.progressPercentage) + this.intersection[0];
        this.indicatorY = this.intersection[1] - (this.opp * this.progressPercentage);

        const indicatorGradient = this.anCtx.createRadialGradient(
            this.indicatorX, this.indicatorY, this.indicatorRadius * 0.2,
            this.indicatorX, this.indicatorY, this.indicatorRadius * 0.9)
        indicatorGradient.addColorStop(0, "rgb(240, 150, 80)");
        indicatorGradient.addColorStop(0.4, "rgba(240, 150, 80, 0.3)");
        indicatorGradient.addColorStop(1, "transparent");

        drawCircle(this.anCtx, this.indicatorX, this.indicatorY, this.indicatorRadius, undefined, indicatorGradient);
    }

    counter = 0;
    degrees = 0;
    rad = 0;
    chance = 0;
    clamp = 50;

    animate() {
        this.counter++;
        if (this.counter % 2 === 0) {
            this.degrees = (this.degrees + 1) % (180 - this.clamp);
            this.degrees = Math.max(this.clamp, this.degrees);
            if (this.degrees === 110) {
                this.chance = Math.random();
                if (this.chance > 0.4) {
                    this.degrees = 70
                }
            }
            this.rad = this.degrees * Math.PI / 180;

            // these get set externally thus fixed in the func context
            const indicatorX = this.indicatorX
            const indicatorY = this.indicatorY
            const indicatorRadius = this.indicatorRadius

            this.anCtx.clearRect(
                indicatorX - indicatorRadius, indicatorY - indicatorRadius,
                indicatorX, indicatorY
            )
            this.anCtx.beginPath();

            const indicatorGradient = this.anCtx.createRadialGradient(
                indicatorX, indicatorY, indicatorRadius * 0.2,
                indicatorX, indicatorY, indicatorRadius * Math.sin(this.rad));
            indicatorGradient.addColorStop(0, "rgb(240, 150, 80)");
            indicatorGradient.addColorStop(0.3, "rgba(240, 150, 80, 0.3)");
            indicatorGradient.addColorStop(1, "transparent");

            drawCircle(this.anCtx, indicatorX, indicatorY, indicatorRadius, undefined, indicatorGradient);
            this.anCtx.closePath();
        }
    }

}


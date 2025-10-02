---
title: Mountain Scene - Canvas
description: A canvas scene used to track my running progress
date: 01/01/2023
projectId: programming
published: true
technologies: [Typescript, HTML]
---

<script>
    import MountainCanvas from "../lib/components/MountainCanvas.svelte";
</script>


<MountainCanvas progress={0.5}/>

```ts
import { Artist } from "../Artist";
import { drawCircle } from "./canvasUtils";
import { TREE_LINE_LEFT, TREE_LINE_RIGHT } from "./data/mountainSceneData";

export function mountainScene(ctx: CanvasRenderingContext2D, anCtx: CanvasRenderingContext2D, width: number, height: number, percentage: number) {

    const a = new Artist(ctx, 0, 0);
    const SHADOW = "#715a74";
    const HIGHLIGHT = "#ce8eaa";
    const HILL_LEFT_FILL = "rgb(65, 63, 85)";
    const HILL_RIGHT_FILL = "rgb(74, 75, 96)";
    const TREE_FILL = "rgb(47, 48, 69)";
    const TREE_LINE = "rgb(71, 82, 104)";
    const STARS = "rgba(255, 255, 255, 0.2)";

    const LEFT_HILL: Points = [
        [0, -height * 0.3 ],
        [width * 0.6, height * 0.3 ],
    ];

    // intersection of height*0.3 - width * 0.6,
    // widht * 0.5 and height * 0.55
    // y = mx + c
    // mountain equation: y = (height * 0.55 / width * 0.5)x
    // hill equation: y = -(height*0.3 / width * 0.6)x + height * 0.3



    const RIGHT_HILL: Points = [
        [0, -height * 0.2],
        [-width * 0.6, height * 0.2 ],
    ];

    const MOUNTAIN_SHADOW: Points = [
        [-width * 0.5, height * 0.55],
        [width, 0],
        [-width * 0.5, -height * 0.55 ],
    ];

    const MOUNTAIN_HIGHLIGHT: Points = [
        [width * 0.5, height * 0.55],
        [-width * 0.5, 0],
        [-width * 0.1, - height * 0.15],
        [width * 0.1, height * 0.05],
        [-width * 0.1, - height * 0.2],
        [width * 0.1, height * 0.1],
        [-width * 0.05, - height * 0.1],
        [width * 0.1, height * 0.08],
        [width * 0.1, height * 0.05],
        [-width * 0.1, -height * 0.25],
        [width * 0.08, height * 0.1]
    ];

    const TREE_CONE_LEFT: Points = [
        [width * 0.07, height * 0.03],
        [-width * 0.035, -height * 0.25],
    ];
    const TREE_CONE_LEFT_SMALLER: Points = [
        [width * 0.05, height * 0.025],
        [-width * 0.025, -height * 0.2],
    ];

    const TREE_CONE_RIGHT: Points = [
        [width * 0.07, -height * 0.03],
        [-width * 0.035, -height * 0.25],
    ];
    const TREE_CONE_RIGHT_LARGER: Points = [
        [width * 0.08, -height * 0.025],
        [-width * 0.04, -height * 0.35],
    ];

    const CLOUDS: Points = [
        [width, 0],
        [0, height * 0.5],
        [-width, 0],
    ];

    const cloudGradient = ctx.createLinearGradient(
        width * 0.5, height,
        width * 0.5, height * 0.6);
    cloudGradient.addColorStop(0, "rgba(240,240,240,0.9");
    cloudGradient.addColorStop(0.2, "rgba(240,240,240,0.7");
    cloudGradient.addColorStop(0.8, "rgba(240,240,240,0.1");
    cloudGradient.addColorStop(1, "transparent");

    const GLOW: Points = [
        [width * 0.5, 0],
        [0, height * 0.7],
        [-width * 0.5, 0],
    ]

    const glowGradient = ctx.createLinearGradient(
        width, height,
        width * 0.95, height * 0.35);
    glowGradient.addColorStop(0, "rgb(246, 174, 156)");
    glowGradient.addColorStop(0.5, "rgb(160, 113, 133");
    glowGradient.addColorStop(1, "transparent");

    // eslint-disable-next-line
    function generateTreeLine(): Points {
        const points: Points = [
            // [-width * 0.5, -height* 0.2]
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

    a.reset(width * 0.5, height * 0.3)
    a.drawShape(GLOW, false, 0, 0, 0, undefined, glowGradient);

    // Mountain
    a.reset(width * 0.5, height * 0.45);
    a.drawShape(MOUNTAIN_SHADOW, false, 0, 0, 0, SHADOW, SHADOW);
    a.reset(width * 0.5, height * 0.45);
    a.drawShape(MOUNTAIN_HIGHLIGHT, false, 0, 0, 0, HIGHLIGHT, HIGHLIGHT);

    // Clouds
    a.reset(0, height * 0.5)
    a.drawShape(CLOUDS, false, 0, 0, 0, undefined, cloudGradient);

    // Trees back
    a.reset(width * 0.5, height * 0.96)
    a.drawShape(TREE_LINE_LEFT, false, 0, 0, 0, TREE_LINE, TREE_LINE);
    a.reset(width, height * 0.76)
    a.drawShape(TREE_LINE_RIGHT, false, 0, 0, 0, TREE_LINE, TREE_LINE);

    // Hills
    a.reset(0, height);
    a.drawShape(LEFT_HILL, false, 0, 0, 0, HILL_LEFT_FILL, HILL_LEFT_FILL)
    a.reset(width, height);
    a.drawShape(RIGHT_HILL, false, 0, 0, 0, HILL_RIGHT_FILL, HILL_RIGHT_FILL)

    // Trees left
    a.reset(-width * 0.01, height * 0.72);
    a.drawShape(TREE_CONE_LEFT, false, 0, 0, 0, TREE_FILL, TREE_FILL)
    a.reset(width * 0.04, height * 0.80);
    a.drawShape(TREE_CONE_LEFT, false, 0, 0, 0, TREE_FILL, TREE_FILL)
    a.reset(width * 0.14, height * 0.88);
    a.drawShape(TREE_CONE_LEFT_SMALLER, false, 0, 0, 0, TREE_FILL, TREE_FILL)

    // Trees right
    a.reset(width * 0.95, height * 0.9);
    a.drawShape(TREE_CONE_RIGHT, false, 0, 0, 0, TREE_FILL, TREE_FILL)
    a.reset(width * 0.86, height * 0.86);
    a.drawShape(TREE_CONE_RIGHT, false, 0, 0, 0, TREE_FILL, TREE_FILL)
    a.reset(width * 0.76, height * 0.95);
    a.drawShape(TREE_CONE_RIGHT_LARGER, false, 0, 0, 0, TREE_FILL, TREE_FILL)

    function drawStar(x: number, y: number, stroke: string) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y);
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.closePath();
    }

    drawStar(width * 0.1, height * 0.15, STARS);
    drawStar(width * 0.23, height * 0.34, STARS);
    drawStar(width * 0.37, height * 0.17, STARS);
    drawStar(width * 0.66, height * 0.05, STARS);
    drawStar(width * 0.13, height * 0.4, STARS);
    drawStar(width * 0.72, height * 0.53, STARS);
    drawStar(width * 0.81, height * 0.47, STARS);
    drawStar(width * 0.92, height * 0.07, STARS);

    // Moon
    const radius = width * 0.04;
    const circle1 = [width * 0.5, height * 0.15];
    const circle2 = [circle1[0] - (radius / 3), circle1[1] - (radius / 3)];

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(circle1[0], circle1[1], radius, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(circle2[0], circle2[1], radius, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();

    ctx.globalCompositeOperation = 'source-over';

    const xIntersect = 0.1875;
    const yIntersect = 0.79375;
    const intersection = [xIntersect * width, yIntersect * height];
    const adj = width * (0.5 - xIntersect);
    const opp = height * (0.55 - (1 - yIntersect));

    const indicatorRadius = width * 0.05;
    const indicatorX = (adj * percentage) + intersection[0];
    const indicatorY = intersection[1] - (opp * percentage);

    let indicatorGradient = anCtx.createRadialGradient(
        indicatorX, indicatorY, indicatorRadius * 0.2,
        indicatorX, indicatorY, indicatorRadius * 0.9)
    indicatorGradient.addColorStop(0, "rgb(240, 150, 80)");
    indicatorGradient.addColorStop(0.4, "rgba(240, 150, 80, 0.3)");
    indicatorGradient.addColorStop(1, "transparent");

    anCtx.beginPath();
    drawCircle(anCtx, indicatorX, indicatorY, indicatorRadius, undefined, indicatorGradient);

    let counter = 0;
    let degrees = 0;
    let rad = 0;
    let chance;
    const clamp = 50;
    function animate() {
        counter++;
        if (counter % 2 === 0) {
            degrees = (degrees + 1) % (180 - clamp);
            degrees = Math.max(clamp, degrees);
            if (degrees === 110) {
                chance = Math.random();
                if (chance > 0.4) {
                    degrees = 70
                }
            }
            rad = degrees * Math.PI / 180;
            anCtx.clearRect(
                indicatorX - indicatorRadius, indicatorY - indicatorRadius,
                indicatorX, indicatorY
            )
            indicatorGradient = ctx.createRadialGradient(
                indicatorX, indicatorY, indicatorRadius * 0.2,
                indicatorX, indicatorY, indicatorRadius * Math.sin(rad));
            indicatorGradient.addColorStop(0, "rgb(240, 150, 80)");
            indicatorGradient.addColorStop(0.3, "rgba(240, 150, 80, 0.3)");
            indicatorGradient.addColorStop(1, "transparent");
            drawCircle(anCtx, indicatorX, indicatorY, indicatorRadius, undefined, indicatorGradient);
        }
        requestAnimationFrame(animate);
    }

    animate();
}


```

import { Artist } from "../Artist";
import { drawCircle } from "./canvasUtils";

export function mountainScene(ctx: CanvasRenderingContext2D, width: number, height: number, percentage: number) {

    const a = new Artist(ctx, 0, 0);
    const SHADOW = "#715a74";
    const HIGHLIGHT = "#ce8eaa";
    const HILL_LEFT_FILL = "rgb(65, 63, 85)";
    const HILL_RIGHT_FILL = "rgb(74, 75, 96)";
    const TREE_FILL = "rgb(47, 48, 69)";


    const LEFT_HILL: Points = [
        [0, -height * 0.3 ],
        [width * 0.6, height * 0.3 ],
    ];

    const RIGHT_HILL: Points = [
        [0, -height * 0.2],
        [-width * 0.6, height * 0.2 ],
    ];

    const MOUNTAIN_SHADOW: Points = [
        [-width * 0.5, height * 0.55],
        [width, 0],
        [-width * 0.5, -height * 0.55 ],
    ]

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
    ]

    const TREE_CONE_LEFT: Points = [
        [width * 0.07, height * 0.03],
        [-width * 0.035, -height * 0.25],
    ]
    const TREE_CONE_LEFT_SMALLER: Points = [
        [width * 0.05, height * 0.025],
        [-width * 0.025, -height * 0.2],
    ]

    const TREE_CONE_RIGHT: Points = [
        [width * 0.07, -height * 0.03],
        [-width * 0.035, -height * 0.25],
    ]
    const TREE_CONE_RIGHT_LARGER: Points = [
        [width * 0.08, -height * 0.025],
        [-width * 0.04, -height * 0.35],
    ]

    function generateTreeLine(): Points {
        const points: Points = [
            [0, -height * 0.1]
        ];
        let x = 0;
        let y = height * 0.15;
        while(x < width) {
            x += (Math.random() * width * 0.001);
            y *= -1;
            y += (Math.random() * height * 0.001);
            points.push([x, y]);
        }

        points.push([0, height * 0.1])
        return points;
    }

    // Mountain
    a.reset(width * 0.5, height * 0.45);
    a.drawShape(MOUNTAIN_SHADOW, false, 0, 0, 0, SHADOW, SHADOW);
    a.reset(width * 0.5, height * 0.45);
    a.drawShape(MOUNTAIN_HIGHLIGHT, false, 0, 0, 0, HIGHLIGHT, HIGHLIGHT);

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

    // Trees back
    a.reset(0, height * 0.7);
    a.drawShape(generateTreeLine(), false, 0, 0, 0, "pink", "pink");


    // Moon
    // drawCircle(ctx, width * 0.5, height * 0.15, width * 0.04, "", "rgb(190, 190, 210)")
    // drawCircle(ctx, width * 0.48, height * 0.14, width * 0.04, "", "rgb(38, 42, 71)")

    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.15, width * 0.04, 1.7 * Math.PI, 0.8 * Math.PI);
    // ctx.fillStyle = "white";
    // ctx.fill();
    ctx.fillStyle = "white";
    ctx.fill();

    const adj = width * 0.5;
    const opp = height * 0.55;

    drawCircle(ctx, adj * percentage, opp, 10, "", "orange");
}

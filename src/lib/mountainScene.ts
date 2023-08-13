import { Artist } from "../Artist";
import { drawCircle } from "./canvasUtils";

export function mountainScene(ctx: CanvasRenderingContext2D, width: number, height: number, percentage: number) {

    const a = new Artist(ctx, 0, 0);
    const SHADOW = "#715a74";
    const HIGHLIGHT = "#ce8eaa";

    const LEFT_HILL: Points = [
        [0, -height / 2],
        [width / 1.6, height / 2 ],
        [0, height / 2]
    ];

    const RIGHT_HILL: Points = [
        [0, -height / 2],
        [-width / 1.7, height / 2 ],
    ];

    const MOUNTAIN_SHADOW: Points = [
        [-width * 0.5, (height * 0.5) + 30],
        [width, 0],
        [-width * 0.5, (-height * 0.5) -30 ],
    ]

    const MOUNTAIN_HIGHLIGHT: Points = [
        [width * 0.5, (height * 0.5) + 30],
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

    a.reset(width/2, height/2 - 30);
    a.drawShape(MOUNTAIN_SHADOW, false, 0, 0, 0, SHADOW, SHADOW);
    a.reset(width/2, height/2 - 30);
    a.drawShape(MOUNTAIN_HIGHLIGHT, false, 0, 0, 0, HIGHLIGHT, HIGHLIGHT);

    drawCircle(ctx, width * 0.5, height * 0.15, width * 0.04, "", "rgb(190, 190, 210)")
    drawCircle(ctx, width * 0.48, height * 0.14, width * 0.04, "", "rgb(38, 42, 71)")

}

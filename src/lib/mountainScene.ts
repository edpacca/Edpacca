import { Artist } from "../Artist";
import { drawCircle } from "./canvasUtils";

export function mountainScene(ctx: CanvasRenderingContext2D, width: number, height: number, percentage: number) {

    const a = new Artist(ctx, 0, 0);

    const LEFT_HILL: Points = [
        [0, -height / 2],
        [width / 1.6, height / 2 ],
        [0, height / 2]
    ];

    const RIGHT_HILL: Points = [
        [0, -height / 2],
        [-width / 1.7, height / 2 ],
    ];

    const MOUNTAIN: Points = [
        [-width / 2, height / 2],
        [width, 0],
        [-width / 2, -height / 2],
    ]

    const RIGHT_MOUNTAIN: Points = [
        [-width / 4, height / 2],
        [width / 2, 0],
    ]

    a.reset(width/2, height/2 - 30);
    a.drawShape(MOUNTAIN, false, 0, 0, 0, "green", "green");
    a.reset(width/3, 2*height/3);
    a.drawShape(RIGHT_MOUNTAIN, false, 0, 0, 0, "lime", "lime");
    a.reset(2 * width / 3, 2*height/3);
    a.drawShape(RIGHT_MOUNTAIN, false, 0, 0, 0, "lime", "lime");
    a.reset(0, height);
    a.drawShape(LEFT_HILL, false, 0, 0, 0, "blue", "blue");
    a.reset(width, height);
    a.drawShape(RIGHT_HILL, false, 0, 0, 0, "red", "red");

    drawCircle(ctx, width / 2, height / 7, width / 25, "", "orange")

}

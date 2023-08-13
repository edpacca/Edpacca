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


    ]

    const MOUNTAIN_2: Points = [
        [-width / 4, height / 2],
        [width / 2, 0],
    ]
    
    const MOUNTAIN_3: Points = [
        [-width / 4, height / 2],
        [width / 2, 0],
    ]
    
    const MOUNTAIN_4: Points = [
        [width * 0.4, height / 2],
        [-width * 0.8, 0]
    ]

    a.reset(width/2, height/2 - 30);
    a.drawShape(MOUNTAIN_SHADOW, false, 0, 0, 0, SHADOW, SHADOW);
    a.reset(width/2, height/2 - 30);
    a.drawShape(MOUNTAIN_HIGHLIGHT, false, 0, 0, 0, HIGHLIGHT, HIGHLIGHT);
    // a.reset(width/3, 2*height/3 - 30);
    // a.drawShape(MOUNTAIN_2, false, 0, 0, 0, "#715a74", "#715a74");
    // a.reset(width/7, 2*height/3 + 30);
    // a.drawShape(MOUNTAIN_3, false, 0, 0, 0, "#715a74", "#715a74");
    // a.reset(width * 0.7, height / 2 + 40)
    // a.drawShape(MOUNTAIN_4, false, 0, 0, 0, "#715a74", "#715a74");
    
    // a.reset(0, height);
    // a.drawShape(LEFT_HILL, false, 0, 0, 0, "blue", "blue");
    // a.reset(width, height);
    // a.drawShape(RIGHT_HILL, false, 0, 0, 0, "red", "red");

    drawCircle(ctx, width / 2, height / 7, width / 25, "", "orange")

}

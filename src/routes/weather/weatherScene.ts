import { drawCircle } from "$lib/canvasUtils";
import { randBetween, randIntBetween, randVariance } from "$lib/utils";


// https://github.com/PavlyukVadim/amadev/blob/master/RecursiveTree/script.js
export function drawTree(context: CanvasRenderingContext2D,
    startX: number,
    startY: number,
    length: number,
    angle: number,
    depth: number,
    branchWidth: number) {

    let newLength, newAngle;
    const rand = Math.random;
    const maxAngle = 2 * Math.PI / 6;
    const maxBranch = 3;
    const endX = startX + length * Math.cos(angle);
    const endY = startY + length * Math.sin(angle);

    context.beginPath();
    context.moveTo(startX, startY);
    context.lineCap = 'round';
    context.lineWidth = branchWidth;
    context.lineTo(endX, endY);

    if (depth <= 2) {
      context.strokeStyle = `rgb(30, ${(((rand() * 64) + 128) >> 0)}, 0)`;
    }
    else {
      context.strokeStyle = `rgb(30, ${(((rand() * 64) + 64) >> 0)}, 20)`;
    }

    context.stroke();
    const newDepth = depth - 1;

    if(!newDepth) {
      return;
    }
    const subBranches = (rand() * (maxBranch - 1)) + 1;
    branchWidth *= 0.7;

    for (let i = 0; i < subBranches; i++) {
        newAngle = angle + rand() * maxAngle - maxAngle * 0.5;
        newLength = length * (0.7 + rand() * 0.3);
        drawTree(context, endX, endY, newLength, newAngle, newDepth, branchWidth);
    }

}

// export function drawClouds(context: CanvasRenderingContext2D, direction: number, density: number) {

// }

export function drawCloud(context: CanvasRenderingContext2D, x: number, y: number, size: number) {
  const sizeVarFactor = 0.8;
  const rowVarFactor = 0.9;
  // get random size between 0.75 and 1.5 x provided size
  const numberOfRows = randIntBetween(3, 6);

  let rowLength = 4;
  let newSize = size;
  let newPosX;
  let newPosY;
  const cloudColour = "rgba(255, 255, 255, 0.8)";
  for (let cy = 0; cy <= numberOfRows * size * 3; cy += size * 3) {
    rowLength = randIntBetween(2, 12);
    for (let cx = 0; cx <= rowLength * size * 3; cx += size * 3) {
      // const offset = newSize * 3;
      newSize = randVariance(size, 0.3);
      newPosX = cx + x;
      newPosY = cy + y
      drawCircle(context, newPosX, newPosY, newSize, undefined, cloudColour)
    }
  }
}

export function curve(context:CanvasRenderingContext2D, x1: number, y: number, size: number) {

  // let yValues = [];

  // const values = [1, 3, 4, 5, 4, 3, 1];
  // const length = yValues.length
  for (let x = 0; x < 22; x++) {
    const xpos = x + x1
    const ypos = y + (x - 10) * (x - 10)

    drawCircle(context, xpos * 10, ypos, size, undefined, "yellow");
  }
}

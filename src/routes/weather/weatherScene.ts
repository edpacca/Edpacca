import { drawCircle } from "$lib/canvas/canvasUtils";

export function drawOrbit(
    context: CanvasRenderingContext2D,
    time: Date,
    orbitCenX: number,
    orbitCenY: number,
    orbitRadius: number,
    orbitBodyRadius: number) {

        // ctx.beginPath();
        // ctx.arc(
        //     orbitCentreX,
        //     orbitCentreY,
        //     orbitRadius,
        //     Math.PI, Math.PI * 2, false);
        // ctx.stroke();
        const hours = time.getHours();
        const moduloTime = hours + 6 % 24;
        const orbitAngle = Math.PI - (((2 * Math.PI / 24) * moduloTime) % Math.PI) - (Math.PI / 2);
        const orbitLenX = Math.sin(orbitAngle) * orbitRadius;
        const orbitLenY = Math.cos(orbitAngle) * orbitRadius;
        const orbitPosX = orbitCenX - orbitLenX;
        const orbitPosY = orbitCenY - orbitLenY;

        // sun or moon
        let radialGradient;
        if (hours >= 6 && hours < 18) {
          radialGradient = getSunRadialGradient(context, orbitPosX, orbitPosY, orbitBodyRadius);
        } else {
          radialGradient = getMoonRadialGradient(context, orbitPosX, orbitPosY, orbitBodyRadius);
        }
        context.fillStyle = radialGradient;
        context.arc(
            orbitPosX,
            orbitPosY,
            orbitBodyRadius,
            0, 2*Math.PI, false
        );
        context.fill();

        // context.fillRect(orbitPositionX, orbitPositionY, orbitBodyRadius * 2, orbitBodyRadius * 2);
}

function getSunRadialGradient(context: CanvasRenderingContext2D, x: number, y: number, r: number) {
  const radialGradient = context.createRadialGradient(x, y, r * 0.8, x, y, r);
  radialGradient.addColorStop(0, 'rgba(255, 240, 210, 1)');
  radialGradient.addColorStop(1,'rgba(255, 255, 0, 0)');
  return radialGradient;
}

function getMoonRadialGradient(context: CanvasRenderingContext2D, x: number, y: number, r: number) {
  const radialGradient = context.createRadialGradient(x, y, (r * 0.5), x, y, r * 0.8);
  radialGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  radialGradient.addColorStop(1,'rgba(50, 50, 50, 0)');
  return radialGradient;
}

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
  const sizeVariance = size * sizeVarFactor;
  // get random size between 0.75 and 1.5 x provided size
  const getBlobSize = () => Math.floor((Math.random() * sizeVariance) + sizeVariance);
  const getRowLength = (middle: number) => Math.floor((Math.random() * middle * rowVarFactor) + (middle * rowVarFactor))
  const numberOfRows = Math.floor((Math.random() * 3) + 3);

  let rowLength = 4;
  let newSize = size;
  let newPosX;
  let newPosY;
  const cloudColour = "rgba(255, 255, 255, 0.8)";
  for (let cy = 0; cy <= numberOfRows * size; cy += size) {
    rowLength = getRowLength(rowLength);
    for (let cx = 0; cx <= rowLength * size; cx += size) {
      const offset = (Math.random() * newSize * 2) + newSize;
      newSize = getBlobSize();
      newPosX = cx + x + offset
      newPosY = cy + y
      drawCircle(context, newPosX, newPosY, newSize, undefined, cloudColour)
    }
  }
}

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
    let rand = Math.random;

    let newLength, 
    newAngle, 
    newDepth, 
    maxBranch = 3,
    endX, endY, 
    maxAngle = 2 * Math.PI / 6, 
    subBranches;
  
    context.beginPath();
    context.moveTo(startX, startY);
    endX = startX + length * Math.cos(angle);
    endY = startY + length * Math.sin(angle);
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
    newDepth = depth - 1;
  
    if(!newDepth) {
      return;
    }
    subBranches = (rand() * (maxBranch - 1)) + 1;
    branchWidth *= 0.7;
  
    for (let i = 0; i < subBranches; i++) {
        newAngle = angle + rand() * maxAngle - maxAngle * 0.5;
        newLength = length * (0.7 + rand() * 0.3);
        drawTree(context, endX, endY, newLength, newAngle, newDepth, branchWidth);
    }
  
}

export function drawClouds(context: CanvasRenderingContext2D, direction: number, density: number) {

}

export function drawCloud(context: CanvasRenderingContext2D, x: number, y: number, size: number) {
  
  const sizeVarFactor = 0.8;
  const rowVarFactor = 0.9;
  const sizeVariance = size * sizeVarFactor;
  // get random size between 0.75 and 1.5 x provided size
  const getBlobSize = () => Math.floor((Math.random() * sizeVariance) + sizeVariance);
  const getRowLength = (middle: number) => Math.floor((Math.random() * middle * rowVarFactor) + (middle * rowVarFactor))
  const numberOfRows = Math.floor((Math.random() * 3) + 3);
  
  console.log(numberOfRows);

  let lastPosX = x;
  let lastPosY = y;
  let lastSize = size;
  let lastRowLength = 4;
  let newPosX;
  let newPosY;
  let newSize;

  for (let cy = 0; cy <= numberOfRows * size; cy += size) {
    lastRowLength = getRowLength(lastRowLength);
    console.log(lastRowLength);
    for (let cx = 0; cx <= lastRowLength * size; cx += size) {
      const offset = (Math.random() * lastSize * 2) + lastSize;
      lastSize = getBlobSize();
      newPosX = cx + x + offset
      newPosY = cy + y
      drawCircle(context, newPosX, newPosY, lastSize)
    }    
  }



  



}

function drawCircle(context: CanvasRenderingContext2D, x: number, y: number, size: number) {
  // console.log(`x: ${x.toFixed(0)}, y: ${y.toFixed(0)}, size: ${size}`)
  context.beginPath();
  context.arc(x, y, size, 0, Math.PI *2, false);
  // context.strokeStyle = "red";
  // context.stroke();
  context.fillStyle = "rgba(255, 255, 255, 0.8)"
  context.fill();
  context.closePath();
}
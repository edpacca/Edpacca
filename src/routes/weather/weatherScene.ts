export function createTree(context: CanvasRenderingContext2D, positionX: number, positionY: number, ) {

}

export function setupOrbit(
    context: CanvasRenderingContext2D,
    time: Date,
    orbitCentreX: number,
    orbitCentreY: number,
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
        const orbitAngle = (((2 * Math.PI / 24) * moduloTime) % Math.PI) - (Math.PI / 2);
        const orbitLenX = Math.sin(orbitAngle) * orbitRadius;
        const orbitLenY = Math.cos(orbitAngle) * orbitRadius;
        const orbitPositionX = orbitCentreX - orbitLenX;
        const orbitPositionY = orbitCentreY - orbitLenY;

        // sun or moon
        context.beginPath();
        context.arc(
            orbitPositionX, 
            orbitPositionY,
            orbitBodyRadius,
            0, 2*Math.PI, false
        );
        context.fillStyle = hours >= 6 && hours < 18 ? "orange" : "grey";
        context.fill();
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
      context.strokeStyle = `rgb(0, ${(((rand() * 64) + 128) >> 0)}, 0)`;
    }
    else {
      context.strokeStyle = `rgb(0, ${(((rand() * 64) + 64) >> 0)}, 20)`;
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
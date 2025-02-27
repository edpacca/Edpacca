import { randRangeRGBString } from "$lib/utils";

// inspired by
// https://github.com/PavlyukVadim/amadev/blob/master/RecursiveTree/script.js
export function drawTree(
	context: CanvasRenderingContext2D,
	startX: number,
	startY: number,
	length: number,
	angle: number,
	depth: number,
	branchWidth: number,
) {
	let newLength, newAngle;
	const rand = Math.random;
	const maxAngle = (2 * Math.PI) / 6;
	const maxBranch = 3;
	const endX = startX + length * Math.cos(angle);
	const endY = startY + length * Math.sin(angle);

	context.beginPath();
	context.moveTo(startX, startY);
	context.lineCap = "round";
	context.lineWidth = branchWidth;
	context.lineTo(endX, endY);

	if (depth <= 4) {
		context.strokeStyle = randRangeRGBString(30, [64, 180], 0);
	} else {
		context.strokeStyle = randRangeRGBString([70, 80], 60, [30, 50]);
	}

	context.stroke();
	const newDepth = depth - 1;

	if (!newDepth) {
		return;
	}
	const subBranches = rand() * (maxBranch - 1) + 1;
	branchWidth *= 0.7;

	for (let i = 0; i < subBranches; i++) {
		newAngle = angle + rand() * maxAngle - maxAngle * 0.5;
		newLength = length * (0.7 + rand() * 0.3);
		drawTree(context, endX, endY, newLength, newAngle, newDepth, branchWidth);
	}
}

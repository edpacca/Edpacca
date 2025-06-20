import { Artist } from "../../Artist";

const AMBER = "rgb(245, 167, 66)";
// const DARK_ORANGE = "rgb(200, 100, 100)";
const WHITE = "white";
const BLACK = "black";
// const GREY = "rgb(50, 50, 50)";
const ORANGE_BROWN = "rgb(220, 150, 110)";
const SHADOW_BROWN = "rgb(120, 80, 20)";
const DARK_SHADOW_BROWN = "rgb(71, 50, 44)";
const DARK_GREY = "rgb(50, 50, 50)";
const PINK = "rgb(220, 100, 150)";
const DARK_PINK = "rgb(150, 50, 100)";

export function drawCharacter(context: CanvasRenderingContext2D, x: number, y: number) {
	const a = new Artist(context, x, y);

	const HEAD_POINTS: Points = [
		// top
		[15, 0],
		// ear
		[15, -5],
		[20, 0],
		[10, 10],
		// side
		[5, 20],
		[0, 10],
		[-10, 40],
		[-25, 50],
		// chin
		[-10, 10],
		[-10, 5],
		[-10, 0],
	];

	const HEAD_PATCH_POINTS: Points = [
		[10, 0],
		[15, -3],
		[20, 0],
		[10, 35],
		[-20, -15],
		[-15, -8],
		[-20, 0],
	];

	const RIGHT_EAR_POINTS: Points = [
		// top arc
		[5, -6],
		[4, -2],
		[5, -3],
		[15, -5],
		// down right
		[35, 18],
		[2, 10],
		[-5, 20],
		// up left
		[-15, 30],
		[-5, 5],
		[-3, 0],
		[-10, -5],
		[-5, -10],
		[-5, -10],
		[5, -20],
		[-5, -20],
	];

	const LEFT_EAR_POINTS: Points = [
		// top arc
		[-5, -10],
		[-15, -5],
		[-12, 9],
		// down right
		[-20, 3],
		[-10, 5],
		[-5, 5],
		[15, 35],
		// up left
		[10, 20],
		[10, 5],
		[12, -20],
		[0, -25],
		[5, -10],
	];

	const NOSE: Points = [
		[5, 0],
		[6, 5],
		[2, 9],
		[-2, 4],
		[-4, 2],
		[-3, 0],
		[-3, -1],
	];

	const TONGUE: Points = [
		[10, 4],
		[3, -2],
		[-1, 10],
		[-4, 5],
		[-4, 3],
		[-4, 0],
	];

	a.drawShape(HEAD_POINTS, true, 0, 0, 2, ORANGE_BROWN, ORANGE_BROWN);

	a.reset(0, 10);
	context.beginPath();
	a.drawNextLine(0, 35);
	a.endX = a.startX + 20;
	a.endY = a.startY + 35;
	context.bezierCurveTo(a.startX, a.startY, a.startX, a.startY + 15, a.endX, a.endY);
	context.lineCap = "round";
	context.lineWidth = 4;
	context.strokeStyle = SHADOW_BROWN;
	context.stroke();
	context.closePath();
	a.reset(0, 45);
	context.beginPath();
	a.endX = a.startX - 20;
	a.endY = a.startY + 35;
	context.bezierCurveTo(a.startX, a.startY, a.startX, a.startY + 15, a.endX, a.endY);
	context.lineCap = "round";
	context.lineWidth = 4;
	context.strokeStyle = SHADOW_BROWN;
	context.stroke();
	context.closePath();

	a.reset(0, 3);
	a.drawShape(HEAD_PATCH_POINTS, true, 0, 3, 2, DARK_SHADOW_BROWN, DARK_SHADOW_BROWN);
	a.reset(25, -2);
	a.drawShape(RIGHT_EAR_POINTS, false, 0, 0, 2, SHADOW_BROWN, SHADOW_BROWN);
	a.reset(-25, 0);
	a.drawShape(LEFT_EAR_POINTS, false, 0, 0, 2, SHADOW_BROWN, SHADOW_BROWN);
	a.reset(0, 80);
	a.drawShape(NOSE, true, 0, 80, 2, DARK_GREY, DARK_GREY);
	drawEyes(context, x, y);
	a.reset(0, 108);
	a.drawShape(TONGUE, true, 0, 108, 2, DARK_PINK, PINK);
	a.reset(45, 80);
	drawFaceLines(context, a.startX, a.startY);
}

function drawFaceLines(context: CanvasRenderingContext2D, x: number, y: number) {
	context.beginPath();
	let startX = x;
	let startY = y;
	let endX = startX - 5;
	let endY = startY + 5;
	context.bezierCurveTo(startX, startY, startX - 3, startY - 3, endX, endY);

	startX = endX;
	startY = endY;
	endX = startX - 25;
	endY = startY + 25;
	context.bezierCurveTo(startX, startY, startX, startY + 10, endX, endY);

	startX = endX;
	startY = endY;
	endX = startX - 14;
	endY = startY - 5;
	context.bezierCurveTo(startX, startY, startX - 10, startY + 2, endX, endY);

	startX = endX;
	startY = endY;
	endX = startX - 14;
	endY = startY + 5;
	context.bezierCurveTo(startX, startY, startX - 4, startY + 7, endX, endY);

	startX = endX;
	startY = endY;
	endX = startX - 25;
	endY = startY - 25;
	context.bezierCurveTo(startX, startY, startX - 25, startY - 15, endX, endY);

	startX = endX;
	startY = endY;
	endX = startX - 5;
	endY = startY - 5;
	context.bezierCurveTo(startX, startY, startX - 2, startY - 7, endX, endY);

	context.lineCap = "round";
	context.lineWidth = 4;
	context.strokeStyle = SHADOW_BROWN;
	context.stroke();
	context.closePath();
}

function drawEyes(context: CanvasRenderingContext2D, x: number, y: number) {
	const eyeSize = 17;
	const eyePosX = 25;
	const eyeTopPosY = 50;
	const eyeBottomPosy = 34;

	// Right eye
	context.beginPath();
	context.arc(x + eyePosX, y + eyeTopPosY, eyeSize, Math.PI * 1.2, Math.PI * 1.9);
	context.fillStyle = DARK_GREY;
	context.fill();
	context.closePath();
	context.beginPath();
	context.arc(x + eyePosX + 2, y + eyeBottomPosy, eyeSize, Math.PI * 2.2, Math.PI * 0.9);
	context.fillStyle = DARK_GREY;
	context.fill();

	// Right pupil
	context.beginPath();
	context.arc(x + eyePosX + 2, y + eyeTopPosY - 10, 7, Math.PI * 2, Math.PI * 1.1);
	context.fillStyle = AMBER;
	context.fill();

	context.beginPath();
	context.arc(x + eyePosX + 2, y + eyeTopPosY - 8, 3, 0, Math.PI * 2);
	context.fillStyle = BLACK;
	context.fill();

	context.beginPath();
	context.arc(x + eyePosX + 1, y + eyeTopPosY - 9, 1, 0, Math.PI * 2);
	context.fillStyle = WHITE;
	context.fill();

	// Left eye
	context.beginPath();
	context.arc(x - eyePosX, y + eyeTopPosY, eyeSize, Math.PI * 1.1, Math.PI * 1.8);
	context.fillStyle = DARK_GREY;
	context.fill();
	context.closePath();
	context.beginPath();
	context.arc(x - eyePosX - 2, y + eyeBottomPosy, eyeSize, Math.PI * 2.1, Math.PI * 0.8);
	context.fillStyle = DARK_GREY;
	context.fill();

	// Left pupil
	context.beginPath();
	context.arc(x - eyePosX - 2, y + eyeTopPosY - 10, 7, Math.PI * 1.9, Math.PI * 1);
	context.fillStyle = AMBER;
	context.fill();

	context.beginPath();
	context.arc(x - eyePosX - 2, y + eyeTopPosY - 8, 3, 0, Math.PI * 2);
	context.fillStyle = BLACK;
	context.fill();

	context.beginPath();
	context.arc(x - eyePosX - 3, y + eyeTopPosY - 9, 1, 0, Math.PI * 2);
	context.fillStyle = WHITE;
	context.fill();
}

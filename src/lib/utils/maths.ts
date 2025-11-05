
export function randomMinMax(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomDirection(): 1 | -1 {
	return Math.random() >= 0.5 ? 1 : -1;
}

export function randBetween(min: number, max: number) {
	return Math.random() * (max - min) + min;
}

export function randIntBetween(min: number, max: number) {
	return Math.floor(randBetween(min - 1, max));
}

export function randVariance(value: number, variance: number) {
	const min = value * (1 - variance);
	const max = value * (1 + variance);
	return randBetween(min, max);
}

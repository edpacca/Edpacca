import { sineIn } from "svelte/easing";

type DateStyle = Intl.DateTimeFormatOptions["dateStyle"];

export function formatDate(date: string, dateStyle: DateStyle = "medium", locales = "en-gb"): string {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
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

export function dayOfYear(date: Date) {
	const diff = date.valueOf() - new Date(date.getFullYear(), 0, 0).valueOf();
	return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function randomMinMax(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomDirection(): 1 | -1 {
	return Math.random() >= 0.5 ? 1 : -1;
}

export function comparePinnedPosts(p1: Post, p2: Post) {
	return parsePinned(p2.pinned) - parsePinned(p1.pinned);
}

const parsePinned = (pinned: boolean | undefined) => Number(pinned ?? 0);

export const grow = (_node: HTMLElement) => {
	return {
		duration: 100,
		easing: sineIn,
		css: (t: number) => `transform: scaleX(${t}); transform-origin: left`,
	};
};

export const randRangeRGBString = (
	redRange: [number, number] | number = [0, 255],
	greenRange: [number, number] | number = [0, 255],
	blueRange: [number, number] | number = [0, 255],
) => {
	const getValue = (range: [number, number] | number) => {
		return Array.isArray(range) ? randBetween(range[0], range[1]) : range;
	};

	const red = getValue(redRange);
	const green = getValue(greenRange);
	const blue = getValue(blueRange);
	return `rgb(${red}, ${green}, ${blue})`;
};

export function timeNoun(time: Date): string {
	const hour = time.getHours();
	return hourNoun(hour);
}

export function hourNoun(hour: number): string {
	switch (hour) {
		case 6:
			return "dawn";
		case 7:
			return "sunrise";
		case 8:
			return "morning";
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
			return "day";
		case 19:
			return "evening";
		case 20:
			return "sunset";
		case 21:
			return "dusk";
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			return "night";
		default:
			return "day";
	}
}

export function timeAsTwelvethFraction(time: Date): number {
	return time.getHours() + (6 % 12);
}

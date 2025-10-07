import { sineIn } from 'svelte/easing';

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(
	date: string,
	dateStyle: DateStyle = 'medium',
	locales = 'en-gb'
): string {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
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
		css: (t: number) => `transform: scaleX(${t}); transform-origin: left`
	};
};

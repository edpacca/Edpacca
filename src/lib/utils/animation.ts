import { cubicOut } from 'svelte/easing';

export const grow = (_node: HTMLElement) => {
	return {
		duration: 150,
		easing: cubicOut,
		css: (t: number) => `transform: scaleX(${t}); transform-origin: left`
	};
};

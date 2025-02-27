<script lang="ts">
	import { onMount } from "svelte";
	import { timeNoun } from "$lib/utils";
	import type { Weather } from "$lib/data/weatherData";
	import { drawTree } from "$lib/canvas/weather/draw/tree";
	import { drawCharacter } from "$lib/canvas/weather/draw/character";
	import { Bluebody } from "$lib/canvas/weather/animate/Bluebody";
	import { WeatherSceneController } from "./WeatherSceneAnimator";
	export let time: Date;
	export let weather: Weather;
	export let windspeed: number;

	const backgroundStyle = timeNoun(time);

	let animationCanvas: HTMLCanvasElement;
	let staticCanvas: HTMLCanvasElement;
	let controller: WeatherSceneController;

	const CANVAS_HEIGHT = 920;
	const CANVAS_WIDTH = 1920;
	const TREE_DEPTH = 12;
	const TREE_BRANCH_THICKNESS = 50;

	$: controller?.setWeather(weather);
	$: controller?.setWindspeed(windspeed);

	onMount(() => {
		animationCanvas.width = CANVAS_WIDTH;
		staticCanvas.width = CANVAS_WIDTH;
		animationCanvas.height = CANVAS_HEIGHT;
		staticCanvas.height = CANVAS_HEIGHT;

		const orbitCentreX = CANVAS_WIDTH / 2;
		const orbitCentreY = CANVAS_HEIGHT / 2;
		const orbitRadius = CANVAS_HEIGHT / 2;
		const orbitBodyRadius = 100;

		const animCtx = animationCanvas.getContext("2d");
		const staticCtx = staticCanvas.getContext("2d");
		if (animCtx && staticCtx) {
			const bluebody = new Bluebody(staticCtx, time, orbitCentreX, orbitCentreY, orbitRadius, orbitBodyRadius);
			drawTree(staticCtx, 120, CANVAS_HEIGHT, 80, -Math.PI / 2, TREE_DEPTH, TREE_BRANCH_THICKNESS);
			drawTree(staticCtx, CANVAS_WIDTH - 400, CANVAS_HEIGHT, 60, -Math.PI / 2, TREE_DEPTH, TREE_BRANCH_THICKNESS);
			drawCharacter(staticCtx, CANVAS_WIDTH / 2, CANVAS_HEIGHT * 0.8);

			bluebody.draw();

			controller = new WeatherSceneController(animCtx, CANVAS_WIDTH, CANVAS_HEIGHT, windspeed, weather);

			const animate = () => {
				controller.animate();
				requestAnimationFrame(animate);
			};
			animate();
		}
	});
</script>

<div class="canvas-container">
	<canvas class={"static-canvas " + backgroundStyle} bind:this={staticCanvas}> </canvas>
	<canvas bind:this={animationCanvas} class="animation-canvas"> </canvas>
</div>

<svelte:head>
	<style>
		:root {
			--night: rgb(50, 30, 125);
			--dawn-dusk: rgb(255, 150, 150);
			--sunrise-sunset: rgb(255, 150, 40);
			--morning: rgb(160, 160, 160);
			--day: rgb(0, 170, 255);
		}
	</style>
</svelte:head>

<style>
	.canvas-container {
		position: relative;
		margin: var(--margin);
		width: 100%;
		height: 100%;
	}

	canvas {
		display: block;
		width: calc(100% - 2 * (var(--margin)));
		top: var(--margin);
		left: var(--margin);
		bottom: var(--margin);
		position: absolute;
	}

	.static-canvas {
		z-index: 0;
	}

	.animation-canvas {
		z-index: 1;
	}

	.night {
		background: var(--night);
	}

	.dawn {
		background: linear-gradient(var(--night), var(--dawn-dusk));
	}

	.sunrise {
		background: linear-gradient(var(--dawn-dusk), var(--sunrise-sunset));
	}

	.morning {
		background: linear-gradient(var(--morning), var(--day));
	}

	.day {
		background: var(--day);
	}

	.evening {
		background: linear-gradient(var(--day), var(--dawn-dusk));
	}

	.sunset {
		background: linear-gradient(var(--dawn-dusk), var(--sunrise-sunset));
	}

	.dusk {
		background: linear-gradient(var(--night), var(--dawn-dusk));
	}
</style>

<script lang="ts">
	import { MountainScene } from '$lib/canvas/mountainScene';
	import { onMount } from 'svelte';

	export let progress: number;

	let canvas1: HTMLCanvasElement;
	let canvas2: HTMLCanvasElement;
	let mountainScene: MountainScene;

	const width = 700;
	const height = 400;

	onMount(() => {
		const ctx1 = canvas1.getContext('2d');
		const ctx2 = canvas2.getContext('2d');

		if (ctx1 && ctx2) {
			canvas1.width = width;
			canvas1.height = height;
			canvas2.width = width;
			canvas2.height = height;

			mountainScene = new MountainScene(ctx1, ctx2, width, height, progress);

			const animateScene = () => {
				mountainScene.animate();
				requestAnimationFrame(animateScene);
			};

			animateScene();

			// canvases are position: absolute; so they float on top of other elements
			// set height of container to canvases to push other elements down
			const container = document.getElementById('mountain-canvas__container');
			container?.setAttribute('style', `--canvas-height: ${canvas1.clientHeight}px`);
		}
	});

	$: mountainScene?.setAnimationSceneValues(progress);
</script>

<div id="mountain-canvas__container">
	<canvas class="scene-canvas" bind:this={canvas1}></canvas>
	<canvas class="animation-canvas" bind:this={canvas2}></canvas>
</div>

<style>
	#mountain-canvas__container {
		position: relative;
		width: 100%;
		height: var(--canvas-height);
	}

	canvas {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 12px;
	}

	.scene-canvas {
		background-color: rgb(38, 42, 71);
		background: linear-gradient(
			176deg,
			rgb(23, 27, 51),
			rgb(38, 42, 71),
			rgb(94, 80, 117),
			rgb(163, 116, 139),
			rgb(234, 176, 156)
		);
	}
</style>

<script lang="ts">
	import type { PaintingStep } from '$lib/data/paintingStepsData';
	import PaintPalette from './PaintPalette.svelte';
	export let paintingSteps: PaintingStep[];
	export let title = '';
</script>

{#each paintingSteps as paintingStep, i (paintingStep)}
	<h2>STEP {i + 1}</h2>
	<div class="instructions">
		<div class="image-container">
			<img src={paintingStep.imagePath} alt={`${title} ${i + 1}`} class="gallery-img" />
			<div class="paints">
				<PaintPalette paints={paintingStep.paints} />
			</div>
		</div>
		<div>
			{#each paintingStep.instructions as instruction (instruction)}
				<p>{instruction}</p>
			{/each}
		</div>
		<hr />
	</div>
{/each}

<style>
	.instructions {
		width: 100%;
		margin-bottom: 4em;
	}

	.paints {
		display: flex;
		gap: 0.25em;
		flex-direction: column;
	}

	img {
		width: 100%;
	}

	.image-container {
		max-width: 500px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: auto;
		row-gap: 1em;
	}

	h2 {
		text-align: center;
		margin: 1em;
	}

	@media screen and (max-width: 600px) {
		.image-container {
			max-width: 100%;
		}
	}
</style>

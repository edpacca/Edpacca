<script lang="ts">
	import type { PaintColourType } from '$lib/data/paintColourData';
	export let paint: PaintColourType;
</script>

<div
	class="colour"
	class:metallic={paint.isMetallic}
	style="--fill-colour: {paint.code}"
></div>

<style>
	.colour {
		border-radius: 100%;
		height: 4rem;
		width: 4rem;
		background-color: var(--fill-colour);
	}

	.metallic {
		background: linear-gradient(
			120deg,
			var(--fill-colour) 20%,
			color-mix(in srgb, var(--fill-colour) 60%, white) 40%,
			color-mix(in srgb, var(--fill-colour) 25%, white) 50%,
			color-mix(in srgb, var(--fill-colour) 60%, white) 60%,
			var(--fill-colour) 80%
		);
	}
</style>

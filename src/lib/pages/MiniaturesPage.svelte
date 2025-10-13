<script>
	import { MINIATURE_SPOTLIGHT_IMG } from '$lib/data/galleries';
</script>

<div class="spotlight-image-container">
	<img src={MINIATURE_SPOTLIGHT_IMG} alt="miniature spotlight" />
</div>

<style>
	.spotlight-image-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: var(--margin);
	}

	img {
		max-height: 20em;
		max-width: 90vw;
		border-radius: var(--border-radius);
	}
</style>

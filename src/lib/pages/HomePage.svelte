<script>
    import OpenCloseBook from "$lib/components/OpenCloseBook.svelte";

</script>
<section>
	<div class="text-over">
		<img class="wizard" src={"images/wizard-grenade/wizard.webp"} alt="wizard pixel art"/>
		<h1>Hi</h1>
	</div>
	<p>I'm Eddie. Welcome to my corner of the internet.</p>
	<p>I have many interests, both creative and technical - usually involving wizards. Over the years I've found it harder to keep track of all my projects, so I decided to document them here. This site was conceived in 2022, so posts dated older than this are written some time <em>'post factum'</em>.</p>
	<p>See <a href="/projects">Projects</a> for posts by category.</p>
	<p>
		<OpenCloseBook/>
	</p>
</section>

<style>
	h1 {
		margin-bottom: 0.5rem;
	}

	.wizard {
		position: absolute;
		left: 0;
		right: 0;
		top: -1rem;
		margin: auto;
		z-index: -1;
		text-align: center;
		animation: pop-in 360ms ease-in-out;
	}

	@keyframes pop-in {
		0% {
			opacity: 0;
			top: 4rem;
		}
		85% {
			top: -2rem;
			opacity: 1;
		}
		100% {
			top: -1rem;
			opacity: 1;
		}
	}

	.text-over {
		position: relative;
		width: 6rem;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	img {
		height: 4rem;
		image-rendering: pixelated;
		image-rendering: -moz-crisp-edges;
		image-rendering: crisp-edges;
	}
</style>

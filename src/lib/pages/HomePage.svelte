<script>
    import OpenCloseBook from "$lib/components/OpenCloseBook.svelte";

</script>
<section>
	<div class="text-over">
		<img class="wizard" src={"images/wizard-grenade/wizard.webp"} alt="wizard pixel art"/>
		<h1>Hi</h1>
	</div>
	<p>I'm Eddie. Welcome to my corner of the internet.</p>
	<p>I am a <a href="https://github.com/edpacca">software developer</a> by day, night and the twilight hours. I have had many interests and hobbies over the years, both creative and technical - usually involving wizards. Read about them here.</p>
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
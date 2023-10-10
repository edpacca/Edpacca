<section>
	<div class="greeting">
		<div class="img-container">
			<img src={"images/wizard-grenade/wizard.webp"} alt="wizard pixel art"/>
			<!-- <img src={"images/wizard-grenade/potion1.webp"} alt="potion pixel art"/> -->
		</div>
		<h1>Hi</h1>
		<div class="img-container">
			<img src={"images/wizard-grenade/book2.webp"} alt="book pixel art"/>
			<img src={"images/wizard-grenade/potion2.webp"} alt="potion pixel art"/>
		</div>
	</div>
	<p>I'm Eddie. Welcome to my corner of the internet.</p>
	
	<p>I am a <a href="https://github.com/edpacca">software developer</a> by day, night and the twilight hours. I have, and have had, many interests and hobbies over the years; both creative and technical, usually involving wizards. This is where I aim to document some of them.</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.greeting {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		justify-content: center;
		align-items: center;
	}

	.greeting img {
		height: 4em;
	}

	.img-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		image-rendering: pixelated;
		image-rendering: -moz-crisp-edges;
		image-rendering: crisp-edges;
	}
</style>
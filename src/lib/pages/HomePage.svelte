<section>
	<div class="greeting">
		<div class="img-container">
			<img src={"images/wizard-grenade/book1.webp"} alt="book pixel art"/>
			<img src={"images/wizard-grenade/potion1.webp"} alt="potion pixel art"/>
		</div>
		<h1>Hi</h1>
		<div class="img-container">
			<img src={"images/wizard-grenade/potion2.webp"} alt="potion pixel art"/>
			<img src={"images/wizard-grenade/book2.webp"} alt="book pixel art"/>
		</div>
	</div>
	<p>I'm Eddie. Welcome to my corner of the internet</p>
	
	<p>I am a software developer amongst other things. I like Gollum, I hate the new Star Wars films. Wizards are awesome.</p>
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
</style>
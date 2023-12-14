<script lang="ts">
    let isOpen = false;
    let openImg = "book2-open.webp";
    let closedImg = "book2-closed.webp";

    let audio: HTMLAudioElement;
    const toggle = () => {
        isOpen = !isOpen;
        audio.play();
    }

    $: src = isOpen ? openImg : closedImg;
</script>

<button on:click={toggle}>
    <img src={`images/pixel-art/${src}`} alt="book pixel art"/>
</button>
<audio src={"audio/effects/map-open.ogg"} bind:this={audio}/>

<style>
    button {
        background: none;
        border: none;
    }

    img {
		height: 6rem;
		image-rendering: pixelated;
		image-rendering: -moz-crisp-edges;
		image-rendering: crisp-edges;
	}
</style>
<script lang="ts">
    import FaIcon from "./FaIcon.svelte";

    export let imagePaths: string[] = [ "" ];

    let currentIndex = 0;
    const numberOfImages = imagePaths.length;

    $: src = `/images/${imagePaths[currentIndex]}`;

    const previous = () => {
        currentIndex = currentIndex - 1 < 0 
        ? numberOfImages -1
        : currentIndex - 1;
    }
    
    const next = () => {
        currentIndex = (currentIndex + 1) % numberOfImages;
    }
</script>

<div class="gallery-container">
    <button class="previous-button" on:click={previous}>
        <FaIcon icon={"caret-left"} />
    </button>
    <img src={src} alt={"gallery image"}/>
    <button class="next-button" on:click={next}>
        <FaIcon icon={"caret-right"} />
    </button>
</div>

<style>
    .gallery-container {
        position: relative;
        padding: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: auto;
        height: 300px;
    }

    .previous-button {
        margin-right: auto;
    }
    
    .next-button {
        margin-left: auto;
    }
    
    button {
        background: none;
        color: var(--primary);
        border: none;
        font-size: 4em;
    }

    button:hover {
        color: var(--highlight);
    }
</style>
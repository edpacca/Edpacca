<script lang="ts">
    import { quintOut } from "svelte/easing";
    import { fade } from "svelte/transition";
    import SeekButtons from "./SeekButtons.svelte";
    import { onMount } from "svelte";
    let darkBackground = false;
    let seriesTitle = "highland style warhammer bases image series"
    let imagePaths = [
        "/images/warhammer/highland-bases/bases_0.webp",
        "/images/warhammer/highland-bases/bases_1.webp",
        "/images/warhammer/highland-bases/bases_2.webp",
        "/images/warhammer/highland-bases/bases_3.webp",
        "/images/warhammer/highland-bases/bases_4.webp",
        "/images/warhammer/highland-bases/bases_5.webp",
        "/images/warhammer/highland-bases/bases_6.webp"
    ]

    const max = imagePaths.length;

    let currentIndex = 0;
    let img: HTMLImageElement;
    let imageHeight: number;
    let imageWidth: number;

    const previous = () => {
        currentIndex = currentIndex - 1 < 0 
        ? max -1
        : currentIndex - 1;
    }
    
    const next = () => {
        currentIndex = (currentIndex + 1) % max;
    }

    $: currentImage = imagePaths[currentIndex];

    onMount(() => {
        if (img) {
            imageHeight = img.clientHeight;
            imageWidth = img.clientWidth;
        }
    });
</script>

<div class="image-series-container">
    <div class="image-container" style="height: {imageHeight}px;">
        {#key currentImage}
            <img
                bind:this={img}
                src={currentImage}
                alt={seriesTitle}
                transition:fade
                on:click={next}
                on:keydown={() => {}}
            />
        {/key}
        <div
            class="index" 
            class:light-font={darkBackground}
            style="--img-width: {imageWidth}px;">
            #{currentIndex + 1}
        </div>
    </div>
    <div class="buttons-container">
        <SeekButtons onForward={next} onBackward={previous}/>
    </div>
</div>

<style>
    
    .image-series-container {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .image-container {
        position: relative;
    }

    img {
        border-radius: 20px;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }

    .index {
        position: absolute;
        bottom: var(--margin);
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        left: 0;
        right: 0;
        color: var(--secondary);
        font-size: 1.5rem;
        font-weight: bold;
    }

    .light-font {
        color: var(--primary)
    }

    .buttons-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>
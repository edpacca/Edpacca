<script lang="ts">
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
    import SeekButtons from "./SeekButtons.svelte";
   
    export let darkBackground = false;
    export let title: string;
    export let imagePaths: string[];
    export let showIndex = false;
    export let currentIndex = 0;

    const max = imagePaths.length;

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
    
    onMount(() => {
        if (img) {
            imageHeight = img.clientHeight;
            imageWidth = img.clientWidth;
        }
    });

    $: currentImage = imagePaths[currentIndex];
</script>

<div class="gallery-container">
    <div class="image-container" style="height: {imageHeight}px;">
        {#key currentImage}
            <img
                class="gallery-img"
                bind:this={img}
                src={currentImage}
                alt={title}
                transition:fade
                on:click={next}
                on:keydown={() => {}}
            />
        {/key}
        {#if showIndex}
            <div
                class="index" 
                class:light-font={darkBackground}
                style="--img-width: {imageWidth}px;">
                #{currentIndex + 1}
            </div>
        {/if}
    </div>
    {#if imagePaths.length > 1}
        <div class="buttons-container">
            <SeekButtons onForward={next} onBackward={previous}/>
        </div>
    {/if}
</div>

<style>
    
    .gallery-container {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .image-container {
        position: relative;
    }

    img {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        width: 100%;
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
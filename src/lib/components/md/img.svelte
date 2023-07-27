<script lang="ts">
    import { onMount } from "svelte";

    export let src: string;
    export let alt: string;
    let img: HTMLImageElement;
    let isSquare = false;

    onMount(() => {
        isSquare = img?.height === img?.width;
    });
</script>

<div class="post-image-container">
    <img
        src={`images/${src}`} 
        alt={alt}
        loading="lazy"
        class="post-image"
        bind:this={img}
        class:square={isSquare}/>
    {#if alt}
        <div class="caption">{alt}</div>
    {/if}
</div>

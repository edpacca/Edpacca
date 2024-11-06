<script lang="ts">
    import { onMount } from "svelte";
    import ZoomImage from "../ZoomImage.svelte";

    export let src: string;
    export let alt: string;
    let img: HTMLImageElement;
    let isSquare = false;

    onMount(() => {
        isSquare = img?.height === img?.width;
    });
</script>

<div class="post-image-container">
    <ZoomImage
        src={`/images/${src}`}
        alt={alt}
        loading="lazy"
        class={`post-image ${isSquare ? "square" : ""}`}
        bind:img={img}/>
    {#if alt}
        <div class="caption">{alt}</div>
    {/if}
</div>

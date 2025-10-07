<script lang="ts">
    import { onMount } from "svelte";
    import ZoomImage from "../utils/ZoomImage.svelte";

    export let src: string;
    export let alt: string;
    let img: HTMLImageElement;
    let isSquare = false;

    onMount(() => {
        isSquare = img?.height === img?.width;
    });
</script>

<span class="post-image-container">
    <ZoomImage
        src={`/images/${src}`}
        alt={alt}
        loading="lazy"
        class={`post-image ${isSquare ? "square" : ""}`}
        bind:img={img}/>
    {#if alt}
        <span class="caption">{alt}</span>
    {/if}
</span>

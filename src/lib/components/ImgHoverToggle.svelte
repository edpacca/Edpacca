<script lang="ts">
  import { onMount } from "svelte";
  import ZoomImage from "./ZoomImage.svelte";

  export let isHovering = false;
  export let src: string;
  export let srcHover: string;
  export let alt: string;
  let isSquare: boolean;
  let img: HTMLImageElement;

  onMount(() => {
    isSquare = img?.height === img?.width;
  });
</script>

<div
  on:mouseover={() => (isHovering = true)}
  on:focus={() => (isHovering = true)}
  on:mouseleave={() => (isHovering = false)}
  role="img"
>
  <ZoomImage
    src={`/images/${isHovering ? srcHover : src}`}
    {alt}
    loading="lazy"
    class={`post-image transition-1 ${isSquare ? "square" : ""}`}
    bind:img
  />
  {#if alt}
    <div class="caption">{alt}</div>
  {/if}
</div>

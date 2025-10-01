<script lang="ts">
  import { onMount } from "svelte";
  import ZoomImage from "./ZoomImage.svelte";
  import { fade } from "svelte/transition";

  export let isHovering = false;
  export let isToggled = false;
  export let src: string;
  export let srcHover: string;
  export let alt: string;
  let isSquare: boolean;
  let img: HTMLImageElement;

  onMount(() => {
    isSquare = img?.height === img?.width;
  });

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  on:click={() => (isToggled = !isToggled)}
  on:mouseover={() => (isHovering = true)}
  on:mouseleave={() => (isHovering = false)}
  class="post-image-container"
  role="img">
  <img
    transition:fade
    src={`/images/${(isHovering && !isToggled) || isToggled ? srcHover : src}`}
    {alt}
    loading="lazy"
    class={`post-image transition-1 ${isSquare ? "square" : ""}`}
    bind:this={img}
  />
  {#if alt}
    <div class="caption">{alt}</div>
  {/if}
</div>

<script lang="ts">
  import type { ImageMetadata } from "$lib/data/galleries";
  import ZoomImage from "../utils/ZoomImage.svelte";

  export let imgs: ImageMetadata[];
  export let cols: number[] = [1, 1];
  export let caption: string = "";

  let gridTemplateColumns = cols
    .map((c) => `${c}fr`)
    .join(" ")
    .trimEnd();
</script>

<div class="__container">
  <div
    class="img-grid"
    style={`grid-template-columns: ${gridTemplateColumns};`}
  >
    {#each imgs as img}
      <ZoomImage class="post-image" src={img.path} alt={img.alt ?? ""} />
    {/each}
  </div>
  {#if caption}
    <div class="caption">
      {caption}
    </div>
  {/if}
</div>

<style>
    .__container {
        margin: 1em 0;
    }

  .img-grid {
    display: grid;
    width: 100%;
    gap: 1em;
  }

  .caption {
    width: 100%;
    text-align: center;
    margin-top: 0.5em;
  }
</style>

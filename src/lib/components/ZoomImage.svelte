<script lang="ts">
    export let src: string;
    export let alt: string;
    export let isZoomed: boolean = false;
    export let img: HTMLImageElement;
</script>

{#if isZoomed}
    <div class="dim-filter">
    </div>
{/if}
<div class="click-zoom">
    <label>
      <input type="checkbox" bind:checked={isZoomed}>
      <img {src} {alt} class={$$props.class} bind:this={img}/>
    </label>
  </div>

<style>
    .click-zoom input[type=checkbox] {
        display: none
    }

    .click-zoom img {
        width: 100%;
        cursor: zoom-in;
    }

    .click-zoom input[type=checkbox]:checked~img {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        object-fit: contain;
        max-height: calc(100vh - 2em);
        max-width: calc(100vw - 2em);
        /* transform: scale(2); */
        cursor: zoom-out;
        padding: 1em;
    }

    .dim-filter {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }
</style>
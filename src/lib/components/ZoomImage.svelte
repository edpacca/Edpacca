<script lang="ts">
    export let src: string;
    export let alt: string = "";
    export let isZoomed: boolean = false;
    export let img: HTMLImageElement | undefined = undefined;
    export let dominantDimension: "height" | "width" = "width";
    export let hoverEnabled = false;

    const minScreenWidth = 600;
    let screenWidth: number;

    let isHovered = false;

    $: preventZoom = screenWidth < minScreenWidth;
</script>

<svelte:window on:wheel|nonpassive={e => { if(isZoomed) e.preventDefault()}} bind:innerWidth={screenWidth}/>
{#if isZoomed}
    <div class="dim-filter">
    </div>
{/if}
<div
    role="img"
    class="click-zoom"
    class:height={dominantDimension === "height"}
    class:width={dominantDimension === "width"}
    on:mouseenter={() => { isHovered = true; }}
    on:mouseleave={() => { isHovered = false; }}
>
    <label>
        {#if hoverEnabled && isHovered && alt}
        <div class="label hide-mobile">
            {alt}
        </div>
        {/if}
        <input type="checkbox" bind:checked={isZoomed} disabled={preventZoom}>
        <img
            {src}
            alt={alt ? alt : ""}
            class={$$props.class}
            class:height={dominantDimension === "height"}
            class:width={dominantDimension === "width"}
            bind:this={img}
        />
   </label>

  </div>

<style>
    .click-zoom {
      width: 100%;
    }

    .click-zoom input[type=checkbox] {
        display: none
    }

    .click-zoom img {
        cursor: zoom-in;
        display: block;
    }

    .click-zoom img.width {
        width: 100%;
    }

    .click-zoom img.height {
        height: 100%;
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
        z-index: 10;
    }

    .dim-filter {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 9;
    }

    .label {
        position: absolute;
        color: var(--primary);
        background-color: var(--black-50);
        padding: var(--margin);
        border-radius: 0 0 8px 0;
    }
</style>

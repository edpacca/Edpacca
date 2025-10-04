<script lang="ts">
    import { onMount } from "svelte";
    import ZoomImage from "../utils/ZoomImage.svelte";
    import type { ImageMetadata } from "$lib/data/galleries";
    export let images: ImageMetadata[];
    export let setNumCols: number | undefined = undefined;
    let numCols: number;
    let screenWidth: number;
    let columns: ImageMetadata[][] = [];
    let imgsPerCol;

    let colImgs = images.filter(i => !i.wide);
    let wideImgs = images.filter(i => i.wide);
    let numImgs = colImgs.length;

    function calculateColumns(screenWidth: number) {
        numCols = setNumCols ??
            screenWidth > 800 ? 3 :
            screenWidth > 400 ? 2 :
            1;
        columns = [];
        numImgs = colImgs.length;
        imgsPerCol = Math.ceil(numImgs / numCols);

        for (let i = 0; i < numCols; i++) {
            columns.push(
                colImgs.slice(
                    i * imgsPerCol,
                    Math.min((i + 1) * imgsPerCol, numImgs)
                )
            );
        }
    }

    onMount(() => {
        calculateColumns(screenWidth);
    });

    $: calculateColumns(screenWidth);
</script>

<svelte:window bind:innerWidth={screenWidth}/>
{#if numCols}
    {#key numCols}
        <div class="column-grid" style="--num-cols: {numCols}">
            {#each columns as column}
                <div class="column">
                    {#each column as image}
                        <ZoomImage
                            src={image.path}
                            class="gallery-img"
                            alt={image.alt ?? ""}
                            hoverEnabled={true}
                        />
                    {/each}
                </div>
            {/each}
            {#each wideImgs as image}
                <div class="wide-img">
                    <ZoomImage
                        src={image.path}
                        class="gallery-img"
                        alt={image.alt ?? ""}
                        hoverEnabled={true}
                    />
                </div>
            {/each}
        </div>
    {/key}
{/if}

<style>
    .column-grid {
        display: grid;
        grid-template-columns: repeat(var(--num-cols), 1fr);
        column-gap: var(--margin);
    }

    .column {
        display: flex;
        flex-direction: column;
        gap: var(--margin);
    }

    .wide-img {
        grid-column: span var(--num-cols);
        margin-bottom: var(--margin);
    }

</style>

<script lang="ts">
    import { onMount } from "svelte";
    import ZoomImage from "./ZoomImage.svelte";

    export let imagePaths: string[];
    export let setNumCols: number | undefined = undefined;
    let numCols: number;
    let screenWidth: number;
    let columns: string[][] = [];
    let numImgs = imagePaths.length;
    let imgsPerCol;

    function calculateColumns(screenWidth: number) {
        numCols = setNumCols ?? 
            screenWidth > 800 ? 3 :
            screenWidth > 400 ? 2 :
            1;
        columns = [];
        numImgs = imagePaths.length;
        imgsPerCol = Math.ceil(numImgs / numCols);
    
        for (let i = 0; i < numCols; i++) {
            columns.push(
                imagePaths.slice(
                    i * imgsPerCol,
                    Math.min((i + 1) * imgsPerCol, numImgs - 1)
                )
            );
        }
    }

    onMount(() => {
        calculateColumns(screenWidth);
    });

    $: calculateColumns(screenWidth)
</script>

<svelte:window bind:innerWidth={screenWidth}/>
{#if numCols}
    {#key numCols}
        <div class="column-grid" style="--num-cols: {numCols}">
            {#each columns as column, i}
                <div class="column">
                    {#each column as imgSrc, j}
                        <ZoomImage src={imgSrc} class="gallery-img" alt={`gallery image ${i}`}/>
                    {/each}
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
</style>
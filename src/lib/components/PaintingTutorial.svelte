<script lang="ts">
    import PaintPalette from "$lib/components/PaintPalette.svelte"
    import ZoomImage from "$lib/components/ZoomImage.svelte";
    import PaintingSteps from "$lib/components/PaintingSteps.svelte";
    import type { PaintColourType } from "$lib/data/paintColourData";
    import type { PaintingStep } from "$lib/data/paintingStepsData";

    export let coverImage: string = "";
    export let paints: PaintColourType[];
    export let paintingSteps: PaintingStep[];
    export let alt: string = "";
    export let title: string;
</script>

<p>The paints:</p>
<div class="grid-container">
    {#if coverImage}
        <div class="paints-container">
            <PaintPalette paints={paints}/>
        </div>
        <ZoomImage src={coverImage} alt={alt} class="gallery-img"/>
    {:else}
        <PaintPalette paints={paints}/>
    {/if}
</div>

<hr/>

<PaintingSteps paintingSteps={paintingSteps} title={title}/> 

<style>
    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-content: center;
        margin: 0 10%;
    }
    
    .paints-container {
        margin: auto;
    }

    @media screen and (max-width: 900px) {
        .grid-container {
            grid-template-columns: 1fr;
            margin: 0;
        }
    }

    hr {
        margin: 2em;
    }
</style>
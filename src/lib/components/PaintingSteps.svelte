<script lang="ts">
    import type { PaintingStep } from "$lib/data/paintingStepsData";
    import CarouselGallery from "./CarouselGallery.svelte";
    import PaintPalette from "./PaintPalette.svelte";
    import SeekButtons from "./SeekButtons.svelte";

    export let paintingSteps: PaintingStep[];
    const imageSrcs: string[] = paintingSteps.map(step => step.imagePath);
    let currentIndex = 0;
    export let title = "";

    const max = paintingSteps.length - 1;

    const previous = () => {
        currentIndex = currentIndex - 1 < 0 
        ? max -1
        : currentIndex - 1;
    }
    
    const next = () => {
        currentIndex = (currentIndex + 1) % max;
    }


</script>

{#each paintingSteps as paintingStep, i}
<h2>STEP {i + 1}</h2>
<div class="instructions">
    <div class="image-container">
        <img src={paintingStep.imagePath} alt={`${title} i+1`} class="gallery-img"/>
        <div class="paints">
            <PaintPalette paints={paintingStep.paints}/>
        </div>
    </div>
    <div>
        {#each paintingStep.instructions as instruction}
        <p>{instruction}</p>
        {/each}
    </div>
    <hr/>
</div>
{/each}

<style>
    .instructions {
        width: 100%;
        margin-bottom: 4em;
    }
    
    .paints {
        display: flex;
        gap: 0.25em;
        flex-direction: column;
    }

    img {
        width: 100%;
    }
    
    .image-container {
        max-width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        row-gap: 1em;
    }
    
    h2 {
        text-align: center;
        margin: 1em;
    }
    
    @media screen and (max-width: 600px) {
        .image-container {
            max-width: 100%;
        }
    }
</style>

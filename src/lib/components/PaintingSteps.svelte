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

<h2>
    STEP {currentIndex + 1}
</h2>
<div class="painting-step-grid">
    <div class="instructions">
        <div class="paints">
            <PaintPalette paints={paintingSteps[currentIndex].paints}/>
        </div>
        <div>
            {#each paintingSteps[currentIndex].instructions as instruction}
                <p>{instruction}</p>
            {/each}
        </div>
        <div class="seek-buttons-mobile">
            <SeekButtons onForward={next} onBackward={previous}/>
        </div>
    </div>
    <CarouselGallery
        imagePaths={imageSrcs}
        title={title}
        bind:currentIndex={currentIndex}
    />
</div>

<style>
    .painting-step-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1em;
    }
    
    .paints {
        display: flex;
        gap: 1em;
    }

    h2 {
        text-align: center;
        margin: 1em;
    }

    .seek-buttons-mobile {
        display: none;
    }

    @media screen and (max-width: 800px) {
        .painting-step-grid {
            display: flex;
            flex-direction: column-reverse;
        }

        .seek-buttons-mobile {
            display: flex;
            justify-content: center;
        }
    }
</style>

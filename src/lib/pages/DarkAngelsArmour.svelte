<script>
    import { DA_ARMOUR_PAINTS } from "$lib/data/paintColourData";
    import PaintPalette from "$lib/components/PaintPalette.svelte"
    import ZoomImage from "$lib/components/ZoomImage.svelte";
    import { DA_ARMOUR_RECIPE_STEPS } from "$lib/data/paintingStepsData";
    import PaintingSteps from "$lib/components/PaintingSteps.svelte";

    const coverImage = "images/warhammer/gallery/devastator-sergeant-alpha.webp";
</script>

<p>The paints:</p>
<div class="grid-container">
    <div class="paints-container">
        <PaintPalette paints={DA_ARMOUR_PAINTS}/>
    </div>
    <ZoomImage src={coverImage} alt="devastor sergeant" class="gallery-img"/>
</div>

<hr/>

<PaintingSteps paintingSteps={DA_ARMOUR_RECIPE_STEPS}/> 

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
</style>
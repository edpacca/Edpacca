<script>
    import { DA_ARMOUR } from "$lib/data/paintColours";
    import PaintPalette from "$lib/components/PaintPalette.svelte"
    import ZoomImage from "$lib/components/ZoomImage.svelte";

    const coverImage = "images/warhammer/gallery/devastator-sergeant.webp";
</script>

<div class="container">
    <div>
        <PaintPalette paints={DA_ARMOUR}/>
    </div>
    <div class="img-container">
        <img src={coverImage}/>
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        border: 1px solid red;
    }

    .img-container {
        max-height: 30rem;
    }

    img {
        height: 100%;
        /* width: 100%; */
    }
</style>
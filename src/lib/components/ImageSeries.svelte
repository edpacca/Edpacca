<script>
    import { quintOut } from "svelte/easing";
    import { fade } from "svelte/transition";
    import SeekButtons from "./SeekButtons.svelte";
    let darkBackground = false;
    let seriesTitle = "highland style warhammer bases image series"
    let imagePaths = [
        "/images/warhammer/highland-bases/bases_0.webp",
        "/images/warhammer/highland-bases/bases_1.webp",
        "/images/warhammer/highland-bases/bases_2.webp",
        "/images/warhammer/highland-bases/bases_3.webp",
        "/images/warhammer/highland-bases/bases_4.webp",
        "/images/warhammer/highland-bases/bases_5.webp",
        "/images/warhammer/highland-bases/bases_6.webp"
    ]

    const max = imagePaths.length;

    let currentIndex = 0;

    const previous = () => {
        currentIndex = currentIndex - 1 < 0 
        ? max -1
        : currentIndex - 1;
    }
    
    const next = () => {
        currentIndex = (currentIndex + 1) % max;
    }

    $: currentImage = imagePaths[currentIndex];
</script>

<div class="image-series-container">
    <div class="image-container">
        <img src={currentImage} alt={seriesTitle} transition:fade on:click={next} on:keydown={() => {}}/>
        <div class="index" class:light-font={darkBackground}>#{currentIndex + 1}</div>
    </div>
    <SeekButtons onForward={next} onBackward={previous}/>
</div>

<style>
    img {
        border-radius: 20px;
    }

    .image-series-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    .image-container {
        position: relative;
    }

    .index {
        position: absolute;
        bottom: var(--margin);
        left: var(--margin);
        color: var(--secondary);
        font-size: 1.5rem;
        font-weight: bold;
    }

    .light-font {
        color: var(--primary)
    }
</style>
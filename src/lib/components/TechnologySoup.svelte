<script lang="ts">
    import { onMount } from "svelte";
    import { WordSoup } from "../wordSoup";

    export let technologies: string[]
    const techAccumulation: Record<string, number>[] = [];
    let canvas: HTMLCanvasElement;
    // technologies.forEach(t => t in techAccumulation.keys ? techAccumulation += 1 : techAccumulation. )
    let wordSoup: WordSoup;
    onMount(() => {
        canvas.height = 1000;
        canvas.width = canvas.height * (16 / 9);
        wordSoup = new WordSoup(canvas, technologies);
        wordSoup.animate();
    });

    const toggleRandomForces = () => {
        wordSoup.randomForces = !wordSoup.randomForces;
    }

    const reset = () => {
        wordSoup = new WordSoup(canvas, technologies);
        wordSoup.animate();
    }
</script>


<div class="main-container">
    <div>
        <input type="range" class="horizontal"/>
    </div>
    <div class="canvas-range-container">
        <div class="vertical-container">
            <input type="range" class="vertical"/>
        </div>
        <canvas bind:this={canvas}>
        </canvas>
    </div>
    <div class="control-bar">
        <button on:click={reset}>Reset</button>
        <button on:click={toggleRandomForces}>Alive</button>
    </div>
</div>

<style>
    canvas {
        background-color: var(--grey);
        width: 100%;
    }

    .main-container {
        width: calc(100% - 24px);
    }

    .canvas-range-container {
        display: flex;
    }

    input[type=range].vertical{
        writing-mode: bt-lr; /* IE */
        -webkit-appearance: slider-vertical; /* Chromium */
        width: 8px;
        height: 100%;
    }

    input[type=range].horizontal {
        margin-left: 20px;
        width: 100%;
    }
    
    .vertical-container {
        padding-right: 8px;
    }

    .control-bar {
        height: 3em;
        border: 2px solid white;
        width: 100%;
        margin-left: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        justify-content: center;
        align-items: center;
    }

    button {
        margin: 1em;
    }
</style>
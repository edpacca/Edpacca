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
        wordSoup.animate(0);
    });

    const toggleRandomForces = () => {
        wordSoup.randomForces = !wordSoup.randomForces;
    }
</script>

<button on:click={toggleRandomForces}>ToggleRandom</button>
<canvas bind:this={canvas}>
</canvas>

<style>
    canvas {
        background-color: var(--grey);
        width: 100%;
    }
</style>
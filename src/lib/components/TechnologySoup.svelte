<script lang="ts">
    import { onMount } from "svelte";
    import { WordSoup } from "../techSoup";

    export let technologies: string[]
    const techAccumulation: Record<string, number>[] = [];
    let canvas: HTMLCanvasElement;
    // technologies.forEach(t => t in techAccumulation.keys ? techAccumulation += 1 : techAccumulation. )

    onMount(() => {
        canvas.height = 1000;
        canvas.width = canvas.height * (16 / 9);
        const wordSoup = new WordSoup(canvas, technologies.slice(0, 3));
        wordSoup.animate();
    });
</script>

<canvas bind:this={canvas}>
</canvas>

<style>
    canvas {
        background-color: var(--grey);
        width: 100%;
    }
</style>
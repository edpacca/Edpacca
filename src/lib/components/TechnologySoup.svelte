<script lang="ts">
    import { onMount } from "svelte";
    import { populateCanvas } from "../techSoup";

    export let technologies: string[]

    const techAccumulation: Record<string, number>[] = [];
    let canvas: HTMLCanvasElement;
    // technologies.forEach(t => t in techAccumulation.keys ? techAccumulation += 1 : techAccumulation. )
    let ctx: CanvasRenderingContext2D | null;

    onMount(() => {
        ctx = canvas.getContext("2d");
            if (ctx) {
            ctx.font = "bold 12px 'Fira Mono'";
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            populateCanvas(canvas, technologies, 12);
        }
    });
</script>

<canvas bind:this={canvas}>
</canvas>

<style>
    canvas {
        background-color: maroon;
        width: 100%;
    }
</style>
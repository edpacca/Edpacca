<script lang="ts">
    import { onMount } from "svelte";

    export let technologies: string[]

    const techAccumulation: Record<string, number>[] = [];
    let canvas: HTMLCanvasElement;
    // technologies.forEach(t => t in techAccumulation.keys ? techAccumulation += 1 : techAccumulation. )
    let ctx: CanvasRenderingContext2D | null;

    onMount(() => {
        ctx = canvas.getContext("2d");
        const xGap = canvas.width / technologies.length;
        const yGap = canvas.height / technologies.length;
        let x = 10;
        let y = 10;
        for (const tech of technologies) {
            ctx?.fillText(tech, x, y);
            x += xGap;
            y += yGap;
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
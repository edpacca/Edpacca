<script lang="ts">
    import { mountainScene } from "$lib/mountainScene";
    import { onMount } from "svelte";

    export let canvas1: HTMLCanvasElement;
    export let canvas2: HTMLCanvasElement;

    onMount(() => {
        const ctx1 = canvas1.getContext("2d");
        const ctx2 = canvas2.getContext("2d");
        if (ctx1 && ctx2) {
            canvas1.width = 700;
            canvas1.height = 400;
            canvas2.width = 700;
            canvas2.height = 400;
            mountainScene(ctx1, ctx2, 700, 400, 0.7);
            
        }
    })
</script>

<div class="canvas-container">
    <canvas class="scene-canvas" bind:this={canvas1}/>
    <canvas class="animation-canvas" bind:this={canvas2}/>
</div>

<style>
    .canvas-container {
        position: relative;
        width: 100%;
    }

    canvas {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .scene-canvas {
        background-color: rgb(38, 42, 71);
        background: linear-gradient(
            176deg,
            rgb(23, 27, 51),
            rgb(38, 42, 71),
            rgb(94, 80, 117),
            rgb(163, 116, 139),
            rgb(234, 176, 156));
    }
</style>
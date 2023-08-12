<script lang="ts">
    import { mountainScene } from "$lib/mountainScene";
    import { onMount } from "svelte";
    import { drawCharacter } from "../../routes/weather/DrawCharacter";

    export let canvas: HTMLCanvasElement;

    onMount(() => {
        const ctx = canvas.getContext("2d");
        if (ctx) {
            canvas.width = 700;
            canvas.height = 400;
            mountainScene(ctx, 700, 400, 0.5);
        }
    })
</script>

<canvas bind:this={canvas}>
</canvas>

<style>
    canvas {
        background-color: rgb(38, 42, 71);
        width: 100%;
    }
</style>
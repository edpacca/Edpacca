<script lang="ts">
    import { onMount } from "svelte";
    import { hourNoun, timeNoun } from "./weatherTime";
    import { drawTree } from "./draw/tree";
    import { drawCharacter } from "./draw/character";
    import type { Weather } from "./weatherData";
    import { Rain } from "./draw/rain";
    import { Bluebody } from "./draw/bluebody";
    import { Cloud } from "./draw/cloud";
  import { Snow } from "./draw/snow";
  import { Thunder } from "./draw/thunder";
  import { randIntBetween } from "$lib/utils";
    export let time: Date;
    export let weather: Weather;
    export let windspeed: number;

    let testTime: number = 7;
    const backgroundStyle = timeNoun(time);
    // $: backgroundStyle = hourNoun(testTime);
    let animationCanvas: HTMLCanvasElement;
    let staticCanvas: HTMLCanvasElement;

    const cloudSize = 30;

    const CANVAS_HEIGHT = 920;
    const CANVAS_WIDTH = 1920;
    const CEN_Y = CANVAS_HEIGHT / 2;
    const CEN_X = CANVAS_WIDTH / 2;
    const TREE_DEPTH = 12;
    const TREE_BRANCH_THICKNESS = 50;


    const clouds: Cloud[] = [];

    onMount(() => {
        animationCanvas.width = CANVAS_WIDTH;
        staticCanvas.width = CANVAS_WIDTH;
        animationCanvas.height = CANVAS_HEIGHT;
        staticCanvas.height = CANVAS_HEIGHT;

        const orbitCentreX = CANVAS_WIDTH / 2;
        const orbitCentreY = CANVAS_HEIGHT / 2;
        const orbitRadius = CANVAS_HEIGHT / 2;
        const orbitBodyRadius = 100;

        const animCtx = animationCanvas.getContext("2d");
        const staticCtx = staticCanvas.getContext("2d");
        if (animCtx && staticCtx) {

            const rain = new Rain(animCtx, 20, 0.3, windspeed, 10);
            const rain2 = new Rain(animCtx, 10, 0.8, windspeed, 5);
            // const snow = new Snow(animCtx, 4, 0.9, windspeed, 40);
            // const snow2 = new Snow(animCtx, 2, 0.9, windspeed, 20);
            // const bluebody = new Bluebody(staticCtx, time, orbitCentreX, orbitCentreY, orbitRadius, orbitBodyRadius);

            // drawTree(staticCtx, 120, CANVAS_HEIGHT, 80, -Math.PI / 2, TREE_DEPTH, TREE_BRANCH_THICKNESS);
            // drawTree(staticCtx, CANVAS_WIDTH - 400, CANVAS_HEIGHT, 60, -Math.PI / 2, TREE_DEPTH, TREE_BRANCH_THICKNESS);
            // drawCharacter(staticCtx, CANVAS_WIDTH / 2, CANVAS_HEIGHT * 0.8);

            for (let i = 0; i < 10; i++) {
                clouds.push(new Cloud(animCtx, randIntBetween(0, CANVAS_WIDTH - 100), randIntBetween(0, CEN_Y), randIntBetween(20, 40), randIntBetween(7, 15), windspeed, "gray"));
            }

            const thunder = new Thunder(animCtx, CANVAS_HEIGHT, CANVAS_WIDTH, 0.5);
            // bluebody.draw();

            const animate = () => {
                animCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                rain.animate();
                rain2.animate();
                thunder.animate();
                // snow.animate();
                // snow2.animate();
                clouds.forEach(cloud => cloud.animate());
                requestAnimationFrame(animate);
            }
            animate();
        }


    });

</script>

    <input type="range" bind:value={testTime} min={0} max={24}/>
     <div class="canvas-container">
         <canvas class={"static-canvas " + backgroundStyle} bind:this={staticCanvas}>
        </canvas>
        <canvas bind:this={animationCanvas} class="animation-canvas">
        </canvas>
    </div>

<!-- <button on:click={regenCloud}>REDRAW</button> -->

<svelte:head>
    <style>
        :root {
            --night: rgb(50, 30, 125);
            --dawn-dusk: rgb(255, 150, 150);
            --sunrise-sunset: rgb(255, 150, 40);
            --morning: rgb(160, 160, 160);
            --day: rgb(0, 170, 255);
        }
    </style>
</svelte:head>

<style>
    input {
        position: absolute;
        top: 0;
        left: 0;
        width: 40%;
    }

    button {
        position: absolute;
        right: 0;
    }

    .canvas-container {
        position: relative;
        margin: var(--margin);
        width: 100%;
        height: 100%;
    }

    canvas {
        display: block;
        width: calc(100% - 2*(var(--margin)));
        top: var(--margin);
        left: var(--margin);
        bottom: var(--margin);
        position: absolute;
    }

    .static-canvas {
        z-index: 0;
    }

    .animation-canvas {
        z-index: 1;
    }

    .night {
        background: var(--night);
    }

    .dawn {
        background: linear-gradient(
            var(--night),
            var(--dawn-dusk)
        );
    }

    .sunrise {
        background: linear-gradient(
            var(--dawn-dusk),
            var(--sunrise-sunset)
        );
    }

    .morning {
        background: linear-gradient(
            var(--morning),
            var(--day)
        );
    }

    .day {
        background: var(--day);
    }

    .evening {
        background: linear-gradient(
            var(--day),
            var(--dawn-dusk)
        );
    }

    .sunset {
        background: linear-gradient(
            var(--dawn-dusk),
            var(--sunrise-sunset)
        );
    }

    .dusk {
        background: linear-gradient(
            var(--night),
            var(--dawn-dusk)
        );
    }
</style>

<script lang="ts">
    import { onMount } from "svelte";
    import { WordSoup } from "../wordSoup";
    import ControlBar from "./ControlBar.svelte";
    import { ZERO_VECTOR, Vector2D } from "../mechanics/vector";
    import { fade } from "svelte/transition";

    export let technologies: string[]
    const techAccumulation: Record<string, number>[] = [];
    let canvas: HTMLCanvasElement;
    // technologies.forEach(t => t in techAccumulation.keys ? techAccumulation += 1 : techAccumulation. )
    let wordSoup: WordSoup;
    let xGravity = 0;
    let yGravity = 0;
    let hasGravity = true;

    let screenWidth: number;

    const reset = () => {
        let fontSize = undefined;
        if (screenWidth > 600) {
            canvas.height = 1000;
            canvas.width = canvas.height * (16 / 9);
        } else {
            canvas.height = 500;
            canvas.width = canvas.height * (4 / 3);
            fontSize = 32;
        }
        wordSoup = new WordSoup(canvas, technologies, fontSize);
        wordSoup.animate();
    }

    const syncGravity = () => {
        xGravity = wordSoup.gravity.x * 100;
        yGravity = wordSoup.gravity.y * 100;
    }

    const btns = [
        {
            title: "Reset Positions",
            fnc: () => { 
                reset();
                if (hasGravity) {
                    wordSoup.setGravity(new Vector2D(xGravity / 100, yGravity / 100));
                } else {
                    wordSoup.setForces(ZERO_VECTOR, true, 0.1);
                }
            }
        },
        {
            title: "Reset Gravity",
            fnc: () => { 
                wordSoup.setForces(new Vector2D(0, 1), false);
                syncGravity();
                hasGravity = true;
            }
        },
        {
            title: "?",
            fnc: () => {
                wordSoup.setForces(ZERO_VECTOR, true, 0.1);
                hasGravity = false;
            } 
        }
    ]

    onMount(() => {
        reset();
        syncGravity();
    });

    $: wordSoup?.setGravity(new Vector2D(xGravity / 100, yGravity / 100));
</script>

<svelte:window bind:innerWidth={screenWidth}/>
<div class="main-container">
    {#if hasGravity}
        <div transition:fade>
            <div class="grav-values-container">
                <div>gravity X: {xGravity / 100}</div>
                <div>gravity y: {yGravity / 100}</div>
            </div>
            <input
                type="range"
                class="horizontal"
                min={-100} max={100}
                bind:value={xGravity}/>
            <input
                type="range"
                class="vertical"
                min={-100} max={100}
                bind:value={yGravity}/>
        </div>

    {/if}
    <canvas bind:this={canvas}/>
</div>
<ControlBar buttons={btns}/>
<div>
    <p>Have a play around with the "word soup" widget. The relative sizes of each block approximate the relative amount I have used that language/framework in my projects.</p>
    <p>If the blocks get stuck try changing the gravity with the sliders or resetting the positions. Unfortunately the "physics engine" is quite simplistic, but I think it results in some interesting behaviour! <a>Read more about the code behind the WordSoup widget here.</a></p>
</div>

<style>
    canvas {
        background-color: none;
        width: 100%;
        pointer-events: none;
        border-radius: var(--border-radius);
        box-shadow: 0 0 10px var(--primary-50);
    }

    .grav-values-container {
        position: absolute;
        top: var(--margin);
        left: var(--margin);
    }

    .main-container {
        width: 100%;
        position: relative;
    }

    input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
        outline: none;
        cursor: pointer;
        border-radius: 0px;
        background: none;
    }

    input {
        position: absolute;
    }

    input.vertical{
        transform: rotate(90deg);
        transform-origin: 0;
        width: 8px;
        width: calc(100% * 9 / 16);
        outline: none;
        cursor: pointer;
    }

    input.horizontal {
        width: 100%;
        position: absolute;
        top: -16px;
        left: 16px;
    }

    /* Thumb: webkit */
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 36px;
        width: 36px;
        background-color: var(--light-grey);
        border-radius: 50%;
        border: none;
        transition: .2s ease-in-out;
    }

    /* Thumb: Firefox */
    input[type="range"]::-moz-range-thumb {
        height: 36px;
        width: 36px;
        background-color: var(--light-grey);
        border-radius: 50%;
        border: none;
        transition: .2s ease-in-out;
    }

        /* Thumb: webkit */
        input[type="range"]::-webkit-slider-thumb:hover {
        background-color: var(--highlight);
    }

    /* Thumb: Firefox */
    input[type="range"]::-moz-range-thumb:hover {
        background-color: var(--highlight);
    }

    @media screen and (max-width: 600px) {
        input.vertical{
            width: calc(100% * 3 / 4);
            top: -8px;
        }

        input.horizontal {
            width: 100%;
            position: absolute;
            top: -12px;
            left: 8px;
        }

        input[type="range"]::-webkit-slider-thumb {
            height: 24px;
            width: 24px;
        }

        /* Thumb: Firefox */
        input[type="range"]::-moz-range-thumb {
            height: 24px;
            width: 24px;
        }
    }
</style>
<script lang="ts">
    import { onMount } from "svelte";
    import { timeNoun } from "./weatherTime";
    import Orbit from "./Orbit.svelte";
    export let time: Date;

    const backgroundStyle = timeNoun(time);
    let canvas: HTMLCanvasElement;
    let sunMoon: HTMLImageElement;

    // const solarBody = hour >= 6 && hour < 21 ? "sun" : "moon";
    const solarBody = "moon";

    onMount(() => {

    })
</script>

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

<svg viewBox={"0 0 100 100"}>
    <rect/>
    <Orbit time={time}/>
</svg>

<style>
    svg {
        margin: var(--margin);
        width: 100%;
        height: 100%;
    }

    rect {
        fill: aliceblue;
        width: 100%;
        height: 100%;
    }

    .night {
        fill: var(--night);
    }

    .dawn {
        fill: linear-gradient(
            var(--night),
            var(--dawn-dusk)
        );
    }

    .sunrise {
        fill: linear-gradient(
            var(--dawn-dusk)
            var(--sunrise-sunset),
        );
    }

    .morning {
        fill: linear-gradient(
            var(--morning),
            var(--day)
        );
    }

    .day {
        fill: var(--day);
    }

    .evening {
        fill: linear-gradient(
            var(--day),
            var(--dawn-dusk)
        );
    }

    .sunset {
        fill: linear-gradient(
            var(--dawn-dusk),
            var(--sunrise-sunset)
        );
    }

    .dusk {
        fill: linear-gradient(
            var(--night),
            var(--dawn-dusk)
        );
    }
</style>
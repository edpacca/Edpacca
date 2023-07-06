<script lang="ts">
    import { onMount } from "svelte";
    import { timeAsTwelvethFraction, timeNoun } from "./weatherTime";
    import Orbit from "./Orbit.svelte";
    export let time: Date;

    const backgroundStyle = timeNoun(time);
    let canvas: HTMLCanvasElement;

    let testTime = 0;

    onMount(() => {
        canvas.width = window.innerWidth - 24;
        canvas.height = window.innerHeight - 24;

        const orbitCentreX = canvas.width / 2;
        const orbitCentreY = canvas.height;
        const orbitRadius = canvas.height - 100;
        const orbitBodyRadius = 150;

        const ctx = canvas.getContext("2d");
        if (ctx) {
            for (let x = 0; x < canvas.width; x+= 100) {
                for (let y = 0; y < canvas.height; y+= 100) {
                    ctx.fillRect(x, y, 3, 3)
                }
            }

            // orbit
            // ctx.beginPath();
            // ctx.arc(
            //     orbitCentreX,
            //     orbitCentreY,
            //     orbitRadius,
            //     Math.PI, Math.PI * 2, false);
            // ctx.stroke();
            const moduloTime = time.getHours() + 6 % 24;
            const orbitAngle = (((2 * Math.PI / 24) * moduloTime) % Math.PI) - (Math.PI / 2);
            const orbitLenX = Math.sin(orbitAngle) * orbitRadius;
            const orbitLenY = Math.cos(orbitAngle) * orbitRadius;
            const orbitPositionX = orbitCentreX - orbitLenX;
            const orbitPositionY = orbitCentreY - orbitLenY;

            // sun or moon
            ctx.beginPath();
            ctx.arc(
                orbitPositionX, 
                orbitPositionY,
                orbitBodyRadius,
                0, 2*Math.PI, false
            )
            ctx.strokeStyle = "blue";
            ctx.stroke();
        }
    })
</script>

<input type="range" bind:value={testTime} min={0} max={24}/>
<canvas class={backgroundStyle} bind:this={canvas}>

</canvas>

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
    canvas {
        margin: var(--margin);
    }

    rect {
        fill: aliceblue;
        width: 100%;
        height: 100%;
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
            var(--dawn-dusk)
            var(--sunrise-sunset),
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
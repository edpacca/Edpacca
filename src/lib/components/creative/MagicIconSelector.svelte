<script lang="ts">
	import { PROJECTS } from "$lib/data/projectData";
	import FaIcon from "../utils/FaIcon.svelte";
	import Floating from "./Floating.svelte";

    let selectedProject: string;

    const centre: number = Number(((PROJECTS.length / 2 - 1)).toFixed(0))

    const calcArcPosition = (index: number) => {
        const factor = Math.abs(index - centre);
        return factor * factor
    }

</script>

<div class="magic-icons__container">
    <div class="floating-icons__container">
        {#each PROJECTS as project, i}
            <div class="circle-icon" style={`--arc-position: ${calcArcPosition(i)}em;`}>
                <button on:click={() => console.log(project.id)}>
                    <Floating offset={i * 1.5}>
                        <FaIcon icon={project.icon} size={"3em"}/>
                    </Floating>
                </button>
            </div>
        {/each}
    </div>
</div>

<style>
    .magic-icons__container {
        padding: 1em;
    }

    .floating-icons__container {
        position: relative;
        gap: 2em;
        display: flex;
    }

    .circle-icon {
        /* position: absolute; */
        transform: translateY(var(--arc-position));
    }

    button {
        border: none;
        background: none;
    }
</style>

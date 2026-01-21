<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import FaIcon from "../utils/FaIcon.svelte";
	import Floating from "./Floating.svelte";

    export let projects: ProjectType[];
    export let onProjectSelect: (project: ProjectType | undefined) => void;
    export let selectedProject: ProjectType | undefined;

    const centre: number = Number(((projects.length / 2 - 1)).toFixed(0))

    const calcArcPosition = (index: number) => {
        const factor = Math.abs(index - centre);
        return factor * factor
    }
</script>

<div class="magic-icons__container" transition:fly>
    <div class="floating-icons__container">
        {#each projects as project, i}
            <div class="circle-icon" style={`--arc-position: ${calcArcPosition(i)}em;`}>
                <button on:click={() => onProjectSelect(project)} class:selected={selectedProject?.id == project.id}>
                    <Floating offset={i * 1.5}>
                        <FaIcon icon={project.icon} size={"3em"} />
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
        color: var(--highlight);
    }

    button.selected {
        color: var(--white) !important;
    }
</style>

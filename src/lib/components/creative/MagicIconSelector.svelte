<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import FaIcon from "../utils/FaIcon.svelte";
	import Floating from "./Floating.svelte";
	import { flip } from "svelte/animate";

    export let projects: ProjectType[];
    export let onProjectSelect: (project: ProjectType | undefined) => void;
    export let selectedProject: ProjectType | undefined;

    const centre: number = Number(((projects.length / 2 - 1)).toFixed(0))

    const calcArcPosition = (index: number) => {
        const factor = Math.abs(index - centre);
        return factor * factor
    }

    const sortPlaceInMiddle = (project: ProjectType) => {
        if (!projects.includes(project)) {
            return;
        }
        const currentIndex = projects.indexOf(project);

        const buffer = projects[centre];
        projects[centre] = project;
        projects[currentIndex] = buffer;
    }

    const onSelected = (project: ProjectType | undefined) => {
        if (project) {
            sortPlaceInMiddle(project);
        }
        onProjectSelect(project);
    }
</script>

<div class="magic-icons__container" transition:fly>
    <div class="floating-icons__container">
        {#each projects as project, i (project.id)}
            <div in:fade animate:flip={{ duration: 300 }} class="circle-icon" style={`--arc-position: ${calcArcPosition(i)}em;`}>
                <button
                    class:none-selected={!selectedProject}
                    on:click={() => onSelected(project)}
                    class:selected={selectedProject?.id == project.id}>
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
        color: var(--primary-50);
        transition: 200ms ease-in;
    }

    button.none-selected {
        color: var(--white);
    }

    button.selected {
        color: var(--highlight) !important;
    }

    button:hover {
        color: var(--highlight);
        transform: translateY(-13px);
        transition: 200ms ease-in;
    }


</style>

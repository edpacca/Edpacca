<script lang="ts">
    import { getProjectData } from "$lib/data/projectData";
    import FaIcon from "./FaIcon.svelte";
    import { sineIn } from "svelte/easing";

    export let projectId: string | undefined;
    const project = projectId ? getProjectData(projectId) : undefined;
    let isHovered = false;
    const grow = (node: HTMLElement) => {
        return {
            duration: 100,
            easing: sineIn,
            css: (t: number) => `transform: scaleX(${t}); transform-origin: left`
        }
    }

    const goToProject = () => {
        location.href=`/projects/${projectId}`
    }
</script>

{#if project}
    <button
        on:click={goToProject}
        on:mouseenter={() => {isHovered = true;}}
        on:mouseleave={() => {isHovered = false;}}>
        <FaIcon icon={"angle-left"}/>
        {#if isHovered}
            <div class="project-name" transition:grow>{project.name}</div>
        {/if}
        {#if project.icon}
            <FaIcon icon={project.icon}/>
        {/if}
    </button>
{/if}

<style>
    button {
        background-color: var(--secondary-50);
        padding: var(--margin);
        border-radius: 6px;
        color: var(--primary);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
        transition: var(--transition-time);
        font: var(--font-body);
        border: none;
        height: 2.5em;
    }

    button:hover {
        color: var(--highlight);
        transition: var(--transition-time);
    }
</style>
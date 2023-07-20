<script lang="ts">
    import { getProjectData } from "$lib/data/projectData";
    import FaIcon from "./FaIcon.svelte";

    export let projectId: string | undefined;
    const project = projectId ? getProjectData(projectId) : undefined;
</script>

{#if project}
    <a href={`/projects/${project.id}`} class="button">
        <FaIcon icon={"angle-left"}/>
        <span>
            {project.name}
        </span>
        {#if project.icon}
            <FaIcon icon={project.icon}/>
        {/if}
    </a>
{/if}

<style>
    a.button {
        background-color: var(--dark-grey);
        padding: var(--margin);
        border-radius: 6px;
    }

    span {
        margin: 0 0.2em;
    }
</style>
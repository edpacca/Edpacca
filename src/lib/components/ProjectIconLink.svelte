<script lang="ts">
    import { getProjectData } from "../data/projectData";
    import FaIcon from "./FaIcon.svelte";
    import Tooltip from "./Tooltip.svelte";
    export let projectId;
    const project = getProjectData(projectId);
    const url = `/projects/${project?.id}`;
</script>

{#if project}
<Tooltip text={"go to " + project.name}>
    <a href={url}>
        <FaIcon icon={project.icon}/>
    </a>
</Tooltip>
{/if}

<style>
    a {
        color: var(--highlight);
        font-size: 2em;
    }

    a:hover {
        color: var(--white);
    }
</style>
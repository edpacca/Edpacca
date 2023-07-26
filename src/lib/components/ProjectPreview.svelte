<script lang="ts">
    import FaIcon from "./FaIcon.svelte";
    import ProjectIconLink from "./ProjectIconLink.svelte";
    export let project: ProjectType;

    let isExpanded = false;

    const toggleExpanded = () => { 
        isExpanded = !isExpanded
    };
</script>

<div class="summary-container">
    <div class="icon-title-grid">
        <ProjectIconLink projectId={project.id} hasTooltip={false} />
        <a href={`/projects/${project.id}`} class="title">
            {project.name}
        </a>
    </div>
</div>

<style>
    .icon-title-grid {
        display: grid;
        grid-template-columns: 2em 1fr;
        align-items: center;
        justify-content: left;
        gap: 1em;
        color: var(--highlight);
    }
</style>
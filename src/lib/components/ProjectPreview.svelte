<script lang="ts">
    import FaIcon from "./FaIcon.svelte";
    export let project: ProjectType;
</script>

<div class="preview-container">
    <a href={`/projects/${project.id}`} class="title">
        {#if project.icon}
            <FaIcon icon={project.icon}/>
        {/if}
        {project.name}
    </a>
</div>
{#if project.description}
    <div class="description">
        {project.description}
    </div>
{/if}

<style>
    .preview-container {
        border-radius: 4px;
        text-align: left;
        background-color: var(--grey);
        padding: var(--margin);
        cursor: pointer;
        transition: var(--transition-time) ease-in-out;
        display: grid;
        grid-template-columns: 30% 1fr;
        align-items: center;
    }

    .preview-container:hover {
        background-color: var(--white-50);
    }

    a {
        font-style: normal;
        text-decoration: none;
        text-transform: uppercase;
    }

    .title {
        font-weight: 100;
        font-size: 1.5em;
        white-space: nowrap;
        text-align: left;
        display: grid;
        grid-template-columns: 1.5em 1fr;
        align-items: center;
        color: var(--highlight);
    }

    .description {
        color: grey;
        font-style: italic;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

</style>
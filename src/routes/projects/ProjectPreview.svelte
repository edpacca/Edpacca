<script lang="ts">
    import type { ProjectSummary } from "./projectTypes";
    export let project: ProjectSummary
    let isHovered = false;
</script>

<div class="preview-container"
    on:mouseenter={() => { isHovered = true; }}
    on:mouseleave={() => { isHovered = false; }}>
    <div class="title">{project.name}</div>
    {#if isHovered}
        <div class="description">
            {project.description}
        </div>
    {:else}
        <div class="image">
            <img src={project.image} alt={project.name}/>
        </div>
    {/if}
</div>


<style>
    .preview-container {
        border: 2px solid white;
        border-radius: 8px;
        text-align: center;
        background-color: var(--black-50);
        transition: var(--transition-time) ease-in-out;
        height: 15em;
        cursor: pointer;
        padding: var(--margin);
    }

    .preview-container:hover {
        background-color: var(--white-50);
    }

    .image {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
    }

    img {
        height: 8em;
        width: 100%;
    }

    .title {
        font-weight: bold;
        font-size: 1.5em;
    }

    .description {
        color: black;
        margin-top: 1em;
        font-style: italic;
    }
</style>
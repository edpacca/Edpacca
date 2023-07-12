<script lang="ts">
    import type { PageData } from "./$types";
    import ProjectPreview from "../../lib/components/ProjectPreview.svelte";
    export let data: PageData;
</script>

<div class="project-list">
    {#each data.projects as project}
        <ProjectPreview project={project}/>
    {/each}
</div>

<style>
    .project-list {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
</style>


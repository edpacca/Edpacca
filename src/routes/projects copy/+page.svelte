<script lang="ts">
    import type { PageData } from "./$types";
    import ProjectPreview from "./ProjectPreview.svelte";
    export let data: PageData;
</script>

<div class="preview-grid">
    {#each data.projects as project}
        <div>
            <ProjectPreview project={project}/>
        </div>
    {/each}
</div>


<style>
    .preview-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1em;
        margin: 1em;
        grid-template-rows: repeat(1fr);
    }
</style>
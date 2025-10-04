<script lang="ts">
    import type { PageData } from "./$types";
    import ProjectPreview from "../../lib/components/posts/ProjectPreview.svelte";
    export let data: PageData;

    const getNumberOfPosts = (projectId: string): number => {
        return data.posts.filter(p => p.projectId === projectId).length
    }
</script>

<div class="project-list">
    {#each data.projects as project}
        <ProjectPreview project={project} numberOfPosts={getNumberOfPosts(project.id)}/>
    {/each}
</div>

<style>
    .project-list {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
</style>


<script lang="ts">
    import { formatDate } from "../utils";
    import ProjectIconLink from "./ProjectIconLink.svelte";
    export let post: Post;
    const date = formatDate(post.date);
</script>


<div class="summary-container">
    <div>
        <div class="date">{date}</div>
        <a href={`/${post.slug}`} class="title nowrap">{post.title}</a>
    </div>
    <div class="project-info">
        <ProjectIconLink projectId={post.projectId}/>
    </div>
</div>

<style>
    .summary-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .project-info {
        margin-left: auto;
        margin-right: var(--margin);
        color: var(--highlight);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        text-transform: uppercase;
    }
</style>
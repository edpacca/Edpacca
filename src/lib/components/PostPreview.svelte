<script lang="ts">
    import { formatDate } from "../utils";
    import ProjectIconLink from "./ProjectIconLink.svelte";
    export let post: Post;
    const date = formatDate(post.date);
</script>


<div class="post-summary-container">
    <div>
        <div class="date">{date}</div>
        <a href={post.slug} class="title nowrap">{post.title}</a>
    </div>
    <div class="project-info">
        <ProjectIconLink projectId={post.projectId}/>
    </div>
</div>

<style>
    .post-summary-container {
        border-radius: 4px;
        background-color: var(--grey);
        transition: var(--transition-time) ease-in-out;
        padding: var(--margin);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 1.5em;
        text-transform: uppercase;
    }
    
    .date {
        color: var(--white-50);
    }

    .project-info {
        margin-left: auto;
        right: var(--margin);
        color: var(--highlight);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        text-transform: uppercase;
    }
</style>
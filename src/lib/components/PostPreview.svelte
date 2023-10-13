<script lang="ts">
    import { formatDate } from "../utils";
    import PostCoverImage from "./PostCoverImage.svelte";
    import ProjectIconLink from "./ProjectIconLink.svelte";
    export let post: Post;
    export let hasProjectLink = true;
    export let hasPostImage = false;
    const date = formatDate(post.date);
</script>


<div class="summary-container">
    <div class="info-container">
        {#if hasPostImage}
            <PostCoverImage post={post}/>
        {/if}
        <div>
            <div class="date">{date}</div>
            <a href={`/${post.slug}`} class="title two-line-clamp">{post.title}</a>
        </div>
    </div>
    {#if hasProjectLink}
    <div class="project-link-container">
        <ProjectIconLink projectId={post.projectId}/>
    </div>
    {/if}
</div>

<style>
    .summary-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .info-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-right: auto;
        gap: 1em;
        padding-right: var(--margin);
    }

    .project-link-container {
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
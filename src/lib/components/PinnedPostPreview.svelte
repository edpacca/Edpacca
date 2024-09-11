<script lang="ts">
    import PostCoverImage from "./PostCoverImage.svelte";
    export let post: Post;
    export let hasPostImage = false;
</script>


<div class="summary-container">
    <div class="info-container">
        {#if hasPostImage}
            <PostCoverImage post={post}/>
        {/if}
        <div>
            <a href={`/${post.slug}`} class="title two-line-clamp">{post.title}</a>
        </div>
    </div>
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
    }

    .title {
        color: var(--highlight);
    }
</style>
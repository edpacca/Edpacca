<script lang="ts">
    import FaIcon from "./FaIcon.svelte";
    export let post: Post
</script>

{#if post.coverImage}
    <img class="cover-image" src={`/images/${post.coverImage}`} alt={`${post.title} cover image`}/>
{:else if post.icon}
    <div class="cover-icon">
        <FaIcon icon={post.icon}/>
    </div>
{:else}
    <img class="cover-image" src={"/images/default-cover.webp"} alt={`${post.title} cover image`}/>
{/if}

<style>
    img {
        height: 100%;
    }

    .cover-icon {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        color: var(--highlight);
    }
</style>
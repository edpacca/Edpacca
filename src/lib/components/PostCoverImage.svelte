<script lang="ts">
    import FaIcon from "./FaIcon.svelte";
    export let post: Post
</script>

<div class="image-container">
    {#if post.coverImage}
        <img class="cover-image" src={`/images/${post.coverImage}`} alt={`${post.title} cover image`}/>
    {:else if post.icon}
        <div class="cover-icon">
            <FaIcon icon={post.icon}/>
        </div>
    {:else}
        <img class="cover-image" src={"/images/default-cover.webp"} alt={`${post.title} cover image`}/>
    {/if}
</div>

<style>
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .image-container, .cover-icon {
        height: 5rem;
        width: 5rem;
    }

    .cover-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        color: var(--highlight);
    }

    @media screen and (max-width: 600px) {
        .image-container, .cover-icon {
            width: 4rem;
            height: 4rem;
        }
    }
</style>
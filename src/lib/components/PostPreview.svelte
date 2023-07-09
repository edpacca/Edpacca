<script lang="ts">
    import type { ProjectSummary } from "../../routes/projects/projectTypes";
    export let post: { title: string, description: string, cover_image: string, url: string }
    let isHovered = false;
    console.log(post.url);
</script>

<a href={post.url}>
    <div class="preview-container"
        on:mouseenter={() => { isHovered = true; }}
        on:mouseleave={() => { isHovered = false; }}>
        <div class="title">{post.title}</div>
        {#if isHovered}
            <div class="description">
                {post.description}
            </div>
        {:else}
            <div class="image">
                <img src={`images/${post.cover_image}`} alt={`${post.title} cover image`}/>
            </div>
        {/if}
    </div>
</a>


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

    a {
        font-style: normal;
        text-decoration: none;
    }

    .description {
        color: black;
        margin-top: 1em;
        font-style: italic;
    }
</style>
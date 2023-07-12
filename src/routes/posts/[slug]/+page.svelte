<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    const post = data.post as PostData;

    const imageColumns = post.attributes.images ? post.attributes.images.length % 4 : 0;
    console.log(imageColumns);
</script>

<h1>{post.attributes.title}</h1>
{#if post.attributes.images}
    <div class="image-grid" style={`--cols: ${imageColumns}`}>
        {#each post.attributes.images as image}
            <img class="grid-image" src={`/images/${image}`} alt={image}/>
        {/each}
    </div>
{/if}
<div>
    {@html post.html}
</div>

<style>
    .image-grid {
        display: grid;
        grid-template-columns: repeat(var(--cols), calc(100% / var(--cols)));
        align-items: center;
        border: 3px solid yellowgreen;
    }

    .grid-image {
        width: 100%;
        max-width: none;
    }
</style>
<script lang=ts>
    import PostPreview from "../../../lib/components/PostPreview.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<h1>{data.project?.name}</h1>
<div class="description">
    {data.project?.description}
</div>

<section>
    <h2>Articles</h2>
    <div class="posts">
        {#each data.posts as post}
            <PostPreview post={post}/>
        {/each}
    </div>
</section>

<style>

h1 {
    color: var(--color-theme-1);
    text-transform: uppercase;
    font-weight: bold;
}

.description {
    margin-bottom: 2em;
}
</style>
<script lang=ts>
    import { page } from "$app/stores";
    import Gallery from "$lib/components/Gallery.svelte";
    import MountainCanvas from "$lib/components/MountainCanvas.svelte";
    import TechnologySoup from "$lib/components/TechnologySoup.svelte";
    import { WARHAMMER_GALLERY } from "$lib/data/galleries";
    import PostPreview from "../../../lib/components/PostPreview.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;

</script>

<h1>{data.project?.name}</h1>
<div class="description">
    {data.project?.description ?? ""}
</div>

{#if $page.url.pathname.split("/projects/")[1] === "minipainting"}
    <Gallery imagePaths={WARHAMMER_GALLERY}/>
{:else if $page.url.pathname.split("/projects/")[1] === "running"}
    <MountainCanvas/>
{:else if $page.url.pathname.split("/projects/")[1] === "programming"}
    {#if data.ghData}
        <TechnologySoup technologies={data.ghData}/>
    {/if}
{/if}
<section>
    <div class="posts">
        {#each data.posts as post}
            <PostPreview post={post} hasProjectLink={false} hasPostImage={true}/>
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

section {
    margin-top: 2em;
}
</style>
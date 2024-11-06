<script lang=ts>
    import { page } from "$app/stores";
    import { comparePinnedPosts } from "$lib/utils";
    import TechnologySoup from "$lib/components/TechnologySoup.svelte";
    import MiniaturesPage from "$lib/pages/MiniaturesPage.svelte";
    import PostPreview from "$lib/components/PostPreview.svelte";
    import BackButton from "$lib/components/BackButton.svelte";
    import RunningPage from "$lib/pages/RunningPage.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;

    const sortedPosts = data.posts ? data.posts.sort(comparePinnedPosts) : [];

    $: path = $page.url.pathname
</script>

<h1>{data.project?.name}</h1>
<BackButton text={"projects"} urlRef={"/projects"}/>

<br/>
{#if path.split("/projects/")[1] === "minipainting"}
    <MiniaturesPage/>
{/if}

<div class="description">
    {data.project?.description ?? ""}
</div>

{#if path.split("/projects/")[1] === "running"}
    <RunningPage/>
{:else if path.split("/projects/")[1] === "programming"}
    {#if data.ghData}
        <TechnologySoup technologies={data.ghData}/>
    {/if}
{/if}
<section>
    <div class="posts">
        {#each sortedPosts as post}
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
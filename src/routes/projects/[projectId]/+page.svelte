<script lang=ts>
    import { page } from "$app/stores";
    import { comparePinnedPosts } from "$lib/utils";
    import TechnologySoup from "$lib/components/TechnologySoup.svelte";
    import MiniaturesPage from "$lib/pages/MiniaturesPage.svelte";
    import PostPreview from "$lib/components/PostPreview.svelte";
    import BackButton from "$lib/components/BackButton.svelte";
    import type { PageData } from "./$types";
    import DnDPage from "$lib/pages/DnDPage.svelte";
    export let data: PageData;

    const sortedPosts = data.posts ? data.posts.sort(comparePinnedPosts) : [];

    $: path = $page.url.pathname
</script>

<h1 class:vecna={path.split("/projects/")[1] === "dnd"}>{data.project?.name}</h1>
<BackButton text={"projects"} urlRef={"/projects"}/>

<br/>
{#if path.split("/projects/")[1] === "miniatures"}
    <MiniaturesPage/>
{/if}

<div class="description">
    {data.project?.description ?? ""}
</div>

{#if path.split("/projects/")[1] === "programming"}
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

{#if path.split("/projects/")[1] === "dnd"}
    <DnDPage/>
{/if}

<div class="bonus">
    {data.project?.bonus ?? ""}
</div>

<style>

h1 {
    color: var(--color-theme-1);
    text-transform: uppercase;
    font-weight: bold;
}

.description {
    margin-bottom: 2em;
}

.bonus {
    margin-top: 2em;
    font-style: italic;
}

section {
    margin-top: 2em;
}
</style>

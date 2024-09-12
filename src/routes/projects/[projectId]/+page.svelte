<script lang=ts>
    import { page } from "$app/stores";
    import TechnologySoup from "$lib/components/TechnologySoup.svelte";
    import MiniaturesPage from "$lib/pages/MiniaturesPage.svelte";
    import PostPreview from "$lib/components/PostPreview.svelte";
    import BackButton from "$lib/components/BackButton.svelte";
    import RunningPage from "$lib/pages/RunningPage.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;

    const comparePinnedPosts = (p1: Post, p2: Post) => {
        return parsePinned(p2.pinned) - parsePinned(p1.pinned);
    }
    const parsePinned = (pinned: boolean | undefined) => Number(pinned ?? 0);
    const sortedPosts = data.posts.sort(comparePinnedPosts);

</script>

<h1>{data.project?.name}</h1>
<BackButton text={"projects"} urlRef={"/projects"}/>

<br/>
{#if $page.url.pathname.split("/projects/")[1] === "minipainting"}
    <MiniaturesPage/>
{/if}

<div class="description">
    {data.project?.description ?? ""}
</div>

{#if $page.url.pathname.split("/projects/")[1] === "running"}
    <RunningPage/>
{:else if $page.url.pathname.split("/projects/")[1] === "programming"}
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
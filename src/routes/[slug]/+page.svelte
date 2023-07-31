<script lang="ts">
    import { formatDate } from "$lib/utils";
    import ProjectBackButton from "../../lib/components/ProjectBackButton.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;

    const date = formatDate(data.meta.date);
</script>

<!-- SEO -->
<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content={data.meta.article}/>
</svelte:head>

<article>
    <!-- Title -->
    <hgroup>
        <h1>{data.meta.title}</h1>
        <p class="date">Published {date}</p>
        <ProjectBackButton projectId={data.meta.projectId} />
    </hgroup>

    <div class="contents">
        <div class="post-image-container">
            <img src={`images/${data.meta.coverImage}`}
                alt={data.meta.title}
                loading="lazy"
                class="post-cover-image"/>
        </div>
        <svelte:component this={data.content}/>
    </div>
</article>

<style>
    h1 {
        text-transform: uppercase;
    }
</style>
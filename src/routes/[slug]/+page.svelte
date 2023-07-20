<script lang="ts">
    import ProjectBackButton from "$lib/components/ProjectBackButton.svelte";
    import { formatDate } from "$lib/utils";
    import type { PageData } from "./$types";
    export let data: PageData;
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
        <p>Published {formatDate(data.meta.date)}</p>
    </hgroup>

    <!-- Tags -->
    <div class="project-link">
        <ProjectBackButton projectId={data.meta.projectId}/>
    </div>

    <div class="contents">
        <svelte:component this={data.content}/>
    </div>
</article>

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

    .project-link {
        top:0;
        left: 0;
        position: absolute;
    }
</style>
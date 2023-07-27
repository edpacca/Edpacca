<script lang="ts">
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
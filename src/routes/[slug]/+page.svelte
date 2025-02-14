<script lang="ts">
    import BackButton from "$lib/components/BackButton.svelte";
    import { getProjectData } from "$lib/data/projectData";
    import { formatDate } from "$lib/utils";
    import type { PageData } from "./$types";
    export let data: PageData;

    const date: string = formatDate(data.meta.date);
    const projectId = data.meta.projectId ?? ""
    const project: ProjectType | undefined = getProjectData(projectId);
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
        {#if project}
            <BackButton text={project.name} icon={project.icon} urlRef={`/projects/${projectId}`}/>
        {/if}
    </hgroup>

    <div class="contents">
        {#if data.meta.projectId == "programming"}
        <div class="tech">
            &lbrace;
            {#each  data.meta.technologies as tech, i}
                <span>{tech}{#if i < (data.meta.technologies.length - 1)},&nbsp;{/if}</span>
            {/each}
            &rbrace;
        </div>
        <p class="description">
            {data.meta.description}
        </p>
        {/if}
        <svelte:component this={data.content}/>
    </div>
</article>

<style>
    h1 {
        text-transform: uppercase;
    }

    .tech {
        color: var(--teal-bright);
        font-weight: bold;
        text-align: center;
    }

    .description {
        font-style: italic;
        padding: 0.5em 2em 2em;
        margin: 0;
    }
</style>
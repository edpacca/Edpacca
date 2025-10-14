<script lang="ts">
	import Footnote from '$lib/components/posts/Footnote.svelte';
	import PostSeriesNavigation from '$lib/components/posts/PostSeriesNavigation.svelte';
	import BackButton from '$lib/components/utils/BackButton.svelte';
	import { getProjectData } from '$lib/data/projectData';
	import { formatDate } from '$lib/utils';
	let { data } = $props();

	const projectId = data.meta.projectId ?? '';
	const project: ProjectType | undefined = getProjectData(projectId);
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.article} />
</svelte:head>

<article>
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p class="date">Published {formatDate(data.meta.date)}</p>
		{#if project}
			<BackButton
				text={project.name}
				icon={project.icon}
				urlRef={`/projects/${projectId}`}
				showBackArrow={false}
			/>
		{/if}
		{#if data.meta.previous || data.meta.next}
			<PostSeriesNavigation
				previous={data.meta.previous ?? undefined}
				next={data.meta.next ?? undefined}
			/>
		{/if}
	</hgroup>

	<div class="contents">
		{#if data.meta.projectId == 'programming'}
			<div class="tech">
				&lbrace;
				{#each data.meta.technologies as tech, i (tech)}
					<span
						>{tech}{#if i < data.meta.technologies.length - 1},&nbsp;{/if}</span
					>
				{/each}
				&rbrace;
			</div>
			<p class="description">
				{data.meta.description}
			</p>
		{/if}
		<data.content />
	</div>
	{#if data.meta.previous || data.meta.next}
		<div class="post-nav-footer__container">
			<PostSeriesNavigation
				previous={data.meta.previous ?? undefined}
				next={data.meta.next ?? undefined}
			/>
		</div>
	{/if}
	{#if data.meta.footnotes}
		<hr class="footer" />
		{#each data.meta.footnotes as footnote (footnote)}
			<Footnote {footnote} />
		{/each}
	{/if}
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

	.post-nav-footer__container {
		margin: 4rem 0 2rem;
	}
</style>

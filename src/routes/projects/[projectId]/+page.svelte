<script lang="ts">
	import { page } from '$app/state';
	import { comparePinnedPosts } from '$lib/utils/post';
	import TechnologySoup from '$lib/components/creative/TechnologySoup.svelte';
	import MiniaturesPage from '$lib/pages/MiniaturesPage.svelte';
	import PostPreview from '$lib/components/posts/PostPreview.svelte';
	import BackButton from '$lib/components/utils/BackButton.svelte';
	import DnDPage from '$lib/pages/DnDPage.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const sortedPosts = data.posts ? data.posts.sort(comparePinnedPosts) : [];
	const path = page.url.pathname;

	const projectName = (path: string): string => path.split('/projects/')[1];
</script>

<h1 class:vecna={projectName(path) === 'dnd'}>{data.project?.name}</h1>

<BackButton text="projects" urlRef="/projects" />

<br />

{#if projectName(path) === 'miniatures'}
	<MiniaturesPage />
{/if}

<div class="description">
	{data.project?.description ?? ''}
</div>

{#if projectName(path) === 'programming'}
	{#if data.ghData}
		<TechnologySoup technologies={data.ghData} />
	{/if}
{/if}

<section>
	<div class="posts">
		{#each sortedPosts as post (post.slug)}
			<PostPreview
				{post}
				hasProjectLink={false}
				hasPostImage={true}
				icons={post.technologies ?? []}
			/>
		{/each}
	</div>
</section>

{#if projectName(path) === 'dnd'}
	<DnDPage />
{/if}

<div class="bonus">
	{data.project?.bonus ?? ''}
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

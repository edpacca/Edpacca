<script lang="ts">
	import { PROJECTS } from '$lib/data/projectData';
	import { comparePinnedPosts } from '$lib/utils';
	export let posts: Post[];
	import PostPreview from './PostPreview.svelte';
	import ProjectFilter from '$lib/components/ProjectFilter.svelte';
	import ProjectPreview from './ProjectPreview.svelte';

	const sortedPosts = posts.sort(comparePinnedPosts);

	let filter: ProjectType | undefined = undefined;
	const onProjectFilterSelected = (project: ProjectType | undefined) => {
		filter = project;
	};

	$: filteredPosts = filter ? sortedPosts.filter((p) => p.projectId == filter?.id) : sortedPosts;
</script>

<ProjectFilter onFilterChanged={onProjectFilterSelected} projects={PROJECTS} />
<div class="posts">
	{#each filteredPosts as post (post.slug)}
		<PostPreview {post} hasPostImage={false} />
	{/each}
	{#if filter?.id == "dnd"}
		<ProjectPreview project={filter} />
	{/if}
</div>

<style>
	.posts {
		margin-top: 1em;
		gap: 0.5em;
		display: flex;
		flex-direction: column;
	}
</style>

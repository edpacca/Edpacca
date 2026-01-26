<script lang="ts">
	import { PROJECTS } from '$lib/data/projectData';
	import { comparePinnedPosts } from '$lib/utils/post';
	import PostPreview from './PostPreview.svelte';
	import ProjectFilter from '$lib/components/ProjectFilter.svelte';
	import ProjectPreview from './ProjectPreview.svelte';

	export let posts: Post[];
	export let selectedProject: ProjectType | undefined;
	export let onProjectSelected: (project: ProjectType | undefined) => void;
	const sortedPosts = posts.sort(comparePinnedPosts);

	$: filteredPosts = selectedProject ? sortedPosts.filter((p) => p.projectId == selectedProject?.id) : sortedPosts;
</script>

<ProjectFilter
	selectedProject={selectedProject}
	onFilterChanged={onProjectSelected}
	projects={PROJECTS} />
<div class="posts">
	{#each filteredPosts as post (post.slug)}
		<PostPreview {post} hasPostImage={false} />
	{/each}
	{#if selectedProject?.id == 'dnd'}
		<ProjectPreview project={selectedProject} />
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

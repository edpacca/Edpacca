<script lang="ts">
	import { PROJECTS } from "$lib/data/projectData";
	import { comparePinnedPosts } from "$lib/utils";
	import LinkAsPostPreview from "./LinkAsPostPreview.svelte";
	export let posts: Post[];
	import PostPreview from "./PostPreview.svelte";
	import ProjectFilter from "./ProjectFilter.svelte";

	const sortedPosts = posts.sort(comparePinnedPosts);

	let filter: ProjectType | undefined = undefined;
	const onProjectFilterSelected = (project: ProjectType | undefined) => {
		filter = project;
	};

	$: filteredPosts = filter ? sortedPosts.filter((p) => p.projectId == filter?.id) : sortedPosts;
</script>

<ProjectFilter onFilterChanged={onProjectFilterSelected} projects={PROJECTS} />
<div class="posts">
	<!-- <LinkAsPostPreview slug={"projects/programming"} title={"Programming Projects"} projectId={"programming"} /> -->
	{#each filteredPosts as post}
		<PostPreview {post} hasPostImage={false} />
	{/each}
</div>

<style>
	.posts {
		margin-top: 1em;
		gap: 0.5em;
		display: flex;
		flex-direction: column;
	}
</style>

<script lang="ts">
	import PostPreviewList from '../lib/components/posts/PostPreviewList.svelte';
	import { selectedProject, selectProject } from '../store';
	import ProjectSelectionPage from '$lib/pages/ProjectSelectionPage.svelte';
	let { data } = $props();
</script>

 <section>
	<ProjectSelectionPage />
 </section>
{#if $selectedProject}
	<PostPreviewList posts={data.posts} selectedProject={$selectedProject} onProjectSelected={selectProject}/>
{/if}

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 8rem 0;
	}
</style>

<script lang="ts">
	import PostPreviewList from '../lib/components/posts/PostPreviewList.svelte';
	import { selectedProject, selectProject } from '../store';
	import ProjectSelectionPage from '$lib/pages/ProjectSelectionPage.svelte';
	import HomePage from '$lib/pages/HomePage.svelte';
	import GlyphButton from '$lib/components/creative/GlyphButton.svelte';
	let { data } = $props();
	let isBookSummoned = $state(true);
</script>

 <section>
	{#if isBookSummoned}
	<ProjectSelectionPage/>
		<GlyphButton
			text={"Banish"}
			onClick={() => isBookSummoned = false}/>
	{:else}
	<HomePage>
		<GlyphButton
			text={"Summon Tome"}
			onClick={() => isBookSummoned = true}/>
	</HomePage>
	{/if}
 </section>
<PostPreviewList posts={data.posts} selectedProject={$selectedProject} onProjectSelected={selectProject}/>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 2rem 0;
	}
</style>

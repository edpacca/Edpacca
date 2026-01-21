<script lang="ts">
	import HomePage from '$lib/pages/HomePage.svelte';
	import PostPreviewList from '../lib/components/posts/PostPreviewList.svelte';
	import { selectedProject, selectProject } from '../store';
	let { data } = $props();
</script>

<HomePage/>
<PostPreviewList posts={data.posts} selectedProject={$selectedProject} onProjectSelected={selectProject}/>

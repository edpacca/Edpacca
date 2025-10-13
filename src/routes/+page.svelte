<script lang="ts">
	import HomePage from '$lib/pages/HomePage.svelte';
	import PostPreviewList from '../lib/components/posts/PostPreviewList.svelte';
	let { data } = $props();
</script>

<HomePage />
<PostPreviewList posts={data.posts} />

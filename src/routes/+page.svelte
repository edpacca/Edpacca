<script lang="ts">
    import PostPreview from "../lib/components/PostPreview.svelte";
	import type { PageData } from "./$types";
    export let data: PageData;

	const posts = data.posts;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Eddie Pace's portfolio homepage" />
</svelte:head>

<section>
	<h1>Hi</h1>
	<p>I'm Eddie - welcome to my little corner of the internet. I like to develop apps which solve a problem that I have.</p>
	<p> Here you can find demos for some of my javascript projects, amongst other things.</p>
</section>
<posts>
	{#each posts as post}
		<PostPreview post={post}/>
	{/each}
</posts>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>

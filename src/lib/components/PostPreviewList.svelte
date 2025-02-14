<script lang="ts">
    import { comparePinnedPosts } from "$lib/utils";
    import LinkAsPostPreview from "./LinkAsPostPreview.svelte";
    export let posts: Post[];
    import PostPreview from "./PostPreview.svelte";

	const sortedPosts = posts.sort(comparePinnedPosts);
</script>

<div class="posts">
	<LinkAsPostPreview slug={"projects/programming"} title={"Programming Projects"} projectId={"programming"}/>
	{#each sortedPosts as post}
		<PostPreview post={post} hasPostImage={false}/>
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
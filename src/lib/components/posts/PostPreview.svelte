<script lang="ts">
	import { formatDate } from '$lib/utils';
	import PostCoverImage from './PostCoverImage.svelte';
	import ProjectIconLink from './ProjectIconLink.svelte';
	export let post: Post;
	export let hasProjectLink = true;
	export let hasPostImage = false;
	export let icons: string[] = [];
	const isPinnedPost = post.pinned;
	const date = formatDate(post.date);
</script>

<div class="summary__container">
	<div class="info__container">
		{#if hasPostImage}
			<PostCoverImage {post} />
		{/if}
		<div>
			{#if !isPinnedPost}
				<div class="date">{date}</div>
			{/if}
			<a
				href={`/${post.slug}`}
				class="title two-line-clamp"
				class:pinned={isPinnedPost}
				class:dev={post.dev}
			>
				{post.title}
			</a>
		</div>
	</div>
	{#if hasProjectLink}
		<div class="project-link__container">
			<ProjectIconLink projectId={post.projectId} />
		</div>
	{/if}
	{#if icons.length > 0}
		<div class="tech-icons__container">
			{#each icons as icon (icon)}
				<img
					src={`/icons/devicon/${icon.toLowerCase()}/${icon.toLowerCase()}-original.svg`}
					alt={icon}
					class:invert={icon == 'Express'}
				/>
			{/each}
		</div>
	{/if}
</div>

<style>
	.pinned {
		color: var(--highlight);
	}

	.dev {
		color: var(--teal-bright);
	}

	.summary__container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.info__container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-right: auto;
		gap: 1em;
		padding-right: var(--margin);
	}

	.project-link__container {
		margin-left: auto;
		margin-right: var(--margin);
		color: var(--highlight);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1em;
		text-transform: uppercase;
	}

	.tech-icons__container {
		align-self: flex-end;
		display: flex;
		flex-direction: row;
		flex-flow: row-reverse wrap-reverse;
		gap: 1em;
	}

	img {
		height: 1.8em;
		width: 1.8em;
		text-align: center;
		line-height: 1.8em;
	}

	img.invert {
		-webkit-filter: invert(1);
		filter: invert(1);
	}

	@media screen and (max-width: 700px) {
		img {
			height: 1.25em;
			width: 1.25em;
			line-height: 1.25em;
		}

		.tech-icons__container {
			gap: 0.5em;
			max-width: 4.75em;
			flex-flow: row-reverse wrap-reverse;
		}
	}

	@media screen and (max-width: 600px) {
		img {
			display: none;
		}
	}
</style>

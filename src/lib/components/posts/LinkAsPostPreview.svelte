<script lang="ts">
	import ProjectIconLink from './ProjectIconLink.svelte';
	export let title: string;
	export let slug: string;
	export let projectId: string | undefined = undefined;
</script>

<div class="summary-container">
	<div class="info-container">
		<div>
			<a data-sveltekit-reload href={`/${slug}`} class="title two-line-clamp pinned">{title}</a>
		</div>
	</div>
	{#if projectId}
		<div class="project-link-container">
			<ProjectIconLink {projectId} />
		</div>
	{/if}
</div>

<style>
	.pinned {
		color: var(--highlight);
	}

	.summary-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.info-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-right: auto;
		gap: 1em;
		padding-right: var(--margin);
	}

	.project-link-container {
		margin-left: auto;
		margin-right: var(--margin);
		color: var(--highlight);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1em;
		text-transform: uppercase;
	}
</style>

<script lang="ts">
	import FaIcon from '$lib/components/utils/FaIcon.svelte';
	export let contents: [string, string, string][];
	export let isInternal = true;
</script>

<ul class="contents-list">
	{#each contents as content (content)}
		<li>
			<FaIcon icon={content[2]} />
			{#if isInternal}
				<a href={`#${content[1]}`}>{content[0]}</a>
			{:else}
				<a href={`/${content[1]}`}>{content[0]}</a>
			{/if}
		</li>
	{/each}
</ul>

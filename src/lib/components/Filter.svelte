<script lang="ts" generics="T extends object">
	import FaIcon from "$lib/components/utils/FaIcon.svelte";

	export let onFilterChanged: (subject: T | undefined) => void;
	export let filterItems: FilterType<T>[];
	let selectedItem: T | undefined = undefined;
</script>

<div class="filter-container">
	<select class="expandable">
		<option on:click={() => onFilterChanged(undefined)}></option>
		{#each filterItems as filter}
			<option on:click={() => onFilterChanged(filter.filterTarget)} selected={filter == selectedItem}>
				{#if filter.icon}
					{filter.name}
					<!-- <FaIcon icon={filter.icon} /> -->
				{/if}
			</option>
		{/each}
	</select>
</div>

<style>
	.filter-container {
		display: flex;
		justify-content: flex-end;
	}

	.expandable {
		max-width: 2em;
		transition: 0.4s ease-in-out;
	}

	.expandable:hover, .expandable:focus {
		max-width: 15em;
	}

	select {
		border-radius: var(--border-radius);
		border: none;
		padding: 0.5rem 1rem 0.5rem 1.1rem;
		background-color: var(--bg1);
		color: var(--highlight);
		font-size: 1.1rem;
	}

	select:hover {
		outline: 1px solid var(--highlight);
		cursor: pointer;
	}

	option {
		background-color: var(--bg1);
		color: var(--primary);
	}

	select::after {
		margin-right: 1em;
	}

	@media screen and (max-width: 600px) {
		.expandable {
			max-width: unset;
		}

		.expandable:hover, .expandable:focus {
			max-width: unset;
		}

		select {
			font-size: 1.4rem;
			width: 100%;
		}
	}
</style>

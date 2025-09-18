<script lang="ts" generics="T extends object">
	import FaIcon from "./FaIcon.svelte";

	export let onFilterChanged: (subject: T | undefined) => void;
	export let filterItems: FilterType<T>[];
	let selectedItem: T | undefined = undefined;

	const onFilterChangedInternal = (subject: T | undefined) => {
		onFilterChanged(subject);
		selectedItem = subject;
	};
</script>

<div class="filter-container">
	<select>
		<option on:click={() => onFilterChanged(undefined)}></option>
		{#each filterItems as filter}
			<option on:click={() => onFilterChanged(filter.filterTarget)} selected={filter == selectedItem}>
				{#if filter.icon}
					<div>{filter.name}</div>
					<FaIcon icon={filter.icon} />
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

	select {
		border-radius: var(--border-radius);
		border: none;
		padding: 0.5rem 1rem;
		background-color: var(--bg1);
		color: var(--highlight);
		font-size: 1.1rem;
	}

	option {
		background-color: var(--bg1);
		color: var(--primary);
	}

	select::after {
		margin-right: 1em;
	}
</style>

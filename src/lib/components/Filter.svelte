<script lang="ts" generics="T extends object">
	import FaIcon from './utils/FaIcon.svelte';

	export let onFilterChanged: (subject: T | undefined) => void;
	export let filterItems: FilterType<T>[];
	export let selectedIcon: string | undefined = undefined;
	export let selectedItem: FilterType<T> | undefined = undefined;
</script>

<div class="filter-container">
	<select
		class="expandable"
		bind:value={selectedItem}
		on:change={() => onFilterChanged(selectedItem?.filterTarget ?? undefined)}
	>
		<option value={undefined}></option>
		{#each filterItems as filter (filter.name)}
			<option value={filter}>
				{filter.name}
			</option>
		{/each}
	</select>
	{#if selectedIcon}
		<div class="icon-container">
			<FaIcon icon={selectedIcon} />
		</div>
	{/if}
</div>

<style>
	.filter-container {
		display: flex;
		justify-content: flex-end;
		position: relative;
	}

	.icon-container {
		position: absolute;
		transition: 0.4s ease-out;
		transition-delay: 0.2s;
		color: var(--light-grey);
		font-size: 1.5em;
		padding: 0.5rem 1rem 0.5rem 1.1rem;
		pointer-events: none;
	}

	.expandable:hover + .icon-container,
	.expandable:focus + .icon-container {
		display: none;
	}

	.expandable {
		max-width: 2.2em;
		transition: 0.4s ease-out;
		border-radius: var(--border-radius);
		color: var(--bg1);
		opacity: 0.5;
	}

	.expandable:hover,
	.expandable:focus {
		max-width: 15em;
		color: var(--highlight);
		opacity: 1;
	}

	select {
		border: none;
		padding: 0.5rem 1rem 0.5rem 1.1rem;
		background-color: var(--bg1);
		color: var(--highlight);
		font-size: 1.5rem;
	}

	select:hover {
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
			border-radius: var(--border-radius);
			color: var(--light-grey);
			opacity: 0.4;
		}

		.expandable:hover,
		.expandable:focus {
			max-width: unset;
			display: unset;
			opacity: 1;
		}

		select {
			font-size: 1.4rem;
			width: 100%;
		}

		.icon-container {
			display: none;
		}
	}
</style>

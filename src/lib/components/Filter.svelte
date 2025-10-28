<script lang="ts" generics="T extends object">
	import FaIcon from './utils/FaIcon.svelte';
	import Tooltip from './utils/Tooltip.svelte';

	export let onFilterChanged: (subject: T | undefined) => void;
	export let filterItems: FilterType<T>[];
	export let selectedIcon: string | undefined = undefined;
	export let selectedItem: FilterType<T> | undefined = undefined;
	let select: HTMLSelectElement;

	const onChanged = (subject: T | undefined) => {
		onFilterChanged(subject);
		select.blur();
	};

	const clear = () => {
		selectedItem = undefined;
		onChanged(undefined);
	};
</script>

<div class="filter__container">
	{#if selectedItem}
		<div class="clear-btn__container">
			<Tooltip text="clear filter">
				<button class="clear-btn" on:click={clear}><FaIcon icon="close" /></button>
			</Tooltip>
		</div>
	{/if}
	<label for="project-filter" class:show={selectedItem == undefined}>[filter project]</label>
	<select
		class="expandable"
		id="project-filter"
		bind:this={select}
		bind:value={selectedItem}
		on:change={() => onChanged(selectedItem?.filterTarget ?? undefined)}
	>
		<option value={undefined}></option>
		{#each filterItems as filter (filter.name)}
			<option value={filter}>
				{filter.name}
			</option>
		{/each}
	</select>
	{#if selectedIcon}
		<div class="icon__container">
			<FaIcon icon={selectedIcon} />
		</div>
	{/if}
</div>

<style>
	.filter__container {
		display: flex;
		justify-content: flex-end;
		position: relative;
	}

	.icon__container {
		position: absolute;
		transition: var(--productive-transition);
		transition-delay: 0.2s;
		color: var(--light-grey);
		font-size: 1.5em;
		padding: 0.6rem 0.9rem;
		pointer-events: none;
	}

	.expandable:hover + .icon__container,
	.expandable:focus + .icon__container {
		display: none;
	}

	.expandable {
		max-width: 2.2em;
		transition: var(--productive-transition);
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

	label.show:has(+ .expandable:hover),
	label.show:has(+ .expandable:focus) {
		display: block;
	}

	label {
		position: absolute;
		z-index: 1;
		display: none;
		margin: 1rem 2.2rem;
		transition: var(--productive-transition);
	}

	select {
		border: none;
		padding: 0.5rem 1rem 0.5rem 1rem;
		background-color: var(--bg1);
		color: var(--highlight);
		font-size: 1.5rem;
		font-family: var(--font-family);
	}

	select:hover {
		cursor: pointer;
		background-color: var(--mid-grey);
	}

	option {
		background-color: var(--bg1);
		color: var(--primary);
		font-family: var(--font-family);
		font-size: 1.2rem;
	}

	select::after {
		margin-right: 1em;
	}

	.clear-btn__container {
		margin: auto 0.5rem auto auto;
	}

	button.clear-btn {
		width: 2.2rem;
		height: 2.2rem;
		border-radius: 50%;
		border: none;
		background-color: var(--bg1);
		color: var(--highlight);
		transition: var(--productive-transition);
	}

	button.clear-btn:hover {
		background-color: var(--mid-grey);
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

		.icon__container {
			display: none;
		}
	}
</style>

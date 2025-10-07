<script lang="ts">
	import Filter from './Filter.svelte';

	export let onFilterChanged: (project: ProjectType | undefined) => void;
	export let projects: ProjectType[];
	let selectedItem: ProjectType | undefined;
	let selectedIcon: string | undefined = undefined;

	const projectFilters: FilterType<ProjectType>[] = projects.map((p) => {
		return {
			name: p.name,
			icon: p.icon,
			filterTarget: p
		};
	});

	$: selectedIcon = selectedItem?.icon ?? "xmark";

</script>

<Filter {onFilterChanged} filterItems={projectFilters} selectedIcon={selectedIcon} bind:selectedItem/>

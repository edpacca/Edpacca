<script lang="ts">
	import Filter from "./Filter.svelte";

	export let onFilterChanged: (project: ProjectType | undefined) => void;
	export let projects: ProjectType[];

	const projectFilters: FilterType<ProjectType>[] = projects.map((p) => {
		return {
			name: p.name,
			icon: p.icon,
			filterTarget: p,
		};
	});
</script>

<Filter {onFilterChanged} filterItems={projectFilters} />

<script lang="ts">
	import Filter from './Filter.svelte';

	export let onFilterChanged: (project: ProjectType | undefined) => void;
	export let projects: ProjectType[];
	export let selectedProject: ProjectType | undefined;
	let selectedIcon: string | undefined = undefined;

	const toProjectFilterType = (project: ProjectType) => {
		return {
			name: project.name,
			icon: project.icon,
			filterTarget:project
		}
	}

	const projectFilters: FilterType<ProjectType>[] = projects.map((p) => {
		return toProjectFilterType(p);
	});

	$: selectedProjectFilterType = selectedProject ? toProjectFilterType(selectedProject) : undefined;
	$: selectedIcon = selectedProject?.icon ?? 'filter';
</script>

<Filter onFilterChanged={onFilterChanged} filterItems={projectFilters} selectedIcon={selectedIcon} selectedItem={selectedProjectFilterType}/>

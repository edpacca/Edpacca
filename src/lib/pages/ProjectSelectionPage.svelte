<script lang="ts">
	import { selectedProject, selectProject } from '../../store';
	import Floating from '$lib/components/creative/Floating.svelte';
	import MagicIconSelector from '$lib/components/creative/MagicIconSelector.svelte';
	import OpenCloseBook from '$lib/components/creative/OpenCloseBook.svelte';
	import { PROJECTS } from '$lib/data/projectData';

	let isBookOpen = $state(false);

	const onSelect = (project: ProjectType | undefined) => {
		selectProject(project);
		isBookOpen = false;
	};
</script>

{#if isBookOpen || $selectedProject }
    <MagicIconSelector
        projects={PROJECTS}
        onProjectSelect={onSelect}
        selectedProject={$selectedProject}
    />
{/if}
<div class="book__container">
    <Floating>
        <OpenCloseBook bind:isOpen={isBookOpen} />
    </Floating>
    {#if !selectedProject}
    <div class="caption">{isBookOpen ? 'why are you here?' : 'Open the book'}</div>
    {/if}
</div>

<style>
    .book__container {
		margin-top: 3em;
		z-index: 1;
		text-align: center;
	}

</style>

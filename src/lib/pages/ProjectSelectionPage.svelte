<script lang="ts">
	import { selectedProject, selectProject } from '../../store';
	import Floating from '$lib/components/creative/Floating.svelte';
	import MagicIconSelector from '$lib/components/creative/MagicIconSelector.svelte';
	import OpenCloseBook from '$lib/components/creative/OpenCloseBook.svelte';
	import { PROJECTS } from '$lib/data/projectData';
	import { goto } from '$app/navigation';
	import { flip } from 'svelte/animate';

	let isBookOpen: boolean;

	const onSelect = (project: ProjectType | undefined) => {
		const url = `/projects/${project?.id}`;
		goto(url);
	};
</script>

{#if isBookOpen || $selectedProject }
<div transition:flip>
	<MagicIconSelector
		projects={PROJECTS}
		onProjectSelect={onSelect}
		selectedProject={$selectedProject}/>
</div>
{/if}
<div class="book__container">
    <Floating>
        <OpenCloseBook bind:isOpen={isBookOpen} />
    </Floating>
    {#if !$selectedProject}
    <div class="caption">{isBookOpen ? 'why are you here?' : 'Tome of Projects'}</div>
    {/if}
</div>

<style>
    .book__container {
		margin-top: 3em;
		z-index: 1;
		text-align: center;
	}

</style>

<script lang="ts">
	import { getProjectData } from '../../data/projectData';
	import FaIcon from '../utils/FaIcon.svelte';

	export let projectId: string;

	let isHovered = false;

	const project = getProjectData(projectId);
	const url = `/projects/${project?.id}`;

	const slideIn = (_node: HTMLElement) => {
		return {
			duration: 100,
			css: (t: number, u: number) => `transform: scaleX(${t}) translateX(${u * 100}%)`
		};
	};
</script>

{#if project}
	<div
		class="icon-link__container"
		role="tooltip"
		on:mouseenter={() => {
			isHovered = true;
		}}
		on:mouseleave={() => {
			isHovered = false;
		}}
	>
		{#if isHovered}
			<div class="name-tag" transition:slideIn>
				{project.name}
			</div>
		{/if}
		<a href={url}>
			<FaIcon icon={project.icon} size="1.5em" />
		</a>
	</div>
{/if}

<style>
	.icon-link__container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.name-tag {
		background-color: var(--black-50);
		padding: 0.5em;
		padding-right: 2.2em;
		position: absolute;
		right: 0em;
		white-space: nowrap;
		border-radius: 8px 0 0 8px;
	}

	a {
		color: var(--highlight);
		z-index: 1;
	}

	a:hover {
		color: var(--white);
	}
</style>

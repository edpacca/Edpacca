<script lang="ts">
	import type { PageData } from "./$types";
	import ProjectPreview from "../../lib/components/ProjectPreview.svelte";
	import { DnDMaps } from "$lib/data/dndBattleMapLinks";
  import BackButton from "$lib/components/BackButton.svelte";
	export let data: PageData;

	const getNumberOfPosts = (projectId: string): number => {
		if (projectId == "dnd") {
			return DnDMaps.length;
		}
		return data.posts.filter((p) => p.projectId === projectId).length;
	};

	const getIconName = (projectId: string): string => {
		return projectId == "dnd" ? "map" : "newspaper"
	};
</script>

<BackButton text="Home" icon="home" urlRef="/"/>
<br/>
<div class="project-list">
	{#each data.projects as project}
		{#if project.id == "dnd"}
			<ProjectPreview {project} numberOfPosts={getNumberOfPosts(project.id)} icon={getIconName(project.id)} />
		{:else}
			<ProjectPreview {project} numberOfPosts={getNumberOfPosts(project.id)} />
		{/if}
	{/each}
</div>

<style>
	.project-list {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}
</style>

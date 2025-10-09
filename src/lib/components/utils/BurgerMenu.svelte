<script lang="ts">
	import FaIcon from './FaIcon.svelte';
	export let isOpen = false;
	export let icon = "bars";
	const toggle = () => {
		isOpen = !isOpen;
	};
</script>

<button on:click={toggle}>
	<FaIcon icon={icon} />
</button>
{#if isOpen}
	<div class="burger-menu">
		<slot />
	</div>
{/if}

<style>
	button {
		background: none;
		border-radius: var(--border-radius);
		border: 1px solid var(--primary);
		height: 2.5em;
		width: 2.5em;
		color: var(--primary);
		position: absolute;
	}

	button:hover {
		background-color: var(--primary-50);
	}

	.burger-menu {
		position: absolute;
		top: 2em;
	}
</style>

<script lang="ts">
	import FaIcon from './FaIcon.svelte';

	export let icon: string;
	export let text: string;
	export let color: string;
	export let onClick: () => void;

	export let active: boolean = false;
</script>

<button style={`color: ${color};`} class:active on:click={onClick}>
	<FaIcon {icon} size="4em" />
	<div class="btn-text">
		{text}
	</div>
</button>

<style>
	button {
		background: none;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border: none;
		border-radius: 12px;
		padding: 1rem;
	}

	button.active {
		background-color: var(--primary-25);
	}

  button.active, button.active .btn-text {
    color: var(--highlight-inverse) !important;
  }

	.btn-text {
		color: var(--primary);
		font-size: 1.2rem;
		font-weight: 800;
		margin-top: 0.3em;
	}

	button:hover:not(.active),
	button:hover:not(.active) .btn-text {
		color: var(--highlight) !important;
	}
</style>

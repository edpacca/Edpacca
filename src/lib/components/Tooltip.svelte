<script lang="ts">
    import { fade } from "svelte/transition";
	
	export let text = "";
	
	const offset = 10;
	let isHovered = false;
	let x: number;
	let y: number;

	const mouseOver = (event: MouseEvent) => {
		isHovered = true;
		x = event.pageX + offset;
		y = event.pageY + offset;
	}

	const mouseMove = (event: MouseEvent) => {
		x = event.pageX + offset;
		y = event.pageY + offset;
	}

	const mouseLeave = () => {
		isHovered = false;
	}

</script>

<div
	on:mouseover={mouseOver}
	on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}
	on:focus={() => { isHovered = true; }}
	on:focusout={mouseLeave}>
	<slot/>
</div>

{#if isHovered}
	<div 
		style="top: {y}px; left: {x}px;"
		class="tooltip"
		in:fade={{delay: 800}}>
		{text}
	</div>
{/if}


<style>
	.tooltip {
		position: fixed;
		z-index: 50;
		background-color: var(--black-50);
		color: var(--white);
		padding: 0.2rem;
		margin: 0.2rem 0;
		border-radius: 10%;
	}
</style>
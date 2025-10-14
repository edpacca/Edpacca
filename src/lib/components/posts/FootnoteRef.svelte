<script lang="ts">
	export let text: string;
	export let ref: string = '*';
	export let anchor: string;
</script>

<a href={`#${anchor}`} on:click={() => (window.location.href = `#${anchor}`)}>
	{text}<sup>{ref}</sup>
</a>

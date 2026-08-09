<script lang="ts">
    import PaintDot from '../PaintDot.svelte';

    import { PAINT_COLOURS } from '$lib/data/paintColourData';

export const da_palette = [
	PAINT_COLOURS['army_painter_temple_gate_teal'],
	PAINT_COLOURS['aluminium_gold'],
	PAINT_COLOURS['vallejo_flat_earth'],
	PAINT_COLOURS['vallejo_magenta'],
];
</script>

<div class="horizontal">
    {#each da_palette as paint (paint)}
        <PaintDot paint={paint} />
    {/each}
</div>

<style>
    .horizontal {
        position: relative;
        display: flex;
        gap: 1em;
        justify-content: space-around;
        padding: 1em;
    }
</style>

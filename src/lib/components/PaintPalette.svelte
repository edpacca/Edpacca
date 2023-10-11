<script lang="ts">
    import type { PaintColourType } from "$lib/data/paintColours";
    import PaintColour from "./PaintColour.svelte";
    export let paints: PaintColourType[];
</script>

{#each paints as paint}
    <PaintColour paint={paint}/>
{/each}
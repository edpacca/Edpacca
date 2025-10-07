<script lang="ts">
    import type { PaintColourType } from "$lib/data/paintColourData";
    import PaintColour from "./PaintColour.svelte";
    export let paints: PaintColourType[];
</script>

{#each paints as paint (paint)}
    <PaintColour paint={paint}/>
{/each}

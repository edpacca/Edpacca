<script lang="ts">
    import type { PaintColourType } from '$lib/data/paintColourData';
    import PaintDot from './PaintDot.svelte';
    export let paint: PaintColourType;
</script>

<div class="colour__container">
 <PaintDot paint={paint}/>
    {#if paint.url}
        <a href={paint.url} class="details">
            <div class="name">
                {paint.name}
            </div>
            {#if paint.range}
                <div class="range">
                    {paint.range}
                </div>
            {/if}
        </a>
    {:else}
        <div class="details">
            <div class="name">
                {paint.name}
            </div>
            {#if paint.range}
                <div class="range">
                    {paint.range}
                </div>
            {/if}
        </div>
    {/if}
</div>

<style>
    .colour__container {
        display: grid;
        grid-template-columns: 4rem 1fr;
        align-items: center;
        gap: 1.5em;
        margin: 0.5em;
    }

    .name {
        font-weight: bold;
    }

    .range {
        font-style: italic;
    }

    a {
        color: var(--primary);
    }
</style>

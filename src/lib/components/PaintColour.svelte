<script lang="ts">
    import type { PaintColourType } from "$lib/data/paintColourData";
    export let paint: PaintColourType;
</script>

<div class="colour-container">
    <div class="colour" style="--fill-colour: {paint.code}">
    </div>
    {#if paint.url}
        <a href={paint.url} class="details">
            <div class="name">
                {paint.name}
            </div>
            {#if paint.range }
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
            {#if paint.range }
                <div class="range">
                    {paint.range}
                </div>
            {/if}
        </div>
    {/if}
</div>

<style>
    .colour-container {
        display: grid;
        grid-template-columns: 4rem 1fr;
        align-items: center;
        gap: 1.5em;
        margin: 0.5em;
    }

    .colour {
        border-radius: 100%;
        height: 4rem;
        width: 4rem;
        background-color: var(--fill-colour);
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
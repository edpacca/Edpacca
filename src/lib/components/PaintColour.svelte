<script lang="ts">
    import type { PaintColourType } from "$lib/data/paintColours";

    export let paint: PaintColourType;
</script>

<div class="colour-container">
    <div class="colour" style="--fill-colour: {paint.code}">
    </div>
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
</div>

<style>
    .colour-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.5em;
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
</style>
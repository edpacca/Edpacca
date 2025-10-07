<script lang="ts">
    export let buttons: { fnc: () => void, title: string }[]
</script>

<div class="control-container">
        <div class="controls" style={`--num-buttons: ${buttons.length}`}>
            {#each buttons as btn (btn.title)}
                <button class="button1" on:click={btn.fnc}>{btn.title}</button>
            {/each}
        </div>
</div>

<style>
    .controls {
        display: grid;
        grid-template-columns: repeat(var(--num-buttons), 1fr);
        justify-content: center;
        align-items: center;
        padding: 1em;
        gap: 1em;
    }

    button {
        min-width: 4em;
        box-shadow: 0 0 5px var(--primary-50);
    }

    button:hover {
        box-shadow: 0 0 10px var(--highlight);
    }
</style>

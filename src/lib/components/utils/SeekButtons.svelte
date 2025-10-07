<script lang="ts">
    import FaIcon from "./FaIcon.svelte";

    export let onForward: () => void;
    export let onBackward: () => void;
    
</script>
<div class="seek-button-container">
    <button on:click={onBackward}>
        <FaIcon icon="caret-left"/>
    </button>
    <button on:click={onForward}>
        <FaIcon icon="caret-right"/>
    </button>
</div>

<style>
    button {
        background: none;
        border: none;
        color: var(--primary);
        font-size: 4em;
    }

    button:hover {
        color: var(--highlight)
    }
</style>
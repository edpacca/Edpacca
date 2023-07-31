<script lang="ts">
    import FaIcon from "./FaIcon.svelte";
    export let isOpen = false;
    const toggle = () => { 
        isOpen = !isOpen;
    };
</script>

<button on:click={toggle}>
 <FaIcon icon={"bars"}/>
</button>
{#if isOpen}
    <div class="burger-menu">
        <slot/>
    </div>
{/if}

<style>
    button {
        background: none;
        border-radius: var(--border-radius);
        border: 1px solid var(--primary);
        height: 2em;
        width: 2em;
        color: var(--primary);
        position: absolute;
    }

    button:hover {
        background-color: var(--primary-50);
    }

    .burger-menu {
        position: absolute;
        top: 2em;
    }
</style>
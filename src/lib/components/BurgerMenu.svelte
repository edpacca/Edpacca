<script lang="ts">
    import FaIcon from "./FaIcon.svelte";
    let isOpen = false;
    const toggle = () => { isOpen = !isOpen; console.log("test") };
</script>

<button on:click={toggle}>
 <FaIcon icon={"bars"}/>
</button>
{#if isOpen}
    <slot/>
{/if}

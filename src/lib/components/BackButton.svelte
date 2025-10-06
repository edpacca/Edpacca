<script lang="ts">
    import { grow } from "$lib/utils";
    import FaIcon from "./FaIcon.svelte";

    export let text: string;
    export let urlRef: string | undefined = undefined;
    export let icon: string | undefined = undefined;
    let isHovered = false;

</script>

<a href={urlRef}
on:mouseenter={() => {isHovered = true;}}
on:mouseleave={() => {isHovered = false;}}>
    <button class="button1">
        <FaIcon icon={"angle-left"}/>
        {#if isHovered}
            <div class="project-name" transition:grow>{text}</div>
        {/if}
        {#if icon}
            <FaIcon icon={icon}/>
        {/if}
    </button>
</a>


<style>
    a:hover {
        text-decoration: none;
    }
</style>

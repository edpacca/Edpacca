<script lang="ts">
    import { onMount } from "svelte";
    import { getDarkTheme, isUsingDarkTheme } from "../../store";
    import FaIcon from "./FaIcon.svelte";
    import { toggleDarkTheme } from "../theme";

    export let callback: () => void;

    const toggle = () => {
        toggleDarkTheme(!$isUsingDarkTheme);
        callback();
    }

    onMount(() => {
        $isUsingDarkTheme = getDarkTheme();
    });
</script>

<button on:click={toggle} class={$isUsingDarkTheme ? "dark" :" light"}>
    <FaIcon icon={$isUsingDarkTheme ? "moon" : "sun"}/>
</button>

<style>
    button {
        height: 2em;
        width: 2em;
        border-radius: 100%;
        border: none;
        transition: var(--transition-time);
    }

    .dark:hover {
        color: var(--highlight);
    }

    .light:hover {
        background: var(--highlight);
    }

    .dark {
        background: var(--black);
        color: var(--white);
    }

    .light {
        background: var(--white);
        color: var(--black);
    }
</style>
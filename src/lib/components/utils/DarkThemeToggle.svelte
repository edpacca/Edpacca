<script lang="ts">
    import { isUsingDarkTheme } from "../../../store";
    import FaIcon from "./FaIcon.svelte";
    import Tooltip from "./Tooltip.svelte";

    export let callback: () => void;

    const toggle = () => {
        $isUsingDarkTheme = !$isUsingDarkTheme;
        callback();
    }
</script>

<Tooltip text="Toggle dark theme">
    {#if $isUsingDarkTheme}
    <button on:click={toggle} class="dark">
        <FaIcon icon={"moon"}/>
    </button>
    {:else}
    <button on:click={toggle} class="light">
        <FaIcon icon={"sun"}/>
    </button>
    {/if}
</Tooltip>

<style>
    button {
        height: 2.5em;
        width: 2.5em;
        border-radius: 100%;
        border: none;
        transition: var(--transition-time);
        animation: flipper 300ms ease-out;
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

    @keyframes flipper {
        0% {
            transform: scaleX(1.0);
        }
        50% {
            transform: scaleX(-1.0);
        }
        99% {
            transform: scaleX(1.0);
        }
    }
</style>
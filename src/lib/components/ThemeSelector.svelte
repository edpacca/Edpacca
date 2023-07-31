<script lang="ts">
    import { setHighlight } from "$lib/theme";
    import { currentColourTheme, isUsingDarkTheme } from "../../store";
    import Tooltip from "./Tooltip.svelte";

    let isMenuOpen = false;
    export let callback: () => void;

    const themes = [
        "gold",
        "teal",
        "sky",
        "magenta"
    ]

    const toggleMenu = () => { 
        isMenuOpen = !isMenuOpen;
    }

    const setTheme = (theme: string) => {
        setHighlight(theme);
        $currentColourTheme = theme;
        isMenuOpen = false;
        callback();
    }

    $: themeType = $isUsingDarkTheme ? "bright" : "dark";
    $: filteredThemes = themes.filter(th => th !== $currentColourTheme);
</script>

<div class="theme-selector">
    <Tooltip text={"choose theme"}>
        <button 
            style={`background-color: var(--${$currentColourTheme}-${themeType})`}
            on:click={toggleMenu}>
        </button>
    </Tooltip>
    {#if isMenuOpen}
        <ul>
            {#each filteredThemes as theme}
                <li>
                    <button
                        style={`background-color: var(--${theme}-${themeType})`}
                        on:click={() => setTheme(theme)}>
                    </button>
                </li>
            {/each}
        </ul>
    {/if}
</div>


<style>
    .theme-selector {
        display: flex;
        align-items: center;
    }

    button {
        height: 2em;
        width: 2em;
        border-radius: 100%;
        border: none;
        transition: var(--transition-time);
    }

    button:hover {
        opacity: 0.5;
    }

    ul {
		position: relative;
		padding: 0;
		margin: 0;
        margin-left: 0.5em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

    li button {
        opacity: 0.5;
    }

    li button:hover {
        opacity: 1;
    }
</style>
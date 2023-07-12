<script lang="ts">
    import Tooltip from "./Tooltip.svelte";

    export let icon: string;
    export let link: string;
    export let text: string;

    const iconPath = `/icons/icons.svg#${icon}`;
</script>

<Tooltip text={text}>
    <a href={link} target="_blank">
        <!-- <img src={iconPath} alt={`${icon} icon`}/> -->
        <svg
            class={$$props.class}
            viewBox={"0 0 100 100"}>
            <use href={iconPath}/>
        </svg>
    </a>
</Tooltip>

<style>
    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    svg {
        height: 2rem;
        transition: var(--transition-time);
        fill: white;
    }

    svg:hover {
        fill: var(--color-theme-2);
    }
</style>
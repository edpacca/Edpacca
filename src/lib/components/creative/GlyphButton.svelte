<script lang="ts">
	import RunicCircle from "./RunicCircle.svelte";

    export let text: string;
    export let onClick: () => void;
</script>
<button onclick={onClick}>
    <div class="runic__container">
        <RunicCircle/>
    </div>
    {text}

</button>

<style>
    button {
        position: relative;
        font-size: 1.1rem;
        height: 6rem;
        width: 6rem;
        text-transform: uppercase;
        font-family: Vecna;
        border: none;
        background: none;
        color: var(--highlight);
        transition: 200ms;
    }

    button:hover {
        font-size: 1.2rem;
        color: var(--white);
    }

    .runic__container {
        position: absolute;
        top: -0.8em;
        left: -0.8em;
        animation: rotate linear 10s infinite;
        fill: var(--highlight);
        opacity: 0.3;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>

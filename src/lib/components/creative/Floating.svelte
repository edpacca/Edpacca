<script lang="ts">
    export let offset: number;
</script>

<div class="floating__container floating-animation" style={`--offset: ${offset}s`}>
    <slot/>
</div>

<style>
    .floating__container {
        border: 1px solid red;
        cursor: pointer;

    }

    .floating-animation {
        animation: float 2s infinite ease-in-out;
        animation-delay: var(--offset);
    }

    @keyframes float {
        0% {
            transform: translateY(0em) skewX(0);
        }
        50% {
            transform: translateY(1em) skewX(4deg);
        }
        100% {
            transform: translateY(0em) skewX(0);
        }
    }
</style>

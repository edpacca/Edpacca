<script lang="ts">
    export let offset: number;
</script>

<div class="floating__container floating-animation" style={`--offset: ${offset}s`}>
    <slot/>
</div>

<style>
    .floating__container {
        border: 1px solid red;

    }

    .floating-animation {
        animation: float 2s infinite ease-in-out;
        animation-delay: var(--offset);
    }

    @keyframes float {
        0% {
            transform: translateY(0em);
        }
        50% {
            transform: translateY(1em);
        }
        100% {
            transform: translateY(0em);
        }
    }
</style>

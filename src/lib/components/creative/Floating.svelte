<script lang="ts">
    export let offset: number = 0;
</script>

<div class="floating__container floating-animation" style={`--offset: ${offset}s`}>
    <slot/>
</div>

<style>
    .floating__container {
        cursor: pointer;
    }

    .floating-animation {
        animation: float 2s infinite ease-in-out;
        animation-delay: var(--offset);
    }

    @keyframes float {
        0% {
            transform: translateY(0em) skew(0deg, 0deg);
        }
        25% {

            transform: translateY(0.25em) skew(1deg, 1deg);
        }
        50% {
            transform: translateY(0.5em) skey(0deg, 0deg);
        }
        75% {
            transform: translateY(0.25em) skew(-1deg, -1deg);
        }
    }

</style>

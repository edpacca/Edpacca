<script lang="ts">
	import FaIcon from '../utils/FaIcon.svelte';
	export let footnote: FootnoteMeta;
</script>

<div class="footnote__container">
    <!-- svelte-ignore a11y_missing_attribute -->
    <a name={footnote.anchor}>
        {#if footnote.title}
            <h3>
                {footnote.title}
                {#if footnote.titleIcon}
                <FaIcon icon={footnote.titleIcon} />
                {/if}
                <sup>{footnote.ref}</sup>
            </h3>
        {:else}
            <sup>{footnote.ref}</sup>
        {/if}
    </a>
    <span class="italic">{@html footnote.text}</span>
</div>

<style>
    .footnote__container {
        margin-bottom: 1rem;
    }

    span {
        color: var(--highlight);
    }

    h3 {
        margin-bottom: 0.25rem;
    }

</style>

<script lang="ts">
    import { sanitizeScriptTags } from '$lib/utils';
    import FaIcon from '../utils/FaIcon.svelte';
	export let footnote: FootnoteMeta;
</script>

<div class="footnote__container">
    <!-- svelte-ignore a11y_missing_attribute -->
    <a id={footnote.anchor}>
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
    <!-- eslint-disable svelte/no-at-html-tags -->
    <span class="italic">{@html sanitizeScriptTags(footnote.text)}</span>
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

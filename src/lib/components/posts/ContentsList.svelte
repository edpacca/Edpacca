<script lang="ts">
    import FaIcon from "$lib/components/utils/FaIcon.svelte";
    export let contents: [string, string, string][];
</script>

<ul class="contents-list">
    {#each contents as content (content)}
        <li>
            <FaIcon icon={content[2]}/>
            <a href={`#${content[1]}`}>[content[0]]</a>
        </li>
    {/each}
</ul>

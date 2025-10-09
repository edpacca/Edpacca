<script lang="ts">
	import Arrow from "../icons/Arrow.svelte";
    export let previous: PostMeta | undefined = undefined;
    export let next: PostMeta | undefined = undefined;
</script>

<div class="post-navigation__container">
    {#if previous}
        <a href={`/${previous.slug}`}>
            <span class="arrow__container">
                <Arrow class="left highlight"/>
            </span>
            {previous.title ?? ""}
        </a>
    {:else}
        <div></div>
    {/if}

    {#if next}
        <a href={`/${next.slug}`}>
            {next.title ?? ""}
            <span class="arrow__container">
                <Arrow class="highlight"/>
            </span>
        </a>
    {:else}
        <div></div>
    {/if}

</div>

<style>
    .post-navigation__container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem 4em 0.25rem;
    }

    a {
        font-size: 1.8rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }

    .arrow__container {
        height: 2.2rem;
    }

    @media screen and (max-width: 600px) {
        a {
            font-size: 1.2rem;
        }

        .arrow__container {
            height: 1.4rem;
        }
    }

    @media screen and (max-width: 800px) {
        .post-navigation__container {
            margin: 1rem 0 0.25rem;
        }

        a {
            font-size: 1.4rem;
        }

        .arrow__container {
            height: 1.8rem;
        }
    }
</style>

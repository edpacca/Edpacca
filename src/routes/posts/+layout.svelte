<script lang="ts">
    import type { LayoutData } from "./$types";
    export let data: LayoutData;
    const posts: PostAttributes[] = data.posts;
</script>

<div class="main-container">
    <div class="sidebar">
        {#each posts as post}
            <div class="post-info">
                <a href={post.url}>{new Date(post.date).toLocaleDateString()}</a>
            </div>
        {/each}
    </div>
    <div class="post-container">
        <slot/>
    </div>
</div>

<style>
    .post-container {
        margin: var(--margin);
        position: relative;
    }

    .sidebar {
        border-right: 3px solid var(--grey);
        padding: var(--margin);
        overflow-y: scroll;
        overflow: auto;
    }

    .main-container {
        display: grid;
        grid-template-columns: auto 1fr;
    }

    @media (max-width: 800px) {
        .sidebar {
            display: none;
        }

        .main-container {
            grid-template-columns: 1fr;
        }
    }
</style>


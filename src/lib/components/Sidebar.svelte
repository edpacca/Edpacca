<script lang="ts">
    import { isSidebarVisible } from "../../store";
    export let posts: Post[];
    const toggleSidebar = () => {
        console.log("toggled");
        $isSidebarVisible = !$isSidebarVisible;
    }
</script>

<button on:click={toggleSidebar}>Hide</button>
{#if $isSidebarVisible}
    <div class="sidebar">
        {#each posts as post}
            <div class="post-info">
                <a href={post.slug}>{new Date(post.date).toLocaleDateString()}</a>
            </div>
        {/each}
    </div>
{/if}

<style>
    button {
        position: absolute;
        top: 0;
        left: 136px;
    }
    .sidebar {
        position: fixed;
        background-color: var(--black-50);
        height: 100%;
        top: 0;
        left: 0;
        border-right: 3px solid var(--grey);
        padding: var(--margin);
        overflow-y: scroll;
        overflow: auto;
    }
</style>
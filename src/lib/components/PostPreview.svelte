<script lang="ts">
    import ProjectIcon from "./ProjectIcon.svelte";
    import paintbrush from "svelte-awesome/icons/paintBrush";

    export let post: Post;
    const date = new Date(post.date).toLocaleDateString("en-GB", { weekday: undefined, year: 'numeric', month: 'short', day: 'numeric' });
</script>


<div class="post-summary-container">
    <div>{date}</div>
    <a href={post.url} class="title">{post.title}</a>
    <div class="icon">
        <ProjectIcon icon={paintbrush}/>
    </div>
</div>

<style>
    .post-summary-container {
        display: flex;
        align-items: center;
        gap: 1em;
        border: 2px solid white;
        border-radius: 8px;
        background-color: var(--black-50);
        transition: var(--transition-time) ease-in-out;
        cursor: pointer;
        padding: var(--margin);
    }

    .title {
        font-weight: bold;
        font-size: 1.2em;
    }

    .description {
        color: black;
        margin-top: 1em;
        font-style: italic;
    }

    .icon {
        margin-left: auto;
        right: var(--margin);
    }
</style>
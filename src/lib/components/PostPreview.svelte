<script lang="ts">
    import { getProjectData } from "../ts/data/projectData";
    import FaIcon from "./FaIcon.svelte";
    export let post: Post;
    const date = new Date(post.date).toLocaleDateString("en-GB", { weekday: undefined, year: 'numeric', month: 'short', day: 'numeric' });
    const project = post.projectId ? getProjectData(post.projectId) : undefined;
    const projectUrl = `/projects/${project?.id}`;
</script>


<div class="post-summary-container">
    <div>{date}</div>
    <a href={post.url} class="title">{post.title}</a>
    <div class="project-info">
        {#if project}
            <a href={projectUrl}>{project.name}</a>
        {/if}
        {#if project && project.icon}
            <FaIcon icon={project.icon}/>
        {/if}
    </div>
</div>

<style>
    .post-summary-container {
        display: flex;
        align-items: center;
        gap: 1em;
        border-radius: 8px;
        background-color: var(--black-50);
        transition: var(--transition-time) ease-in-out;
        padding: var(--margin);
    }

    .title {
        font-weight: bold;
        font-size: 1.2em;
    }

    .project-info {
        margin-left: auto;
        right: var(--margin);
        color: var(--color-theme-2);
        display: flex;
        gap: 1em;
        text-transform: uppercase;
    }

    .project-info a {
        color: var(--color-theme-2);
    }
</style>
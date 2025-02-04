<script lang="ts">
    import FaIcon from "./FaIcon.svelte";
    export let project: ProjectType;
    export let numberOfPosts = 0;
    export let numberOfAltItem = 0;
    export let altIcon: string | undefined = undefined;
</script>

<div class="summary-container">
    <div class="icon-title-grid">
        <FaIcon icon={project.icon} size="1.5em"/>
        <a href={`/projects/${project.id}`} class="title">
            {project.name}
        </a>
        <div class="post-count">
            {#if numberOfPosts > 0}
                {numberOfPosts}
                <FaIcon icon={"newspaper"}/>
            {/if}
            {#if numberOfAltItem && altIcon}
                {numberOfAltItem}
                <FaIcon icon={altIcon}/>
            {/if}
        </div>
    </div>
</div>

<style>
    .icon-title-grid {
        display: grid;
        grid-template-columns: 2em 1fr 2em;
        align-items: center;
        justify-content: left;
        gap: 1em;
        color: var(--highlight);
    }

    .post-count {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.3em;
    }
</style>

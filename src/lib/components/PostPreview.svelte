<script lang="ts">
    import { TECHNOLOGY_ICONS } from "$lib/data/codeLangData";
import { formatDate } from "../utils";
    import FaIcon from "./FaIcon.svelte";
    import PostCoverImage from "./PostCoverImage.svelte";
    import ProjectIconLink from "./ProjectIconLink.svelte";
  import Tooltip from "./Tooltip.svelte";
    export let post: Post;
    export let hasProjectLink = true;
    export let hasPostImage = false;
    export let icons: string[] = [];
    const isPinnedPost = post.pinned;
    const date = formatDate(post.date);
</script>


<div class="summary-container">
    <div class="info-container">
        {#if hasPostImage}
            <PostCoverImage post={post}/>
        {/if}
        <div>
            {#if !isPinnedPost}
                <div class="date">{date}</div>
            {/if}
            <a href={`/${post.slug}`} class="title two-line-clamp" class:pinned={isPinnedPost}>{post.title}</a>
        </div>
    </div>
    {#if hasProjectLink}
    <div class="project-link-container">
        <ProjectIconLink projectId={post.projectId}/>
    </div>
    {/if}
    {#if icons.length > 0}
        <div class="tech-icons-container">
            {#each icons as icon}
                <Tooltip text={icon} isHovered={true}>
                    <img
                        src={`/icons/devicon/${icon.toLowerCase()}/${icon.toLowerCase()}-original.svg`}
                        alt={icon}
                        class:invert={icon == "Express"}/>
                </Tooltip>
            {/each}
        </div>
    {/if}
</div>

<style>
    .pinned {
        color: var(--highlight);
    }

    .summary-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .info-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-right: auto;
        gap: 1em;
        padding-right: var(--margin);
    }

    
    .project-link-container {
        margin-left: auto;
        margin-right: var(--margin);
        color: var(--highlight);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        text-transform: uppercase;
    }

    .tech-icons-container {
        align-self: flex-end;
        display: flex;
        flex-direction: row;
        gap: 1em;
    }

    img {
        height: 2em;
        width: 2em;
        text-align: center;
        line-height: 2em;
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
    }

    img.invert {
        -webkit-filter: invert(1);
        filter: invert(1);
    } 
    
    img:hover {
        -webkit-filter: grayscale(0);
        filter: grayscale(0);
        color: var(--highlight);
    }
</style>
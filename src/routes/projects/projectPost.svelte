<script lang="ts">
    import { importMarkdown } from "$lib/ts/markdown";
    import type { ProjectSummary } from "./projectTypes";

    export let project: ProjectSummary;

    const postFiles = importMarkdown(`/posts/${project.id}/`);

    
</script>
<script lang="ts">
    import HomePage from "$lib/pages/HomePage.svelte";
    import PostPreviewList from "../lib/components/PostPreviewList.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<HomePage/>
<PostPreviewList posts={data.posts}/>
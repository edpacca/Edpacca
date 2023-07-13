<script lang="ts">
    import HomePage from "$lib/pages/HomePage.svelte";
    import PostPreviewList from "../lib/components/PostPreviewList.svelte";
    import { postAttributes } from "../store";
</script>

<HomePage/>
<PostPreviewList posts={$postAttributes}/>


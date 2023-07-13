<script lang="ts">
    import Sidebar from "$lib/components/Sidebar.svelte";
    import { postAttributes } from "../../store";
</script>

<div class="post-container">
    <slot/>
</div>

<style>
    .post-container {
        position: relative;
        margin: var(--margin);
    }
</style>


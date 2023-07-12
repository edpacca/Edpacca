<script>
    import { page } from '$app/stores';
</script>

{#if $page.error}
<h1>{$page.status}: {$page.error.message}</h1>
{:else}
<h1>{$page.status}: an error occured</h1>
{/if}
<script lang="ts">
    import Icon from "svelte-awesome";
    import type { IconType } from "svelte-awesome/components/Icon.svelte";
    export let icon: IconType;
</script>

<Icon data={icon} />
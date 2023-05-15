<script lang="ts">
    export let icon;
    export let link: string;
    export let text: string;
</script>

<div>
    <a href={link}>{text}</a>
</div>
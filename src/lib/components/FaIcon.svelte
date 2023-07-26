<script lang="ts">
    export let icon: string;
    export let size: string = "1em"
</script>

<i style={`font-size: ${size}`} class={`fa fa-${icon}`}/>
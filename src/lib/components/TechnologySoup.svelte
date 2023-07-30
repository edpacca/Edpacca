<script lang="ts">
    export let technologies: string[]

    const techAccumulation: Record<string, number>[] = [];

    // technologies.forEach(t => t in techAccumulation.keys ? techAccumulation += 1 : techAccumulation. )
</script>

{#each technologies as tech}
    <p>{tech}</p>
{/each}
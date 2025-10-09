<script lang="ts">
  import TechnologySoup from "./TechnologySoup.svelte";

    const wordMagnitudes: Record<string, number> = {
       "Test": 0.05,
       "Test2": 0.05
    }

</script>

<table>
    <thead>
        <th>Word</th>
        <th>Magnitude</th>
    </thead>
    <tbody>
        {#each Object.values(wordMagnitudes.entries) as wordMagnitude}
            <tr>
                <td>{wordMagnitude.key()}</td>
                <td>{wordMagnitudes[wordMagnitude.key()]}</td>
            </tr>
        {/each}
    </tbody>
</table>

<TechnologySoup technologies={wordMagnitudes}/>


<style>
    table {
        border: 1px solid var(--primary-50);
        width: 100%;
    }

    th, td {
        border: 1px solid var(--primary-50);
    }
</style>

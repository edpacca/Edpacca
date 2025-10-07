<script>
    import FaIcon from "$lib/components/utils/FaIcon.svelte";
    import ZoomImage from "$lib/components/utils/ZoomImage.svelte";
    import { DnDMaps } from "$lib/data/dndBattleMapLinks";
</script>


{#each DnDMaps as map (map.name)}
    <div class="map-container">
        <div class="map-name">{map.name}</div>
        <div class="map-img-container">
                {#await fetch(map.imgSrc)}
                    <FaIcon icon="map"/>
                    <p>the goblins are looking for this map...</p>
                {:then result}
                    <ZoomImage src={result.url} alt={map.name} hoverEnabled={true}/>
                    <p class="description">
                        {map.description ?? ""}
                    </p>
                    {#if map.url}
                        <p>
                            <a href={map.url} target="_blank">Download <FaIcon icon="download"/></a>
                        </p>
                    {/if}
                {:catch}
                    <FaIcon icon="poo"/>
                    <strong>The goblins were unable to locate this map...</strong>
                {/await}
        </div>
    </div>
    <hr/>
{/each}


<style>
    .map-name {
        font-family: Vecna;
        color: var(--highlight);
        font-size: 1.7em;
        text-align: center;
    }

    .description {
        font-style: italic;
    }

    .map-img-container {
        margin: 0.75em 0;
    }

    .map-container {
        margin: 1em;
    }

    hr {
        margin: 2rem 0;
    }
</style>

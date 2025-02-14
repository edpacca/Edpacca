<script>
    import FaIcon from "$lib/components/FaIcon.svelte";
import ZoomImage from "$lib/components/ZoomImage.svelte";
import { DnDMaps } from "$lib/data/dndBattleMapLinks";

</script>


{#each DnDMaps as map}
    <div class="map-container">
        <div class="map-name">{map.name}</div>
        <div class="map-img-container">
            <ZoomImage src={map.imgSrc} alt={map.name} hoverEnabled={true}/>
        </div>
        <p class="description">
            {map.description ?? ""}
        </p>
        {#if map.url}
            <p>
                <a href={map.url} target="_blank">Download <FaIcon icon={"download"}/></a>
            </p>
        {/if}
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

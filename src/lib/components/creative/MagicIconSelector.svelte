<script lang="ts">
	import { PROJECTS } from "$lib/data/projectData";
	import { randomMinMax } from "$lib/utils/maths";
	import FaIcon from "../utils/FaIcon.svelte";
	import Floating from "./Floating.svelte";

    const icons = PROJECTS.map(p => p.icon);


</script>

<div class="magic-icons__container">
    <div class="floating-icons__container">
        {#each icons as icon, i}
            <Floating offset={i}>
                <FaIcon icon={icon} size={"3em"}/>
            </Floating>
        {/each}
    </div>
</div>

<style>
    .magic-icons__container {
        padding: 1em;
    }

    .floating-icons__container {
        display: flex;
        gap: 1em;
    }
</style>

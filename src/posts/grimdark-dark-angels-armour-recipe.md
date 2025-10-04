---
title: Grimdark Dark Angels Armour Recipe
description: A simple set of steps that I use to paint the armour for the bulk of my Dark Angels army.
date: 11/10/2023
projectId: miniatures
published: true
icon: paintbrush
---

<script>
    import PaintingTutorial from "../lib/components/painting/PaintingTutorial.svelte";
    import { DA_ARMOUR_PAINTS } from "../lib/data/paintColourData";
    import { DA_ARMOUR_RECIPE_STEPS } from "../lib/data/paintingStepsData";

    const coverImage = "images/miniatures/gallery/devastator-sergeant-alpha.webp";
</script>

The classic "Dark Angels Green" paint that GW made back when I started collecting ~2000 was a nice fairly saturated green, whereas the newer "Caliban Green" is a little muted for my taste. It's also quite a cold green and I have ended up with quite a warm scheme for my army. I use Vallejo colours and managed to come up with a simple but effective set of steps for getting an armour colour and feel that I like, without being too fiddly. The Dark Angels accent colour is an off-white cream, which normally is a little too clean for my taste. I have come up with a method for creating a grittier, more parchment like highlight colour that really makes this army feel grimdark.

<PaintingTutorial
    paints={DA_ARMOUR_PAINTS}
    coverImage={coverImage}
    paintingSteps={DA_ARMOUR_RECIPE_STEPS}
    alt="Dark angels sergeant"
    title="Dark angels armour recipe"/>

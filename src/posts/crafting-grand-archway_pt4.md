---
title: Grand Archway - part IV
description: A build blog for my most involved terrain project to date - a large stone archway.
date: 11/01/2025
projectId: miniatures
published: false
dev: true
icon: institution
previous: { slug: "crafting-grand-archway_pt3", title: "Part III" }
---
<script>
    import ImgHoverToggle from "../lib/components/utils/ImgHoverToggle.svelte";
    import FaIcon from "../lib/components/utils/FaIcon.svelte";
    import FootnoteRef from "../lib/components/posts/FootnoteRef.svelte";
    import CarouselGallery from "../lib/components/layout/CarouselGallery.svelte";
    import ImgGrid from "../lib/components/layout/ImgGrid.svelte";
    import ContentsList from "../lib/components/posts/ContentsList.svelte";
    import PaintingTutorial from "../lib/components/painting/PaintingTutorial.svelte";
    import { ARCH_CRAFT_PAINTS } from "../lib/data/paintColourData";
    import { ARCHWAY_RECIPE_STEPS } from "../lib/data/paintingStepsData";

    const coverImage = "miniatures/arch/painting/p8_3.webp";
</script>

![Ready for paint...](miniatures/arch/build_3/s34_1.webp)

The first step is to get a mixture of modge-podge (pretty much PVA glue) and black paint slathered over the whole thing. After it dried I applied at least another coat (possibly 2). I removed the tiles for this and did them seperately. This provides a thick a protective layer that is needed if I want to use this on the tabletop. It simultaneously provides a black base coat from which to start building up colour. I batched this step with some other terrain pieces that I had been working on, like the stairs you can see in the background.

![Already looking better!](miniatures/arch/painting/p1_0.webp)
![The tileset](miniatures/arch/painting/p2_0.webp)

The top of the thing took a lot more layers before it was looking nice and smooth, but it was very satisfying once it was dry.

![It took several layers to get the top nice and smooth](miniatures/arch/painting/p3_0.webp)

<PaintingTutorial
    paints={ARCH_CRAFT_PAINTS}
    coverImage={coverImage}
    paintingSteps={ARCHWAY_RECIPE_STEPS}
    alt="Archway terrain piece"
    title="Archway painting recipe"/>


<!-- ![s](miniatures/arch/painting/p4_0.webp)
![df](miniatures/arch/painting/p4_1.webp)
![aa](miniatures/arch/painting/p4_2.webp)
![asd](miniatures/arch/painting/p4_3_p6.webp)
![capasd](miniatures/arch/painting/p5_0.webp)
![](miniatures/arch/painting/p5_1.webp)
![](miniatures/arch/painting/p7_0.webp)
![](miniatures/arch/painting/p8_0.webp)
![](miniatures/arch/painting/p8_1.webp)
![](miniatures/arch/painting/p8_2.webp)
![](miniatures/arch/painting/p8_3.webp) -->

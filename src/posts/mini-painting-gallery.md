---
title: Mini Painting Gallery
description: A selection of paintjobs that I'm proud of
date: 10/13/2023
projectId: miniatures
published: true
icon: image
pinned: true
---

<script>
    import GridGallery from "../lib/components/GridGallery.svelte";
    import { MINIATURE_GALLERY } from "../lib/data/galleries.ts";

</script>

<br/>

<GridGallery images={MINIATURE_GALLERY}/>

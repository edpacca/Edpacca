<script lang="ts">
    export let post: Post
    const src = post.coverImage 
        ? `/images/${post.coverImage}`
        : "/images/default-cover.webp";
        console.log(src);
</script>

<img src={src} alt={`${post.title} cover image`}/>

<style>
    img {
        height: 100%;
    }
</style>
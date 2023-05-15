<script>
    import IconLink from "$lib/IconLink.svelte";
</script>

<hr/>
<footer>
    <ul>
        <li><IconLink icon={"github"} link={"github"} text={"Github"}/></li>
        <li><IconLink icon={"linkedin"} link={"linkedin"} text={"LinkedIn"}/></li>
        <li><IconLink icon={"instagram"} link={"instagram"} text={"Instagram"}/></li>
    </ul>
</footer>

<style>
    hr {
        margin: 1rem 10%;
    }

    footer {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    ul {
        display: flex;
        flex-direction: row;
        column-gap: 2rem;
    }
</style>
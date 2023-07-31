<script>
    import IconLink from "$lib/components/IconLink.svelte";
    const githubLink = "https://github.com/Edpacca"
    const linkedinLink = "https://www.linkedin.com/in/edward-pace-ab88a971/"
    const instagramLink = "https://www.instagram.com/_edpac_/"
    const researchgateLink = "https://www.researchgate.net/profile/Edward-Pace-2"
</script>

<footer>
    <ul>
        <li><IconLink icon={"github"} link={githubLink} text={"Github"}/></li>
        <li><IconLink icon={"linkedin"} link={linkedinLink} text={"LinkedIn"}/></li>
        <li><IconLink icon={"instagram"} link={instagramLink} text={"Instagram"}/></li>
        <li><IconLink icon={"research-gate"} link={researchgateLink} text={"Research-gate"}/></li>
    </ul>
</footer>

<style>
    footer {
        margin: 5rem 0;
        display: flex;
        justify-content: center;
    }

    ul {
        display: flex;
        flex-direction: row;
        column-gap: 1.2rem;
        list-style: none;
        padding: 0;
    }
</style>
<script>
    import StravaStats from "$lib/components/strava/StravaGoalStats.svelte";
    import MountainCanvas from "../creative/MountainCanvas.svelte";
    const current = Number(10180);
    const target = Number(10000);
</script>

<StravaStats
    target={target}
    current={current}
    goal={"10 km elevation"}
    goalYear={2023}
    lastUpdated={"11/29/2023"}
/>

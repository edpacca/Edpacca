<script>
    import { PUBLIC_STRAVA_CURRENT, PUBLIC_STRAVA_GOAL, PUBLIC_STRAVA_GOAL_YEAR, PUBLIC_STRAVA_LAST_UPDATED, PUBLIC_STRAVA_TARGET } from "$env/static/public";
    import StravaStats from "$lib/components/StravaGoalStats.svelte";

    const current = Number(PUBLIC_STRAVA_CURRENT);
    const target = Number(PUBLIC_STRAVA_TARGET);
</script>

<StravaStats
    target={target}
    current={current}
    goal={PUBLIC_STRAVA_GOAL}
    goalYear={Number(PUBLIC_STRAVA_GOAL_YEAR)}
    lastUpdated={PUBLIC_STRAVA_LAST_UPDATED}
/>
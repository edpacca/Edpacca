<script>
    import { PUBLIC_STRAVA_CURRENT, PUBLIC_STRAVA_GOAL, PUBLIC_STRAVA_GOAL_YEAR, PUBLIC_STRAVA_LAST_UPDATED, PUBLIC_STRAVA_TARGET } from "$env/static/public";
    import FaIcon from "$lib/components/FaIcon.svelte";
    import MountainCanvas from "$lib/components/MountainCanvas.svelte";
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
<MountainCanvas progress={current / target}/>
<div class="caption">Scene rendered with HTML Canvas. The position of the light shows my goal progress.</div>

<table>
    <thead>
        <tr>
            <th>Year</th>
            <th>Goal</th>
            <th>Result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2023</td>
            <td>10k elevation</td>
            <td class="result"><FaIcon icon={"check"}/></td>
        </tr>
        <tr>
            <td>2024</td>
            <td>run Grouse Grind</td>
            <td></td>
        </tr>
    </tbody>
</table>

<style>
    .caption {
        text-align: center;
    }

    table {
        margin: 2rem auto;
        min-width: 50%;
    }

    tr, td {
        text-align: center;
    }

    .result {
        color: var(--highlight);
    }
</style>
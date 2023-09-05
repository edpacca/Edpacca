<script>
    import MountainCanvas from "$lib/components/MountainCanvas.svelte";
    import StravaStats from "$lib/components/StravaStats.svelte";
    import { dayOfYear, formatDate } from "$lib/utils";

    const currentGoalString = "10km elevation";
    const year = 2023;


    const target = 10000;
    const current = 7156;
    const lastUpdated = formatDate(new Date("2023-09-05").toString());

    const percentage = (current / target * 100);
    const schedule = percentage - (dayOfYear(new Date()) / 365 * 100);
    $: onTrack = schedule >= 0;
</script>


<h3>Annual Goal ({year}): {currentGoalString}</h3>
<div class="progress">
    <div class="progress">{current}/{target}</div>
    <div>last updated: {lastUpdated}</div>
    <div class="percentage">
        {percentage.toFixed(0)}%
        <div class="red" class:green={onTrack}>({onTrack ? "+" : "-"}{schedule.toFixed(1)}%)</div>
    </div>
    
</div>
<MountainCanvas/>

<style>
    .red {
        color: red;
    }

    .green {
        color: lime;
    }
</style>
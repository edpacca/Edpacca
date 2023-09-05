<script>
    import MountainCanvas from "$lib/components/MountainCanvas.svelte";
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

<div class="big-score">{current}m</div>
<div class="percentage">
    {percentage.toFixed(0)}%
    <div class="red" class:green={onTrack}>({onTrack ? "+" : "-"}{schedule.toFixed(1)}% {onTrack ? "ahead" : "behind"})</div>
</div>
<div>last updated: {lastUpdated}</div>
<h3>Current Goal ({year}): {currentGoalString}</h3>
<MountainCanvas progress={current / target}/>

<style>
    .red {
        color: red;
    }

    .green {
        color: lime;
    }

    .big-score {
        font-size: 3em;
        font-weight: bold;
    }

    .percentage {
        display: flex;
        gap: 0.5em;
    }
</style>
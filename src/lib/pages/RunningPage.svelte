<script>
    import { PUBLIC_STRAVA_CURRENT_PROGRESS, PUBLIC_STRAVA_LAST_UPDATED } from "$env/static/public";
    import MountainCanvas from "$lib/components/MountainCanvas.svelte";
    import StravaBadge from "$lib/components/StravaBadge.svelte";
    import { dayOfYear, formatDate } from "$lib/utils";

    const goal = "10km elevation";
    const year = 2023;
    const target = 10000;
    const current = Number(PUBLIC_STRAVA_CURRENT_PROGRESS);
    const lastUpdated = formatDate(new Date(PUBLIC_STRAVA_LAST_UPDATED).toString());
    const percentage = (current / target * 100);
    const schedule = percentage - (dayOfYear(new Date()) / 365 * 100);
    $: onTrack = schedule >= 0;
</script>

<div class="running-header-container">
    <div>
        <div>{year} Goal: {goal}</div>
        <div class="score-badge-container">
            <div class="big-score">{current}m</div>
            <div class="badge">
                <StravaBadge/>
            </div>
        </div>
        <div class="percentage">
            {percentage.toFixed(0)}%
            <div class="red" class:green={onTrack}>({onTrack ? "+" : "-"}{schedule.toFixed(1)}% {onTrack ? "ahead" : "behind"})</div>
        </div>
        <div>last updated: {lastUpdated}</div>
    </div>
    <div>
        <!-- spacing div -->
    </div>
</div>
<MountainCanvas progress={current / target}/>
<div class="caption">Scene rendered with HTML Canvas</div>

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
        color: var(--highlight);
    }

    .percentage {
        display: flex;
        gap: 0.5em;
    }

    .running-header-container {
        margin-bottom: 1em;
        display: grid;
        grid-template-columns: auto 1fr;
    }

    .score-badge-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.2em 0;
    }

    .badge {
        margin-left: auto;
    }

    .caption {
        text-align: center;
    }
</style>
<script lang="ts">
	import StravaBadge from '$lib/components/strava/StravaBadge.svelte';
	import { dayOfYear, formatDate } from '$lib/utils/date';

	export let target: number;
	export let current: number;
	export let goalYear: number;
	export let goal: string;
	export let lastUpdated: string;
	const percentage = (current / target) * 100;
	const schedule = percentage - (dayOfYear(new Date()) / 365) * 100;
	const onTrack = schedule >= 0;

	$: goalComplete = current >= target;
</script>

<div class="running-header__container">
	<div>
		<div>{goalYear} Goal: {goal}</div>
		<div class="score-badge__container">
			<div class="big-score">{current}m</div>
			<div class="badge">
				<StravaBadge />
			</div>
		</div>
		<div class="percentage" class:green={goalComplete}>
			{percentage.toFixed(0)}%
			{#if !goalComplete}
				<div class="red" class:green={onTrack}>
					({onTrack ? '+' : ''}{schedule.toFixed(1)}% {onTrack ? 'ahead' : 'behind'})
				</div>
			{/if}
		</div>
		<div>last updated: {formatDate(lastUpdated)}</div>
	</div>
	<div>
		<!-- spacing div -->
	</div>
</div>

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

	.running-header__container {
		margin-bottom: 1em;
		display: grid;
		grid-template-columns: auto 1fr;
	}

	.score-badge__container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0.2em 0;
	}

	.badge {
		margin-left: auto;
	}
</style>

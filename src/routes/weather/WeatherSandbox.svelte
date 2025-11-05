<script lang="ts">
	import Compass from './Compass.svelte';
	import Scene from './Scene.svelte';
	import { getDirectionFromAngle, getWeatherFromCode, Weather } from './weatherData';

	const weather = Weather.Cloudy;
	const windDirection = getDirectionFromAngle(10);
	const time = new Date();
</script>

<div class="compass">
	<Compass angle={10} />
</div>

<div class="weather-text">
	<div class="key">Time:</div>
	<div class="val">{time.toLocaleTimeString()}</div>
	<div class="key">Temperature:</div>
	<div class="val">{15} °C</div>
	<div class="key">Weather:</div>
	<div class="val">{weather}</div>
	<div class="key">Wind speed:</div>
	<div class="val">{20} km/h</div>
	<div class="key">Wind direction:</div>
	<div class="val">{windDirection}</div>
</div>

<div class="scene__container">
	<Scene {time} />
</div>

<style>
	.weather-text {
		display: grid;
		grid-template-columns: auto 1fr;
		font-size: 1.3em;
		column-gap: 0.5em;
		background-color: var(--black-50);
		padding: 0.4em;
		border-radius: 6px;
	}

	.key {
		text-align: right;
	}

	.val {
		font-weight: bold;
	}

	.compass {
		width: 8rem;
		margin: auto;
	}

	.scene__container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	@media screen and (min-width: 600px) {
		.weather-text {
			position: absolute;
			top: 80px;
			left: var(--margin);
		}

		.compass {
			position: absolute;
			top: 80px;
			right: var(--margin);
		}
	}
</style>

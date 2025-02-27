<script lang="ts">
	import WeatherControls from "$lib/components/weather/WeatherControls.svelte";
	import type { PageData } from "./$types";
	import Compass from "./Compass.svelte";
	import Scene from "./Scene.svelte";
	import { getDirectionFromAngle, getWeatherFromCode } from "../../lib/data/weatherData";

	export let data: PageData;

	let weather = getWeatherFromCode(data.weathercode);
	const windDirection = getDirectionFromAngle(data.winddirection);
	const time = new Date(data.time);
</script>

<div class="weather controls">
	<WeatherControls bind:currentWeather={weather} />
</div>
<div class="scene-container">
	<Scene {time} {weather} windspeed={data.windspeed} />
	<div class="compass">
		<Compass angle={data.winddirection} />
	</div>
	<div class="weather-text">
		<div class="key">Time:</div>
		<div class="val">{time.toLocaleTimeString()}</div>
		<div class="key">Temperature:</div>
		<div class="val">{data.temperature} °C</div>
		<div class="key">Weather:</div>
		<div class="val">{weather}</div>
		<div class="key">Wind speed:</div>
		<div class="val">{data.windspeed} km/h</div>
		<div class="key">Wind direction:</div>
		<div class="val">{windDirection}</div>
	</div>
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

	.scene-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		position: relative;
	}

	@media screen and (min-width: 600px) {
		.weather-text {
			position: absolute;
			top: calc(3 * var(--margin));
			left: calc(3 * var(--margin));
		}

		.compass {
			position: absolute;
			top: calc(3 * var(--margin));
			right: calc(3 * var(--margin));
		}
	}
</style>

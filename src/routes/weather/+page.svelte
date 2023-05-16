<script lang="ts">
    import { get } from "svelte/store";
    import type { PageData } from "./$types";
    import { getDirectionFromAngle, getWeatherFromCode } from "./weather";

	export let data: PageData;

	const time = new Date(data.time).toLocaleTimeString();
	const weather = getWeatherFromCode(data.weathercode);
	const windDirection = getDirectionFromAngle(data.winddirection);
</script>

<div class="weather-text">
	<div class="key">Time:</div>
	<div class="val">{time}</div>
	<div class="key">Temperature:</div>
	<div class="val">{data.temperature} °C</div>
	<div class="key">Weather:</div>
	<div class="val">{weather}</div>
	<div class="key">Wind speed:</div>
	<div class="val">{data.windspeed} km/h</div>
	<div class="key">Wind direction:</div>
	<div class="val">{windDirection}</div>
</div>

<style>
	.weather-text {
		display: grid;
		grid-template-columns: auto 1fr;
		font-size: 1.3em;
		column-gap: 0.5em;
	}

	.key {
		text-align: right;
	}

	.val {
		font-weight: bold;
	}
</style>
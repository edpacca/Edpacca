<script lang="ts">
	import WeatherControls from "$lib/components/creative/weather/WeatherControls.svelte";
	import type { PageData } from "./$types";
	import Compass from "./Compass.svelte";
	import Scene from "./Scene.svelte";
	import { getDirectionFromAngle, getWeatherFromCode } from "$lib/data/weatherData";
	import Clock from "$lib/components/creative/clock/Clock.svelte";

	export let data: PageData;

	let weather = getWeatherFromCode(data.weathercode);
	const windDirection = getDirectionFromAngle(data.winddirection);
	let time = new Date(data.time);

	let elapsedTime: number;
	let frameRate: number;

	let showDiagnostics: boolean = true;
	let setHours: number = time.getHours();
	let setMinutes: number = time.getMinutes();

	$: updateTime(setHours, setMinutes);

	function updateTime(hour: number, minutes: number) {
		const newTime = time;
		newTime?.setHours(hour, minutes, 0);
		time = newTime;
	}
</script>

<div class="controls__container">
	<WeatherControls bind:currentWeather={weather} />
	<Clock bind:timeHours={setHours} bind:timeMinutes={setMinutes}/>
	{#if import.meta.env.DEV}
		<div>
			<label for="fps">diagnostics</label>
			<input type="checkbox" id="fps" bind:checked={showDiagnostics} />
		</div>
	{/if}
</div>
<div class="scene-container">
	<Scene bind:time {weather} windspeed={data.windspeed / 3} bind:elapsedTime bind:frameRate />
	<div class="compass">
		<Compass angle={data.winddirection} />
	</div>
	<div class="weather-text">
		<div class="key">Latt/Long:</div>
		<div class="val">{`${data.latitude}, ${data.longitude}`}</div>
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
	{#if showDiagnostics && frameRate}
		<div class="diagnostics-container">
			<div>
				fps: {frameRate?.toFixed(1)}
			</div>
		</div>
	{/if}
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

	.controls__container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 2rem;
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

	.diagnostics-container {
		position: absolute;
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

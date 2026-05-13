<script lang="ts">
	import { Weather, WEATHERS, WEATHER_ATTRIBUTES } from "$lib/data/weatherData";
	import BigWeatherButton from "./BigWeatherButton.svelte";

	export let currentWeather: Weather;

	const setCurrentWeather = (weather: Weather) => {
		currentWeather = weather;
	};

	const attributes = (weather: Weather) => {
		return WEATHER_ATTRIBUTES[weather];
	};
</script>

<div>
	<div class="button-row">
		{#each WEATHERS as weather}
			<BigWeatherButton {weather} bind:currentWeather attributes={attributes(weather)} onClick={() => setCurrentWeather(weather)} />
		{/each}
	</div>
</div>

<style>
	.button-row {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
</style>

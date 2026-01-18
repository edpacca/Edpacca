<script lang="ts">
	import type { WeatherAttributes } from "$lib/data/weatherData";
	import type { Weather } from "$lib/data/weatherData";
	import BigIconButton from "$lib/components/utils/BigIconButton.svelte";

	export let currentWeather: Weather;

	export let weather: Weather;
	export let attributes: WeatherAttributes;
	export let onClick: () => void;
	$: isActive = currentWeather == weather;
</script>

<BigIconButton icon={attributes.icon} color={attributes.color} text={attributes.name} {onClick} bind:active={isActive} />

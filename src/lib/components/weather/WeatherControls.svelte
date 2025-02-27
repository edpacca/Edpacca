<script lang="ts">
  import { Weather, WEATHERS, WEATHER_ATTRIBUTES } from "../../../routes/weather/weatherData";
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
      <BigWeatherButton
        {weather}
        bind:currentWeather
        attributes={attributes(weather)}
        onClick={() => setCurrentWeather(weather)}
      />
    {/each}
  </div>
</div>

<style>
  .button-row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-auto-columns: min-content;
    margin: auto;
  }
</style>

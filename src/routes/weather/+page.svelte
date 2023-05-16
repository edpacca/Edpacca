<script lang="ts">
	const openMeteoBaseUrl = "https://api.open-meteo.com/v1/forecast"

	// default to edinburgh
	let location = {
		latitude: 55.953251,
		longitude: -3.188267
	}

	let weather;

	const fetchWeather = async (latitude: number, longitude: number) => {
		const request = `${openMeteoBaseUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
		const result = await fetch(request);
		const data = await result.json();
		console.log(data);
		return data;		
	}

	const getWeatherAtLocation = () => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(position => {
				location = {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				}
			});
		} else {
			console.log("getting weather from edinburgh");
		}
		
		weather = fetchWeather(location.latitude, location.longitude);
	}

	getWeatherAtLocation();
</script>

<div>
	<div>time: position of sun</div>
	<div>temp: colour</div>
	<div>code: clear, cloudy, rain, snow, fog, thunder</div>
</div>
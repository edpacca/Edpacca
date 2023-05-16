import type { PageServerLoad } from './$types';

const openMeteoBaseUrl = "https://api.open-meteo.com/v1/forecast"

const fetchWeather = async (latitude: number, longitude: number) => {
	const request = `${openMeteoBaseUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
	return fetch(request)
}

export const load = (async ({ cookies }) => {

	let location = {
		latitude: 55.953251,
		longitude: -3.188267
	}

	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(position => {
			location = {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude
			}
		});
	}
	console.log(location);
	  
	const weatherRespose = await fetchWeather(location.latitude, location.longitude)
	console.log(weatherRespose);
	
	return weatherRespose;
}) satisfies PageServerLoad;


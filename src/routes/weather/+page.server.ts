// import { error } from '@sveltejs/kit';
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const prerender = false;

/* eslint-disable */
const openMeteoBaseUrl = "https://api.open-meteo.com/v1/forecast";
// default to edinburgh
let location = {
	latitude: 55.953251,
	longitude: -3.188267,
};

const fetchWeather = async (latitude: number, longitude: number) => {
	const request = `${openMeteoBaseUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
	const result = await fetch(request);
	const data = await result.json();
	return data;
};

export const load = (async () => {
	if ("geolocation" in navigator) {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				location = {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				};
			},
			(err) => {
				console.log("error", err);
			},
		);
	} else {
		console.log(typeof window);
		console.log("geolocation permissions blocked, getting weather from Edinburgh instead");
	}
	try {
		console.log(`using coords: ${location.latitude} ${location.longitude}`);
		const weather = await fetchWeather(location.latitude, location.longitude);

		const currentWeather = weather.current_weather ?? undefined;
		return {
			latitude: weather.latitude,
			longitude: weather.longitude,
			...currentWeather,
		};
	} catch {
		throw error(404, "Wasn't able to get any weather data.\n\n It's probably raining");
		return {
			temperature: 16.3,
			windspeed: 18.4,
			winddirection: 78,
			weathercode: 17,
			is_day: 1,
			time: Date.now(),
		};
	}
}) satisfies PageServerLoad;

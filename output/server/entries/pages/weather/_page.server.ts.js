import { e as error } from "../../../chunks/index.js";
const openMeteoBaseUrl = "https://api.open-meteo.com/v1/forecast";
let location = {
  latitude: 55.953251,
  longitude: -3.188267
};
const fetchWeather = async (latitude, longitude) => {
  const request = `${openMeteoBaseUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  const result = await fetch(request);
  const data = await result.json();
  console.log(data);
  return data;
};
const load = async () => {
  if (typeof window !== "undefined" && "geolocation" in window.navigator) {
    window.navigator.geolocation.getCurrentPosition((position) => {
      location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
    });
  } else {
    console.log("geolocation permissions blocked, getting weather from Edinburgh instead");
  }
  try {
    const weather = await fetchWeather(location.latitude, location.longitude);
    return weather.current_weather ?? void 0;
  } catch {
    throw error(404, "Wasn't able to get any weather data.\n\n It's probably raining");
  }
};
export {
  load
};

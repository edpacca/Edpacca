import { Animator } from "$lib/canvas/Animator";
import { Cloud } from "$lib/canvas/weather/animate/Cloud";
import { Rain } from "$lib/canvas/weather/animate/Rain";
import { Snow } from "$lib/canvas/weather/animate/Snow";
import { Thunder } from "$lib/canvas/weather/animate/Thunder";
import { randIntBetween } from "$lib/utils";
import { Weather } from "../../lib/data/weatherData";

export class WeatherSceneController extends Animator {
	height: number;
	width: number;
	animators: Animator[];
	windspeed: number;
	currentWeather: Weather;

	constructor(context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, windspeed: number, weather: Weather) {
		super(context);
		this.animators = [];
		this.height = canvasHeight;
		this.width = canvasWidth;
		this.windspeed = windspeed / 2;
		this.currentWeather = weather;

		this.setWeather(weather);
	}

	animate(): void {
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.animators.forEach((a) => a.animate());
	}

	clearAnimators() {
		this.animators.splice(0, this.animators.length);
	}

	setWindspeed(windspeed: number) {
		this.windspeed = windspeed;
		this.setWeather(this.currentWeather);
	}

	setWeather(weather: Weather) {
		this.currentWeather = weather;
		this.clearAnimators();

		switch (weather) {
			case Weather.Clear:
				this.setClear();
				break;
			case Weather.Cloudy:
				this.setCloudy();
				break;
			case Weather.Overcast:
				this.setOvercast();
				break;
			case Weather.Rain:
				this.setCloudy();
				this.setRain();
				this.setCloudy();
				break;
			case Weather.Drizzle:
				this.setCloudy();
				this.setDrizzle();
				break;
			case Weather.Snow:
				this.setCloudy();
				this.setSnow();
				break;
			case Weather.Thunder:
				this.setRain();
				this.setCloudy();
				this.setThunder();
				break;
			case Weather.Fog:
				this.setFog();
				break;
			default:
				break;
		}
	}

	setThunder() {
		const thunder = new Thunder(this.ctx, this.height, this.width, 0.5);
		this.animators.push(thunder);
	}

	setClear() {
		return;
	}

	setCloudy() {
		for (let i = 0; i < 10; i++) {
			this.animators.push(
				new Cloud(
					this.ctx,
					randIntBetween(0, this.width - 100),
					randIntBetween(0, this.height / 2),
					randIntBetween(20, 40),
					randIntBetween(7, 15),
					this.windspeed,
					"gray",
				),
			);
		}
	}

	setOvercast() {}

	setRain() {
		const rainFg = new Rain(this.ctx, 20, 0.3, this.windspeed, 10);
		const rainBg = new Rain(this.ctx, 10, 0.8, this.windspeed, 5);

		this.animators.push(rainFg);
		this.animators.push(rainBg);
	}

	setDrizzle() {
		const rain = new Rain(this.ctx, 10, 0.3, this.windspeed, 5);

		this.animators.push(rain);
	}

	setSnow() {
		const snowFg = new Snow(this.ctx, 4, 0.9, this.windspeed, 40);
		const snowBg = new Snow(this.ctx, 2, 0.9, this.windspeed, 20);

		this.animators.push(snowFg);
		this.animators.push(snowBg);
	}

	setFog() {
		return;
	}
}

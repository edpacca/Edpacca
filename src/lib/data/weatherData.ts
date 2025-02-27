export enum Weather {
  Clear = "Clear",
  Cloudy = "Cloudy",
  Overcast = "Overcast",
  Fog = "Fog",
  Drizzle = "Drizzle",
  Rain = "Rain",
  Snow = "Snow",
  Thunder = "Thunder",
}

export const WEATHERS = Object.entries(Weather).map((w) => w[1]);

export enum Direction {
  N = "North",
  NE = "North East",
  E = "East",
  SE = "South East",
  S = "South",
  SW = "South West",
  W = "West",
  NW = "North West",
}

export interface WeatherAttributes {
  name: string;
  icon: string;
  color: string;
}

export const WEATHER_ATTRIBUTES: Record<Weather, WeatherAttributes> = {
  Clear: { name: "Clear", color: "gold", icon: "sun" },
  Cloudy: { name: "Cloudy", color: "lightgray", icon: "cloud" },
  Overcast: { name: "Overcast", color: "gray", icon: "cloud" },
  Fog: { name: "Fog", color: "gray", icon: "smog" },
  Drizzle: { name: "Drizzle", color: "lightblue", icon: "cloud-rain" },
  Rain: { name: "Rain", color: "dodgerblue", icon: "cloud-rain" },
  Snow: { name: "Snow", color: "aliceblue", icon: "snowflake" },
  Thunder: { name: "Thunder", color: "darkgray", icon: "cloud-bolt" },
};

/*
Code	Description
0	Clear sky
1, 2, 3	Mainly clear, partly cloudy, and overcast
45, 48	Fog and depositing rime fog
51, 53, 55	Drizzle: Light, moderate, and dense intensity
56, 57	Freezing Drizzle: Light and dense intensity
61, 63, 65	Rain: Slight, moderate and heavy intensity
66, 67	Freezing Rain: Light and heavy intensity
71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
77	Snow grains
80, 81, 82	Rain showers: Slight, moderate, and violent
85, 86	Snow showers slight and heavy
95 *	Thunderstorm: Slight or moderate
96, 99 *	Thunderstorm with slight and heavy hail
*/

export function getWeatherFromCode(code: number): Weather {
  switch (code) {
    case 0:
      return Weather.Clear;
    case 1 | 2:
      return Weather.Cloudy;
    case 3:
      return Weather.Overcast;
    case 45 | 48:
      return Weather.Fog;
    case 51 | 53 | 55 | 56 | 57:
      return Weather.Drizzle;
    case 61 | 63 | 65 | 66 | 67 | 80 | 81 | 82:
      return Weather.Rain;
    case 71 | 73 | 75 | 77 | 85 | 86:
      return Weather.Snow;
    case 95 | 96 | 99:
      return Weather.Thunder;
    default:
      return Weather.Cloudy;
  }
}

export function getDirectionFromAngle(angle: number): Direction {
  if (angle >= 337.5 || angle < 22.5) return Direction.N;
  if (angle >= 22.5 && angle < 67.5) return Direction.NE;
  if (angle >= 67.5 && angle < 112.5) return Direction.E;
  if (angle >= 112.5 && angle < 157.5) return Direction.SE;
  if (angle >= 157.5 && angle < 202.5) return Direction.S;
  if (angle >= 202.5 && angle < 247.5) return Direction.SW;
  if (angle >= 247.5 && angle < 292.5) return Direction.W;
  if (angle >= 292.5 && angle < 337.5) return Direction.NW;
  return Direction.N;
}

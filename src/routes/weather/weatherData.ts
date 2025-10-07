export enum Weather {
	Clear = 'Clear',
	Cloudy = 'Cloudy',
	Overcast = 'Overcast',
	Fog = 'Fog',
	Drizzle = 'Drizzle',
	Rain = 'Rain',
	Snow = 'Snow',
	Thunder = 'Thunder'
}

export enum Direction {
	N = 'North',
	NE = 'North East',
	E = 'East',
	SE = 'South East',
	S = 'South',
	SW = 'South West',
	W = 'West',
	NW = 'North West'
}

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

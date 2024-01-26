import { Coordinates } from './Coordinates.interface';

interface WeatherDTO {
  // The coordinate to get weather info of
  coord?: Coordinates;

  weather?: {
    id: number; // Weahter condition ID
    main: string; // group of weather parameters (Rain, Snow, Clouds etc.)
    description: string;
    icon: number;
  };

  main?: {
    temp: number; // default unit: Kelvin, metric: Celsius
    feelsLike: number;
    pressure: number; // atmospheric pressure on the sea level, hPa
    humidity: number; // %
    tempMin: number;
    tempMax: number;
    seaLevel: number; // atmospheric pressure on the sea level
    grndLevel: number; // atmospheric pressure on the ground level
  };

  visibility?: number; // meter, maximum is 10km

  wind?: {
    spped: number; // meter/sec
    deg: number; // degrees
    gust: number; // meter/sec
  };

  clouds?: {
    all: number; // cloudiness, %
  };

  rain?: {
    oneHour?: number; // mm
    threeHours?: number;
  };

  snow?: {
    oneHour?: number; // mm
    threeHours?: number;
  };

  dt?: string; // time of data calculation, unix, UTC

  sys?: {
    country: string; // country code (GB, JP etc.)
    sunrise: string; // sunrise time, unix, UTC
    sunset: string; // sunset time, unix, UTC
  };

  timezone?: string;
  id?: string;
  name?: string;
}

export type { WeatherDTO };

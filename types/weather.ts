export interface WeatherApiResponse {
  latitude: number;
  longitude: number;
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    weather_code: number;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}

export interface ProcessedWeather {
  current: {
    temperature: number;
    weatherDescription: string;
  };
  daily: {
    date: string;
    weatherDescription: string;
    tempMax: number;
    tempMin: number;
  };
}

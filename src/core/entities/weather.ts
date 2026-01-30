export type UnitSystem = 'metric' | 'imperial';
export type TempUnit = 'celsius' | 'fahrenheit';

export interface Location {
    id:number;
    name: string;
    country: string;
    latitude: number;
    longitude: number;
}

export interface CurrentWeather {
    temperature: number;
    weatherCode: number;
    windSpeed: number;
    windDirection: number;
    humidity: number;
    feelsLike: number;
    precipitation: number;
    isDay: boolean;
}

export interface DailyForecast{
    date:string;
    tempMax:number;
    tempMin: number;
    weatherCode: number;
}

export interface HourlyForecast{
    time:string;
    temperature: number;
    weatherCode: number
}

export interface WeatherData{
    current: CurrentWeather;
    daily: DailyForecast[];
    hourly: HourlyForecast[];
}

export type OpenMeteoResponse = {
    current: {
        temperature_2m: number;
        weather_code: number;
        wind_speed_10m: number;
        relative_humidity_2m: number;
        apparent_temperature: number;
        precipitation: number;
        is_day: number;
        wind_direction_10m: number;
    };
    daily: {
        time: string[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        weather_code: number[];
    };
    hourly: {
        time: string[];
        temperature_2m: number[];
        weather_code: number[];
    };
}
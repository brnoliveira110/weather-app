import { Location, OpenMeteoResponse } from "@/core/entities/weather";

const GEO_API = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

export const WeatherRepository = {
    searchLocation: async(query: string): Promise<Location[]> => {
        const res = await fetch(`${GEO_API}?name=${query}&count=5&language=pt&format=json`);
        const data = await res.json();
        if (!data.results) return [];

        return data.results.map((item:any) => ({
            id: item.id,
            name: item.name,
            country: item.country,
            latitude: item.latitude,
            longitude: item.longitude
        }))
    }
}
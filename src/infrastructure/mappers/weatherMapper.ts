import { WeatherData } from "@/core/entities/weather";
import { z } from "zod";

const OpenMeteoResponseSchema = z.object({
    current: z.object({
        temperature_2m: z.number(),
        weather_code: z.number(),
        wind_speed_10m: z.number(),
        relative_humidity_2m: z.number(),
        apparent_temperature: z.number(),
        precipitation: z.number(),
        is_day: z.number(),
        wind_direction_10m: z.number(),
    }),
    daily: z.object({
        time: z.array(z.string()),
        temperature_2m_max: z.array(z.number()),
        temperature_2m_min: z.array(z.number()),
        weather_code: z.array(z.number()),
    }),
    hourly: z.object({
        time: z.array(z.string()),
        temperature_2m: z.array(z.number()),
        weather_code: z.array(z.number()),
    }),
});


export const mapOpenMeteoResponse = (data: unknown): WeatherData =>{
    try {
        const validatedData = OpenMeteoResponseSchema.parse(data);
        return{
            current:{
                temperature: validatedData.current.temperature_2m,
                weatherCode: validatedData.current.weather_code,
                windSpeed: validatedData.current.wind_speed_10m,
                humidity: validatedData.current.relative_humidity_2m,
                feelsLike: validatedData.current.apparent_temperature,
                precipitation: validatedData.current.precipitation,
                isDay:!!validatedData.current.is_day,
                windDirection:validatedData.current.wind_direction_10m
            },
            daily: validatedData.daily.time.map((t: string, i: number) => ({
                date: t,
                tempMax: validatedData.daily.temperature_2m_max[i],
                tempMin: validatedData.daily.temperature_2m_min[i],
                weatherCode: validatedData.daily.weather_code[i]
            })),
            hourly: validatedData.hourly.time.map((t: string, i:number) => ({
                time:t,
                temperature: validatedData.hourly.temperature_2m[i],
                weatherCode: validatedData.hourly.weather_code[i]
            })).slice(0, 24)
        }
    } catch (error) {
        console.error("Zod validation error:", error);
        throw new Error("Invalid data structure from OpenMeteo API.");
    }
}
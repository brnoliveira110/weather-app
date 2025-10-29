import { ProcessedWeather, WeatherApiResponse } from "@/types/weather";

const API_URL = "https://api.open-meteo.com/v1";

function getWeatherDescription(code: number): string {
  const descriptions: Record<number, string> = {
    0: "Céu limpo",
    1: "Principalmente limpo",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Nevoeiro",
    51: "Garoa leve",
    61: "Chuva leve",
    63: "Chuva moderada",
    80: "Aguaceiros leves",
    95: "Trovoada",
  };
  return descriptions[code] || `Código ${code}`;
}

export async function getForeCast(
  lat: number,
  lon: number
): Promise<ProcessedWeather> {
  const params = new URLSearchParams({
    latitude: lat.toString(),
    longitude: lon.toString(),
    current: "temperature_2m,weather_code",
    daily: "weather_code,temperature_2m_max,temperature_2m_min",
    timezone: "America/Sao_Paulo",
  });

  const url = `${API_URL}/forecast?${params.toString()}`;

  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Falha ao buscar dados do clima: ${res.statusText}`);
  }

  const data: WeatherApiResponse = await res.json();

  return processWeatherData(data);
}

function processWeatherData(data: WeatherApiResponse): ProcessedWeather {
  const { current, daily } = data;

  const processedDaily = daily.time.map((date, index) => ({
    date: new Date(date).toLocaleDateString("pt-BR", { weekday: "short" }),
    weatherDescription: getWeatherDescription(daily.weather_code[index]),
    tempMax: daily.temperature_2m_max[index],
    tempMin: daily.temperature_2m_min[index],
  }));

  return {
    current: {
      temperature: current.temperature_2m,
      weatherDescription: getWeatherDescription(current.weather_code),
    },
    daily: processedDaily.slice(0, 5),
  };
}

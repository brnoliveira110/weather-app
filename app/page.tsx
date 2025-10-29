import { Suspense } from "react";
import Loading from "./loading";
import { getForeCast } from "@/lib/weather";
import WeatherCard from "./components/WeatherCard";

export default async function HomePage() {
  const lat = -23.55;
  const lon = -46.64;

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Previsão do Tempo (Next.js 15)</h1>
      <p>Demonstração de RSC, Suspense, Cache e Error Boundaries.</p>

      <Suspense fallback={<Loading />}>
        <Weather lat={lat} lon={lon} />
      </Suspense>
    </main>
  );
}

async function Weather({ lat, lon }: { lat: number; lon: number }) {
  const weatherData = await getForeCast(lat, lon);

  return <WeatherCard weather={weatherData} locationName="São Paulo" />;
}

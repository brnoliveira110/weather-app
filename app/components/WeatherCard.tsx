import { ProcessedWeather } from "@/types/weather";

interface WeatherCardProps {
  weather: ProcessedWeather;
  locationName: string;
}

export default function WeatherCard({
  weather,
  locationName,
}: WeatherCardProps) {
  const { current, daily } = weather;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "24px",
        borderRadius: "8px",
        maxWidth: "600px",
      }}
    >
      <h2 style={{ marginBottom: "16px" }}>Clima em {locationName}</h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <div style={{ fontSize: "3rem", fontWeight: "bold" }}>
          {current.temperature.toFixed(0)}°C
        </div>
        <p style={{ fontSize: "1.2rem", textTransform: "capitalize" }}>
          {current.weatherDescription}
        </p>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <h3>Próximos 5 dias</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        {daily.map((day) => (
          <div
            key={day.date}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "10px",
              background: "#f9f9f9",
              borderRadius: "4px",
            }}
          >
            <div style={{ fontWeight: "bold" }}>{day.date}</div>
            <div style={{ fontSize: "0.9rem", margin: "4px 0" }}>
              {day.weatherDescription}
            </div>
            <div style={{ fontSize: "0.9rem" }}>
              {day.tempMax.toFixed(0)}° / {day.tempMin.toFixed(0)}°
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

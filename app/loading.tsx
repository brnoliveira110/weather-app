export default function Loading() {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "24px",
        borderRadius: "8px",
        opacity: 0.6,
      }}
    >
      <h2 style={{ marginBottom: "16px" }}>Carregando Clima...</h2>
      <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>--°C</div>
      <p>Carregando descrição...</p>
      <hr style={{ margin: "20px 0" }} />
      <h3>Previsão para os próximos dias...</h3>
    </div>
  );
}

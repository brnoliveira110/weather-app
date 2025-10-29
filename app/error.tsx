"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: "20px", border: "1px solid red", color: "red" }}>
      <h2>Ops! Algo deu errado.</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{
          padding: "8px 16px",
          cursor: "pointer",
          background: "white",
          color: "black",
          border: "1px solid black",
        }}
      >
        Tentar Novamente
      </button>
    </div>
  );
}

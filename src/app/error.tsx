"use client";

export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background: "black",
        color: "white",
        fontSize: "2rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          padding: "1rem",
          margin: "1rem",
          background: "black",
          color: "white",
        }}
      >
        page error
      </h1>
      <button
        style={{
          background: "black",
          color: "white",
          fontSize: "2rem",
          border: "none",
          cursor: "pointer",
          padding: "1rem",
          borderRadius: "5px",
          marginTop: "1rem",
        }}
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}

"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error(props: ErrorProps) {
  useEffect(() => {
    console.error(props.error);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
        // width: "100vw",
        background: "black",
        color: "white",
        fontSize: "2rem",
      }}
    >
      <h1>Ha ocurrido un error. {props.error.message}</h1>
      <button onClick={props.reset}>Intentar de nuevo</button>
    </div>
  );
}

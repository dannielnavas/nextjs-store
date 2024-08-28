"use client";

import { Description } from "app/Components/home/Description";
import { Hero } from "app/Components/home/Hero";
import { useEffect } from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("envio de metricas");
  }, []);

  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  );
}

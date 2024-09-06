import { MainProduct } from "app/Components/home/MainProducts";
import { Metadata } from "next";

// "use cliente"; // Para que se ejecute en el cliente este y los anidados sobre este

export const metadata: Metadata = {
  title: "Lolo Store",
  description: "Welcome to Lolo store",
  keywords: ["Lolo, store", "products"],
};

export default function Home() {
  return (
    <main>
      <MainProduct />
    </main>
  );
}

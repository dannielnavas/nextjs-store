import { Description } from "app/Components/home/Description";
import { Hero } from "app/Components/home/Hero";
import { MainProduct } from "app/Components/home/MainProducts";

// "use cliente"; // Para que se ejecute en el cliente este y los anidados sobre este
export default function Home() {
  return (
    <main>
      <Description />
      <Hero />
      <MainProduct />
    </main>
  );
}

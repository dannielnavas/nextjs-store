import { Description } from "app/Components/home/Description";
import { Hero } from "app/Components/home/Hero";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Hero />
      <Description />
      {children}
    </>
  );
}

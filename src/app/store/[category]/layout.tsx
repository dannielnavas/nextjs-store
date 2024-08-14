export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <h1>Store</h1>
      <nav>Navegación de las categorías</nav>
      {children}
    </main>
  );
}

import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/store">
            <li>Store</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export { Header };

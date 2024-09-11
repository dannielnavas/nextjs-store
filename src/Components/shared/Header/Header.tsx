import { cookies } from "next/headers";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const cookiesStore = cookies();

  const token = cookiesStore.get("accessToken")?.value;

  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/store">
            <li>Store</li>
          </Link>
          <Link href="/test">
            <li>test</li>
          </Link>
        </ul>
        {token ? (
          <p>Hola!</p>
        ) : (
          <Link href="/login">
            <button>Login</button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export { Header };

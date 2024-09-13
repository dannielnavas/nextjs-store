// import { cookies } from "next/headers";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";
import Link from "next/link";

import styles from "./Header.module.css";

import dynamic from "next/dynamic";

const Header = async () => {
  // const cookiesStore = cookies();

  // const token = cookiesStore.get("accessToken")?.value;

  const customer = await validateAccessToken();
  const NoSSRShopingCart = dynamic(() => import("../ShoopingCart"), { ssr: false });

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
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            columnGap: "1rem",
          }}
        >
          {customer?.firstName ? (
            <p>Hola! {customer?.firstName}</p>
          ) : (
            <Link href="/login">
              <button>Login</button>
            </Link>
          )}
          <NoSSRShopingCart />
        </div>
      </nav>
    </header>
  );
};

export { Header };

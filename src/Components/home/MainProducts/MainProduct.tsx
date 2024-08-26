import Image from "next/image";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
} from "react";
import styles from "./MainProducts.module.sass";

const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/api/2023-10/products.json`,
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": process.env.API_KEY_SHOPIFY || "",
        }),
      }
    );
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.error(error);
  }
};

const MainProduct = async () => {
  const products = await getProducts();
  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map(
          (product: {
            images: { src: any }[];
            id: Key | null | undefined;
            title:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | Promise<AwaitedReactNode>
              | null
              | undefined;
          }) => {
            const imageSrc = product.images[0].src;
            return (
              <article key={product.id}>
                <p>{product.title}</p>
                <Image src={imageSrc} fill alt={product.title} loading="eager" />
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export { MainProduct };

import Image from "next/image";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
} from "react";
import styles from "./MainProducts.module.sass";

const MainProduct = async () => {
  const response = await fetch("http://localhost:3000/api");
  const { products } = await response.json();
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
                <Image
                  src={imageSrc}
                  fill
                  alt={product?.title?.toString() ?? ""}
                  loading="eager"
                />
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export { MainProduct };

import { env } from "app/config/env";
import { shopifyUrls } from "./urls";

export const getProducts = async (id?: string): Promise<ProductType[]> => {
  try {
    const apiUrl = id
      ? `${shopifyUrls.products.all}?ids=${id}`
      : shopifyUrls.products.all;
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": env.API_KEY_SHOPIFY,
      }),
      // cache: "no-cache", // no guarda cache
      // cache: "force-cache" // el usuario debe hacerlo de forma manual
      next: {
        revalidate: 10, // valida la cache cada 10 segundos
      },
    });
    const { products } = await response.json();

    const transformerProducts = products.map((product: any) => ({
      id: product.id,
      gql_id: product.variants[0].admin_graphql_api_id,
      title: product.title,
      description: product.body_html,
      price: product.variants[0].price,
      image: product.images[0].src,
      quantity: product.variants[0].inventory_quantity,
      handle: product.handle,
      tags: product.tags,
    }));
    return transformerProducts;
  } catch (error) {
    console.error(error);
  }
};

import { env } from "app/config/env";
import { shopifyUrls } from "./urls";

export const getProducts = async () => {
  try {
    const response = await fetch(shopifyUrls.products.all, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": env.API_KEY_SHOPIFY,
      }),
    });
    const { products } = await response.json();
    console.log(products);
    return products;
  } catch (error) {
    console.error(error);
  }
};

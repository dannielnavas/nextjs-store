import { env } from "app/config/env";
import { shopifyUrls } from "./urls";

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": env.API_KEY_SHOPIFY,
      }),
    });
    const { smart_collections } = await response.json();
    const transformetCollections = smart_collections.map(
      (collection: { id: any; title: any; handle: any; image: any }) => {
        return {
          id: collection.id,
          title: collection.title,
          handle: collection.handle,
        };
      }
    );
    return transformetCollections;
  } catch (error) {
    console.error(error);
  }
};

export const getCollectionProducts = async (collection_id: string) => {
  try {
    const response = await fetch(shopifyUrls.collections.products(collection_id), {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": env.API_KEY_SHOPIFY,
      }),
    });
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.error(error);
  }
};

import { env } from "app/config/env";

export const shopifyUrls = {
  products: {
    all: `${env.HOST_SHOPIFY}/admin/api/2023-10/products.json`,
  },
  collections: {
    all: `${env.HOST_SHOPIFY}/admin/api/2023-10/smart_collections.json`,
    products: (collection_id: string) =>
      `${env.HOST_SHOPIFY}/admin/api/2023-10/collections/${collection_id}/products.json`,
  },
};

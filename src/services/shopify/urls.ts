import { env } from "app/config/env";

export const shopifyUrls = {
  products: {
    all: `${env.HOST_SHOPIFY}/admin/api/2023-10/products.json`,
  },
  collections: {
    all: `${env.HOST_SHOPIFY}/admin/api/2023-10/smart_collections.json`,
  },
};

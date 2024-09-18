import { ProductsWrapper } from "app/Components/Store/ProductsWrapper";
import {
  getCollectionProducts,
  getCollections,
} from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";

export const runtime = "edge";

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params;
  // Consumo de manera paralela de los productos y las colecciones
  let products = [];
  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectedCollectionId = collections.find(
      (collection: { handle: string }) => collection.handle === categories[0]
    ).id;
    products = await getCollectionProducts(selectedCollectionId);
  } else {
    products = (await getProducts()) || [];
  }

  // throw new Error("Error");
  return <ProductsWrapper products={products} />;
}

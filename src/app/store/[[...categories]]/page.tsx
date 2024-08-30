import { ProductsWrapper } from "app/Components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify/products";

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}

export default async function Category(props: CategoryProps) {
  // Consumo de manera paralela de los productos y las colecciones
  const products = await getProducts();
  // const collections = await getCollections();

  const { categories } = props.params;
  // throw new Error("Error");
  return <ProductsWrapper products={products} />;
}

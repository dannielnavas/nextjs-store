// "use client";

import { ProductView } from "app/Components/product/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";
// import { useSearchParams } from "next/navigation";

// import { useParams } from "next/navigation";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  // const params = useParams();
  // const serachParams = useSearchParams();
  // const id = serachParams.get("id");
  // console.log(id);

  const id = searchParams.id;

  const products = await getProducts(id);
  const product = products[0];

  if (!id) redirect("/store"); // con server component

  return <ProductView product={product} />;
}

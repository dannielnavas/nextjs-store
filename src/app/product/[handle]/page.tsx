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

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const id = searchParams.id;

  const products = await getProducts(id);
  const product = products[0];

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.image,
          alt: product.title,
        },
      ],
    },
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

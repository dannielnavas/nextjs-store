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
  const product = products && products.length > 0 ? products[0] : null;

  return {
    title: product?.title || "Default Title",
    description: product?.description || "Default Description",
    keywords: product?.tags || [],
    openGraph: {
      title: product?.title || "Default Title",
      description: product?.description || "Default Description",
      images: [
        {
          url: product?.image || "/default-image.jpg",
          alt: product?.title || "Default Title",
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
  const product = products && products.length > 0 ? products[0] : null;

  if (!id) redirect("/store"); // con server component

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductView product={product} />;
}

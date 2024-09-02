"use client";

import { useSearchParams } from "next/navigation";

import { useParams } from "next/navigation";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default function ProductPage() {
  const params = useParams();
  const serachParams = useSearchParams();
  const id = serachParams.get("id");
  console.log(id);
  return <div>Product Page</div>;
}

const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/api/2023-10/products.json`,
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": process.env.API_KEY_SHOPIFY || "",
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const MainProduct = async () => {
  const product = await getProducts();
  console.log(product);
  // console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <div className="main-product">
      <h1>Main Product</h1>
    </div>
  );
};

export { MainProduct };

"use client";

const MainProduct = () => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <div className="main-product">
      <h1>Main Product</h1>
    </div>
  );
};

export { MainProduct };

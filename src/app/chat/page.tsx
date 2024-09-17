import Chat from "app/Components/chat/chat";
import { getProducts } from "app/services/shopify/products";
import { createAgent } from "app/utils/ia/createAgent";

export default async function ChatPage() {
  const products = await getProducts();

  console.log(products);

  const productsTitles = products ? products.map((product) => product.title) : [];

  console.log(productsTitles);

  const flatProductsTitles = productsTitles.join(", ");

  const agent = createAgent(flatProductsTitles);

  return (
    <>
      <Chat agent={agent} />
    </>
  );
}

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
  gql_id: string;
};

type CartItem = {
  merchandiseId: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  id: string;
};

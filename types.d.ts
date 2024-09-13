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
};

type CartItem = {
  [x: string]: string | StaticImport;
  title: string;
  price: number;
  quantity: number;
  id: string;
};

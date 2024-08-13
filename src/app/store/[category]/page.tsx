type CategoryProps = {
  params: {
    category: string;
  };
};

export default function Category(props: CategoryProps) {
  const { category } = props.params;
  return <h1>Hola mundo {category}</h1>;
}

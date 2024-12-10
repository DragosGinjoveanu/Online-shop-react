import { useSelector } from "react-redux";

export default function Home() {
  const products = useSelector((store) => store.products.products);
  console.log(products);

  // !!! display a basic list of products here

  return <h1>This is the home page</h1>;
}

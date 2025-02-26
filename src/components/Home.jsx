import { useState } from "react";
import ProductsList from "./products/ProductsList";
import SearchBar from "./Search/SearchBar";
import { useSelector } from "react-redux";

export default function Home() {
  const products = useSelector((store) => store.products.products);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductsList products={filteredProducts} />
    </>
  );
}

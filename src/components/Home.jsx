import { useState } from "react";
import { useSelector } from "react-redux";
import ProductsList from "./products/ProductsList";
import SearchBar from "./Search/SearchBar";
import CategoryFilter from "./Search/CategoryFilter";
import StockFilter from "./Search/StockFilter";

export default function Home() {
  const products = useSelector((store) => store.products.products);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .startsWith(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;

    const matchesStock = !showInStockOnly || product.quantity > 0;

    return matchesSearch && matchesCategory && matchesStock;
  });

  return (
    <div className="flex gap-6 px-4">
      <div className="w-64">
        <CategoryFilter
          products={products}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <StockFilter
          showInStockOnly={showInStockOnly}
          setShowInStockOnly={setShowInStockOnly}
        />
      </div>

      <div className="flex-1">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ProductsList products={filteredProducts} />
      </div>
    </div>
  );
}

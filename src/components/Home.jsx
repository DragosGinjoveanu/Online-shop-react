import { useState } from "react";
import { useSelector } from "react-redux";

import ProductsList from "./products/ProductsList";
import SearchBar from "./Search/SearchBar";
import CategoryFilter from "./Search/CategoryFilter";
import StockFilter from "./Search/StockFilter";
import PriceFilter from "./Search/PriceFilter";

import { getMaxProductPrice } from "../store/helpers/products";

export default function Home() {
  const products = useSelector((store) => store.products.products);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const [sortOrder, setSortOrder] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(getMaxProductPrice(products));

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .startsWith(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "" || product.category === selectedCategory;

      const matchesStock = !showInStockOnly || product.quantity > 0;

      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesStock && matchesPrice;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
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
        <PriceFilter
          maxProductPrice={getMaxProductPrice(products)}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>

      <div className="flex-1">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ProductsList
          allProducts={products}
          filteredProducts={filteredProducts}
        />
      </div>
    </div>
  );
}

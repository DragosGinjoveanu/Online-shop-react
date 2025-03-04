import CustomInput from "../../ui/Input";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="container mx-auto px-4 my-4">
      <CustomInput
        type="text"
        name="search-products"
        id="search-products"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

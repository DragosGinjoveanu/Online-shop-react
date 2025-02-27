export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="container mx-auto px-4 my-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
}

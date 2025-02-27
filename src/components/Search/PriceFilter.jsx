export default function PriceFilter({
  maxProductPrice,
  sortOrder,
  setSortOrder,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) {
  function handleMinPriceChange(e) {
    const introducedMinPrice = Number(e.target.value);
    if (introducedMinPrice > maxPrice) {
      setMaxPrice(maxProductPrice);
    }
    setMinPrice(introducedMinPrice);
  }

  function handleMaxPriceChange(e) {
    const introducedMaxPrice = Number(e.target.value);
    if (introducedMaxPrice < minPrice) {
      setMinPrice(0);
    }
    setMaxPrice(introducedMaxPrice);
  }

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
      <h3 className="font-semibold mb-2 text-lg">Price Filter</h3>

      <div className="flex flex-col gap-2 mb-4">
        <button
          onClick={() => setSortOrder("asc")}
          className={`px-4 py-2 rounded-md transition ${
            sortOrder === "asc" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort: Low to High
        </button>

        <button
          onClick={() => setSortOrder("desc")}
          className={`px-4 py-2 rounded-md transition ${
            sortOrder === "desc" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort: High to Low
        </button>
        <button
          onClick={() => setSortOrder("")}
          className={`px-4 py-2 rounded-md transition ${
            sortOrder === "" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Default Order
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="border rounded-md p-2 w-20"
            min="0"
            max={maxPrice}
          />
        </label>

        <label className="flex items-center gap-2">
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="border rounded-md p-2 w-20"
            min={minPrice}
          />
        </label>
      </div>
    </div>
  );
}

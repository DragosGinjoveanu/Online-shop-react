import CustomInput from "../../ui/Input";
import CustomButton from "../../ui/Button";

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
        <CustomButton
          onClick={() => setSortOrder("asc")}
          color={sortOrder === "asc" ? "bg-blue-500 text-white" : "bg-gray-500"}
        >
          Sort: Low to High
        </CustomButton>

        <CustomButton
          onClick={() => setSortOrder("desc")}
          color={
            sortOrder === "desc" ? "bg-blue-500 text-white" : "bg-gray-500"
          }
        >
          Sort: High to Low
        </CustomButton>
        <CustomButton
          onClick={() => setSortOrder("")}
          color={sortOrder === "" ? "bg-blue-500 text-white" : "bg-gray-500"}
        >
          Default Order
        </CustomButton>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          Min Price:
          <CustomInput
            type="number"
            id="min-price"
            name="min-price"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="border rounded-md p-2 w-20"
            min="0"
            max={maxPrice}
          />
        </label>

        <label className="flex items-center gap-2">
          Max Price:
          <CustomInput
            type="number"
            id="max-price"
            name="max-price"
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

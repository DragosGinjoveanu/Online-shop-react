import CustomInput from "../../ui/Input";

export default function StockFilter({ showInStockOnly, setShowInStockOnly }) {
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
      <h3 className="font-semibold mb-2 text-lg">Stock Filter</h3>
      <label className="flex items-center gap-2 cursor-pointer">
        <CustomInput
          id="in-stock"
          name="in-stock"
          type="checkbox"
          checked={showInStockOnly}
          onChange={() => setShowInStockOnly((prev) => !prev)}
          className="w-4 h-4"
        />
        <span>Show only in-stock items</span>
      </label>
    </div>
  );
}

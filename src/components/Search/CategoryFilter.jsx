export default function CategoryFilter({
  products,
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="w-56 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
      <h3 className="font-semibold mb-3 text-lg">Categories</h3>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category === "All" ? "" : category)
            }
            className={`px-4 py-2 rounded-md text-left transition ${
              selectedCategory === category ||
              (category === "All" && selectedCategory === "")
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

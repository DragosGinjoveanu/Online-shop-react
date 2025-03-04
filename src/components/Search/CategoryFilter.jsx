import CustomButton from "../../ui/Button";

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
          <CustomButton
            key={category}
            onClick={() =>
              setSelectedCategory(category === "All" ? "" : category)
            }
            color={
              selectedCategory === category ||
              (category === "All" && selectedCategory === "")
                ? "bg-blue-500 text-white"
                : "bg-gray-500"
            }
          >
            {category}
          </CustomButton>
        ))}
      </div>
    </div>
  );
}

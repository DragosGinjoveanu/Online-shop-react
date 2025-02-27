import Product from "./Product";

export default function ProductsList({ allProducts, filteredProducts }) {
  const getMessage = (message) => (
    <div className="text-center py-10">
      <p className="text-red-500 text-lg">{message}</p>
    </div>
  );

  if (allProducts.length === 0) {
    return getMessage("Sorry, there are no available products at the moment");
  }

  if (filteredProducts.length === 0) {
    return getMessage(
      "Sorry, there are no available products that match your requirements"
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Product key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
}

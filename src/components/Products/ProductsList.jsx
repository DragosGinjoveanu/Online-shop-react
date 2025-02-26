import Product from "./Product";

export default function ProductsList({ products }) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
}

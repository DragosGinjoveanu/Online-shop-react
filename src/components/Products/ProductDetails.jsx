import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findProductDetails } from "../../store/helpers/products";
import { addToCart } from "../../utils/cartHelpers";

import ErrorPage from "../../pages/Error";

export default function ProductDetails() {
  const dispatch = useDispatch();

  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((store) => store.products.products);
  const product = findProductDetails(products, decodedTitle);

  if (product === undefined) {
    return <ErrorPage />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden w-full max-w-5xl flex flex-col">
        <header className="p-6 bg-gray-200 dark:bg-gray-700 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            {product.title}
          </h2>
        </header>

        <div className="flex flex-col md:flex-row flex-grow">
          <div className="md:w-1/2">
            <img
              src={`/images/${product.image}`}
              alt={product.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {product.description}
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Price per unit:
                </span>{" "}
                <span className="text-gray-700 dark:text-gray-300">
                  ${product.price}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Available quantity:
                </span>{" "}
                <span className="text-gray-700 dark:text-gray-300">
                  {product.quantity}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Product category:
                </span>{" "}
                <span className="text-gray-700 dark:text-gray-300">
                  {product.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        <footer className="p-6 bg-gray-200 dark:bg-gray-700 flex justify-center">
          {product.quantity !== 0 && (
            <button
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => addToCart(dispatch, cartItems, product)}
            >
              Add to Cart
            </button>
          )}
          {product.quantity === 0 && (
            <p className="text-red-500 text-lg font-semibold">
              Sorry, this product is out of stock. Check back soon for
              availability!
            </p>
          )}
        </footer>
      </div>
    </div>
  );
}

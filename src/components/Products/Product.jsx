import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../utils/cartHelpers";

import CustomButton from "../../ui/Button";

export default function Product({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const isInStock = product.quantity > 0;

  return (
    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div
        className={`absolute top-0 left-0 right-0 text-center text-sm font-semibold py-2 ${
          isInStock ? "bg-green-600 text-white" : "bg-red-600 text-white"
        }`}
      >
        {isInStock ? "In Stock" : "Out of Stock"}
      </div>

      <div className="pt-10">
        <img
          className="p-8 rounded-t-lg object-cover w-full h-64"
          src={`/images/${product.image}`}
          alt={product.title}
        />
      </div>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
        <div>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <CustomButton
            onClick={() =>
              navigate(`/product/${encodeURIComponent(product.title)}/details`)
            }
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Product details
          </CustomButton>
          <CustomButton
            onClick={() => addToCart(dispatch, cartItems, product)}
            className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none ${
              isInStock
                ? "bg-green-700 hover:bg-green-800 focus:ring-green-300"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            disabled={!isInStock}
          >
            Add to cart
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

import { useSelector, useDispatch } from "react-redux";

import { calculateTotal } from "../../store/helpers/cart";
import { cartActions } from "../../store/cart-slice";
import { findProductDetails } from "../../store/helpers/products";

export default function ShoppingCart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.products);

  function handleIncrementItem(id, currentQuantity) {
    const maxAvailableQuantity = findProductDetails(products, id).quantity;
    if (currentQuantity < maxAvailableQuantity) {
      dispatch(cartActions.incrementItem({ id }));
    }
    // need to notify the user if item is not available
  }

  function handleDecrementItem(id) {
    dispatch(cartActions.decrementItem({ id }));
  }

  function handleCheckout() {
    // go to checkout page
    //dispatch(orderActions.toggleOrder());
  }

  const totalPrice = calculateTotal(cartItems);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold border-b pb-2">
        Your Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 mt-4">Your cart is empty.</p>
      ) : (
        <>
          <ul className="mt-4 space-y-4">
            {cartItems.map((cartItem) => (
              <li
                key={cartItem.id}
                className="flex justify-between items-center p-3 border rounded-lg shadow-sm"
              >
                <div>
                  <p className="text-sm font-medium">{cartItem.title}</p>
                  <p className="text-gray-600">
                    {cartItem.quantity} x ${cartItem.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() =>
                      handleIncrementItem(cartItem.id, cartItem.quantity)
                    }
                  >
                    +
                  </button>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => handleDecrementItem(cartItem.id)}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold border-t pt-2 mt-4">
            Total: ${totalPrice.toFixed(2)}
          </p>
          <button
            className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700"
            onClick={handleCheckout}
          >
            Go to Checkout
          </button>
        </>
      )}
    </div>
  );
}

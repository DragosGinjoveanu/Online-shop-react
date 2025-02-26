import { toast } from "react-toastify";
import { cartActions } from "../store/cart-slice";
import { isInCart } from "../store/helpers/cart";

export function addToCart(dispatch, cartItems, product) {
  if (!product) {
    toast.error("Product not found", {
      position: "top-center",
      autoClose: 3000,
    });
    return;
  }

  const cartProductData = {
    id: product.title,
    title: product.title,
    price: product.price,
  };

  if (product.quantity === 0) {
    toast.error("The item is no longer in stock", {
      position: "top-center",
      autoClose: 3000,
    });
  } else if (!isInCart(cartItems, product.title)) {
    dispatch(cartActions.addItem(cartProductData));
    toast.success("The item has been added to the cart", {
      position: "top-center",
      autoClose: 3000,
    });
  } else {
    toast.warning("The item is already in the cart", {
      position: "top-center",
      autoClose: 3000,
    });
  }
}

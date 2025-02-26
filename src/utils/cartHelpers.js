import { toast } from "react-toastify";
import { cartActions } from "../store/cart-slice";
import { isInCart } from "../store/helpers/cart";
import { findProductDetails } from "../store/helpers/products";

export function addToCart(dispatch, cartItems, product) {
  if (!validateProductExists(product)) {
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

export function increaseProductQuantity(
  dispatch,
  products,
  id,
  currentQuantity
) {
  const product = findProductDetails(products, id);
  if (!validateProductExists(product)) {
    return;
  }

  const maxAvailableQuantity = product.quantity;

  if (currentQuantity < maxAvailableQuantity) {
    dispatch(cartActions.incrementItem({ id }));
  } else {
    toast.error("The maximum quantity for this product has been reached", {
      position: "top-center",
      autoClose: 3000,
    });
  }
}

function validateProductExists(product) {
  if (!product) {
    toast.error("Product not found", {
      position: "top-center",
      autoClose: 3000,
    });
    return null;
  }
  return product;
}

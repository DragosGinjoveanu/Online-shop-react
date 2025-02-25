export function calculateTotal(cartItems) {
  return cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
}

export function isInCart(cartProducts, productTitle) {
  return cartProducts.find((product) => productTitle === product.title);
}

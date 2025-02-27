export function productExists(productsList, productTitle) {
  return productsList.find(
    (product) => productTitle.toLowerCase() === product.title.toLowerCase()
  );
}

export function findProductDetails(productsList, productTitle) {
  return productsList.find((product) => productTitle === product.title);
}

export function getMaxProductPrice(productsList) {
  if (productsList.length === 0) {
    return 0;
  }
  return Math.max(...productsList.map((product) => product.price));
}

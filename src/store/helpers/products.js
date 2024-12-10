export function productExists(productsList, productTitle) {
  return productsList.find((product) => productTitle === product.title);
}

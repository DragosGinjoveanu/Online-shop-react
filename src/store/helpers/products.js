export function productExists(productsList, productTitle) {
  return productsList.find(
    (product) => productTitle.toLowerCase() === product.title.toLowerCase()
  );
}

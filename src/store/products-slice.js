import { createSlice } from "@reduxjs/toolkit";

// each product has
// id, title, image, description, price, quantity, category

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    createProduct(state, action) {
      const newProduct = action.payload;
      state.products.push(newProduct);
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;

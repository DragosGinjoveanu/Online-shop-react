import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { products: productsSlice.reducer, cart: cartSlice.reducer },
});

export default store;

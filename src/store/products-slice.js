import { createSlice } from "@reduxjs/toolkit";

// each product has
// title (= id, is unique), image, description, price, quantity, category

const initialProducts = [
  {
    title: "tomato",
    image: "tomato.png",
    description: "this is a tomato",
    price: 2,
    quantity: 5,
    category: "vegetables",
  },
  {
    title: "tomato2",
    image: "tomato.png",
    description: "this is a tomato",
    price: 3,
    quantity: 0,
    category: "vegetables",
  },
  {
    title: "potato",
    image: "potato.png",
    description: "this is a potato",
    price: 1,
    quantity: 1,
    category: "vegetables",
  },
  {
    title: "potato2",
    image: "potato.png",
    description: "this is a potato",
    price: 5,
    quantity: 0,
    category: "vegetables",
  },
  {
    title: "apple",
    image: "apple.png",
    description: "this is an apple",
    price: 10,
    quantity: 2,
    category: "fruits",
  },
  {
    title: "orange",
    image: "orange.png",
    description: "this is an orange",
    price: 10,
    quantity: 2,
    category: "fruits",
  },
  {
    title: "apple2",
    image: "apple.png",
    description: "this is an apple",
    price: 7,
    quantity: 0,
    category: "fruits",
  },
  {
    title: "orange2",
    image: "orange.png",
    description: "this is an orange",
    price: 5,
    quantity: 0,
    category: "fruits",
  },
];

const initialState = {
  products: initialProducts,
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

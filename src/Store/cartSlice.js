import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
        console.log(action.payload)
        console.log(state.cart)
      const existingproduct = state.cart.find((product) => product.id === action.payload.id);
      if (!existingproduct) {
        const cartproduct = {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.image,
        };
        state.cart.push(cartproduct);
      } else {
        alert("Added Already");
      }
    },

    removeFromCart(state, action) {
      state.cart = state.cart.filter((product) => product.id != action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

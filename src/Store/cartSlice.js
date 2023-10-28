import { createSlice } from "@reduxjs/toolkit";

const local =  localStorage.getItem("cartproduct") !== null
    ? JSON.parse(localStorage.getItem("cartproduct"))
    : [];

// const initialState = {
//   cartproduct: local,
// };

export const cartSlice = createSlice({
  name: "cart",
  initialState:local,
  reducers: {
    addToCart: (state, action) => {
      const existingproduct = state.find((product) => product.id === action.payload.id);
      if (!existingproduct) {
        const cartproduct = {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.image,
        };
        state.push(cartproduct);
        localStorage.setItem("cartproduct", JSON.stringify(state.map((products) => products))
        );
      } else {
        alert("Already In Cart");
      }
    },

    removeFromCart: (state, action) => {
      const filteredproducts = state.filter(product => product.id != action.payload);
      localStorage.setItem("cartproduct", JSON.stringify(filteredproducts))
      return filteredproducts;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartproduct: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: 
  {
    addToCart:(state, action) =>{
      const existingproduct = state.cartproduct.find(
        (product) => product.id === action.payload.id
      );
      if (!existingproduct) {
        const cartproduct = {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.image,
        };
        state.cartproduct.push(cartproduct);
      } else {
        alert("Added Already");
      }
    },

    removeFromCart:(state, action) =>{
      state.cartproduct = state.cartproduct.filter(
        (product) => product.id != action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

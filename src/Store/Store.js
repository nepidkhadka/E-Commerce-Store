import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import userReducer from "./userSlice";


const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    user: userReducer
  },
});

export default store;

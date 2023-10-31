import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action)=>{
        state.data = action.payload;
    })
  }
});

export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;
 
export const getProducts = createAsyncThunk('product/get', async()=>{
    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    const mydata = await res.json();
    return mydata
})



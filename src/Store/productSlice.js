import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: { data: [], status: "" },
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload.slice(4,50);
        state.status = "Success";
      })
      .addCase(getProducts.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "Rejected";
      });
  },
});

export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;

export const getProducts = createAsyncThunk("fetchproducts", async (APIUrl) => {
  const response = await fetch(APIUrl);
  const result = await response.json();
  return result;
});

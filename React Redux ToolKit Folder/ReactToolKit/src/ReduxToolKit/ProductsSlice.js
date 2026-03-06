import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProduct', async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data.products;
});
const initialState = {
  counters: [],
  status: undefined,
  error: null,
};

const AddToItems = createSlice({
  name: 'Products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'Succeeded';
      state.counters = action.payload;
    });
  },
});

export default AddToItems.reducer;

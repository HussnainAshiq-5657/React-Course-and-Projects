import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products', async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data;
});

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const ProductSlice = createSlice({
  name: 'Products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      ((state.status = 'Successed'), (state.items = action.payload.products));
    });
  },
});

export default ProductSlice.reducer;

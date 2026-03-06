import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const FetchProducts = createAsyncThunk('fetch/products', async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data.products;
});

const initialState = {
  counters: [],
  status: undefined,
  error: null,
};

const AsyncCart = createSlice({
  name: 'fetchProducts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchProducts.fulfilled, (state, action) => {
      state.status = 'Succeeded';
      state.counters = action.payload;
    });
  },
});

export default AsyncCart.reducer;

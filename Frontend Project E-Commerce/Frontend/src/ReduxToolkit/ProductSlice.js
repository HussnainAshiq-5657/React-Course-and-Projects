import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const FetchProducts = createAsyncThunk('/fetch/products/', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
});
const initialState = {
  items: [],
  status: '',
  error: '',
};

const ProductSlice = createSlice({
  name: 'Products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchProducts.fulfilled, (state, action) => {
      state.status = 'Succeeded Connection';
      state.items = action.payload;
    });
  },
});

export default ProductSlice.reducer;

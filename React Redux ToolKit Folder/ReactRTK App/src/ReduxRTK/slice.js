import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};

const AddToCart = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      if (state.counter > 0) {
        state.counter -= 1;
      } else {
        state.counter = 0;
      }
    },
    ClearCart: (state) => {
      state.counter = 0;
    },
  },
});

export const { increment, decrement, ClearCart } = AddToCart.actions;
export default AddToCart.reducer;

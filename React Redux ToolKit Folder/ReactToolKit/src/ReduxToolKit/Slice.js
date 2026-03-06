import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  counter: 0,
};

const AddToCart = createSlice({
  name: 'cartItems',
  initialState: initialValue,
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
    ClearValues: (state) => {
      state.counter = 0;
    },
  },
});

export const { increment, decrement, ClearValues } = AddToCart.actions;
export default AddToCart.reducer;

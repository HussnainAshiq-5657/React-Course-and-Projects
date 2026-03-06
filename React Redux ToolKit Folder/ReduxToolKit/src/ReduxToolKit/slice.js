import { createSlice } from '@reduxjs/toolkit';

const AddToCart = createSlice({
  name: 'cartItem',
  initialState: {
    counter: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  },
  reducers: {
    increament: (state, action) => {
      console.log(action);
      state.counter.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.counter));
    },
    decrement: (state, action) => {
      const cartData = state.counter.filter((item) => item.id !== action.payload.id);
      state.counter = cartData;
      localStorage.setItem('cartItems', JSON.stringify(state.counter));
    },
    ClearValues: (state) => {
      state.counter = [];
    },
  },
});
export const { increament, decrement, ClearValues } = AddToCart.actions;
export default AddToCart.reducer;

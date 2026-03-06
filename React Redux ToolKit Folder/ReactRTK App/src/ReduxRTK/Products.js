import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : [],
};
const AsyncProduct = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    incrementValue: (state, action) => {
      console.log(action);
      state.items.push(action.payload);
      localStorage.setItem('Products', JSON.stringify(state.items));
    },
    decrementValue: (state, action) => {
      const cartData = state.items.filter((item) => item.id !== action.payload.id);

      state.items = cartData;

      localStorage.setItem('Products', JSON.stringify(cartData));
    },
    ClearItem: (state) => {
      state.items = [];
    },
  },
});

export const { incrementValue, decrementValue, ClearItem } = AsyncProduct.actions;
export default AsyncProduct.reducer;

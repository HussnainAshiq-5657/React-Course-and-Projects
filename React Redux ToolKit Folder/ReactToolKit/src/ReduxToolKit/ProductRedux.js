import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: localStorage.getItem('CartProducts')
    ? JSON.parse(localStorage.getItem('CartProducts'))
    : [],
};

const AddToProduct = createSlice({
  name: 'CartProducts',
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action);
      state.items.push(action.payload);
      localStorage.setItem('CartProducts', JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const cartData = state.items.filter((cartItem) => cartItem.id != action.payload.id);
      state.items = cartData;
      localStorage.setItem('CartProducts', JSON.stringify(cartData));
    },
    ClearItems: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, ClearItems } = AddToProduct.actions;
export default AddToProduct.reducer;

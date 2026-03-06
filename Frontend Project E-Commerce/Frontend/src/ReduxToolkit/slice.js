import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : [],
};

const AddToCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existItem = state.items.find((item) => item.id === action.payload.id);

      if (existItem) {
        existItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem('Products', JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('Products', JSON.stringify(state.items));
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }

      localStorage.setItem('Products', JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('Products');
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = AddToCart.actions;

export default AddToCart.reducer;

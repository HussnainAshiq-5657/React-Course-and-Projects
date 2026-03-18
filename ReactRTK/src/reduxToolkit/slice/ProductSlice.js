import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState: {
    value: localStorage.getItem('ProductSlice')?JSON.parse(localStorage.getItem('ProductSlice')):[],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
      localStorage.setItem('ProductSlice', JSON.stringify(state.value));
    },
    removeItem: (state, action) => {
      const cartData = state.value.filter((item)=>item.id !== action.payload.id);
      state.value = cartData;
      localStorage.setItem('ProductSlice',JSON.stringify(cartData));
    },
    ClearAll: (state, action) => {
      state.value = [];
    },
  },
});

export const { addItem, removeItem, ClearAll } = ProductSlice.actions;
export default ProductSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slice.js';
import productReducer from './ProductsSlice.js';
import ProductReducer from './ProductRedux.js';
const reduxStore = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    carts: ProductReducer,
  },
});

export default reduxStore;

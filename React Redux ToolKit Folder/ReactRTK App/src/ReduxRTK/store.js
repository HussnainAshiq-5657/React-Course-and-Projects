import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice.js';
import productReducer from './AsyncProducts.js';
import ProductReducer from './Products.js';
const reduxStore = configureStore({
  reducer: {
    cart: cartReducer,
    AsyncProducts: productReducer,
    product: ProductReducer,
  },
});

export default reduxStore;

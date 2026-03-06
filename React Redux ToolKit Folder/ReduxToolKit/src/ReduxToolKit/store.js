import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice.js';
import ProductsReducer from './ProductsSlice.js';
const reduxStore = configureStore({
  reducer: {
    carts: cartReducer,
    products: ProductsReducer,
  },
});
export default reduxStore;

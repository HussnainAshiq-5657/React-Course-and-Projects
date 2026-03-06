import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductSlice.js';
import cartReducer from './slice.js';
import wishlistReducer from './wishListSlice.js';
const reduxStore = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    wishlist: wishlistReducer,
  },
});

export default reduxStore;

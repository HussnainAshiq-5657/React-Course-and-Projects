import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/mouseSlice.js';
import productSliceReducer from '../slice/ProductSlice.js';
import productAPisReducer from '../slice/productApis.js';

export const UserStore = configureStore({
  reducer: {
    counter: counterReducer,
    ProductSlice: productSliceReducer,
    ProductAPis: productAPisReducer,
  },
});

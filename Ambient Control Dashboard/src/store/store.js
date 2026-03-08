import { configureStore } from '@reduxjs/toolkit'
import deviceReducer from './deviceSlice.js'

export const store = configureStore({
  reducer: {
    devices: deviceReducer,
  },
})
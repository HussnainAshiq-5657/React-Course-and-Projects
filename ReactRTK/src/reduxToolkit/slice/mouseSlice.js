import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count > 0 ? (state.count -= 1) : (state.count = 0);
    },
    clear: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, clear } = counterSlice.actions;
export default counterSlice.reducer;

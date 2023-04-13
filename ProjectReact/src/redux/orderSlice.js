import { createSlice } from '@reduxjs/toolkit';

const initialState={
  data: [],  
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {

    setOrder: (state,action) => {
      state.data = state.data.push(action.payload);
    },

    removeOrder: (state) => {
      state.image = null;
      state.nameBook = null;
      state.price = null;
    },

  },
});

export const { setOrder, removeOrder } = orderSlice.actions;

export default orderSlice.reducer;
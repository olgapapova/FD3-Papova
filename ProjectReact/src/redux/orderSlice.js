import { createSlice } from '@reduxjs/toolkit';

const initialState={
  data:[],  
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {

    setOrder: (state,action) => {
      state.data.push(action.payload);
    },

  },
});

export const { setOrder, removeOrder } = orderSlice.actions;

export default orderSlice.reducer;
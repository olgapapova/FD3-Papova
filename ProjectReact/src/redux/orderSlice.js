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

    deliteOrder: (state, action) => {
      let booksDelite=state.data.filter(b => b.id !==action.payload);
      state.data=booksDelite;
      console.log(booksDelite);
    },

  },
});

export const { setOrder, deliteOrder } = orderSlice.actions;

export default orderSlice.reducer;
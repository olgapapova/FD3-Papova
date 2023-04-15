import { createSlice } from '@reduxjs/toolkit';

const initialState={
  cartOpen:false,
  data:[],  
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {

    setOrder: (state,action) => {
      state.data.push(action.payload);
    },

    deleteOrder: (state, action) => {
      let booksDelete=state.data.filter(b => b.id !==action.payload);
      state.data=booksDelete;
    },

    openOrClose: (state, action) => {
      state.cartOpen = action.payload;
    },

    deleteData: (state,action) => {
      state.data=[];
    },

  },
});

export const { setOrder, deleteOrder, openOrClose, deleteData } = orderSlice.actions;

export default orderSlice.reducer;
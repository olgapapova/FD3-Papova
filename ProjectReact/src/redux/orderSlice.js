import { createSlice } from '@reduxjs/toolkit';

const initialState={
  cartOpen:false,
  data:[],
  dataSch: 0,  
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {

    setOrder: (state,action) => {
      state.data.push(action.payload);
      localStorage.setItem("booksOrder", JSON.stringify(state.data));
      state.dataSch++;
    },

    deleteOrder: (state, action) => {
      let booksDelete=state.data.filter(b => b.id !==action.payload);
      state.data=booksDelete;
      state.dataSch--;
    },

    openOrClose: (state, action) => {
      state.cartOpen = action.payload;
    },

    deleteData: (state,action) => {
      state.data=[];
    },

    dataLocal: (state,action) => {
      state.data = action.payload;
    },

    resetSch: (state,action) => {
      state.dataSch=0;
    },

  },
});

export const { setOrder, deleteOrder, openOrClose, deleteData, dataLocal, resetSch } = orderSlice.actions;

export default orderSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState={
  dataCh:null,
  dataPage: null,  
}

export const chooseSlice = createSlice({
  name: 'chooseBook',
  initialState,
  reducers: {

    openChooseBook: (state, action) => {
      state.dataCh = action.payload;
    },

    choosePage: (state, action) => {
      state.dataPage = action.payload;
    },

  },
});

export const { openChooseBook, choosePage } = chooseSlice.actions;

export default chooseSlice.reducer;
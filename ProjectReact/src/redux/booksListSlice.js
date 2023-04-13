import { createSlice } from '@reduxjs/toolkit';

const initialState={
  dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
  dataLoadError: null,
  dataList: null,
}

export const booksListSlice = createSlice({
  name: 'booksList',
  initialState,
  reducers: {

    updateLoadState: (state,action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },

    updateData: (state,action) => {
      state.dataList = action.payload;
    },

  },
});

export const { updateLoadState, updateData } = booksListSlice.actions;

export default booksListSlice.reducer;
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

    updateLoadListState: (state,action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },

    updateDataList: (state,action) => {
      state.dataList = action.payload;
    },

  },
});

export const { updateLoadListState, updateDataList } = booksListSlice.actions;

export default booksListSlice.reducer;
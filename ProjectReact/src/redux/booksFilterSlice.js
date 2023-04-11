import { createSlice } from '@reduxjs/toolkit';

const initialState={
  dataFilterLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
  dataFilterLoadError: null,
  dataFilter: null,
}

export const booksFilterSlice = createSlice({
  name: 'booksFilter',
  initialState,
  reducers: {

    updateLoadState: (state,action) => {
      state.dataFilterLoadState = action.payload.state;
      state.dataFilterLoadError = action.payload.error;
    },

    updateData: (state,action) => {
      state.dataFilter = action.payload;
    },

  },
});

export const { updateLoadState, updateData } = booksFilterSlice.actions;

export default booksFilterSlice.reducer;
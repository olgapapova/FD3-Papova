import { createSlice } from '@reduxjs/toolkit';

const initialState={
  dataChangeLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
  dataChangeLoadError: null,
  dataChange: null,
}

export const booksChangeSlice = createSlice({
  name: 'booksChange',
  initialState,
  reducers: {

    updateLoadState: (state,action) => {
        state.dataChangeLoadState = action.payload.state;
        state.dataChangeLoadError = action.payload.error;
    },

    updateData: (state,action) => {
      state.dataChange = action.payload;
    },

  },
});

export const { updateData } = booksChangeSlice.actions;

export default booksChangeSlice.reducer;
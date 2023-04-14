import { createSlice } from '@reduxjs/toolkit';

const initialState={
  dataChange: null,
}

export const booksChangeSlice = createSlice({
  name: 'booksChange',
  initialState,
  reducers: {

    updateDataChange: (state,action) => {
      state.dataChange = action.payload;
    },

  },
});

export const { updateDataChange } = booksChangeSlice.actions;

export default booksChangeSlice.reducer;
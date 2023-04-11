import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './booksSlice';
import booksChangeReducer from './booksChangeSlice';
import booksFilterReducer from './booksFilterSlice';

export const store = configureStore({
    reducer: {
        books: booksReducer,
        booksChange: booksChangeReducer,
        booksFilter: booksFilterReducer,
    },
})
import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './booksSlice';
import booksChangeReducer from './booksChangeSlice';
import booksListReducer from './booksListSlice';
import userReducer from './userSlice';
import orderReducer from './orderSlice';
import chooseReducer from './chooseSlice';

export const store = configureStore({
    reducer: {
        books: booksReducer,
        booksChange: booksChangeReducer,
        booksList: booksListReducer,
        user: userReducer,
        order: orderReducer,
        chooseBook: chooseReducer,
    },
})
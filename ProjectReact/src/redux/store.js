import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './booksSlice';
import booksChangeReducer from './booksChangeSlice';
import booksFilterReducer from './booksFilterSlice';
import booksListReducer from './booksListSlice';
import userReducer from './userSlice';
import orderReducer from './orderSlice';

export const store = configureStore({
    reducer: {
        books: booksReducer,
        booksChange: booksChangeReducer,
        booksFilter: booksFilterReducer,
        booksList: booksListReducer,
        user: userReducer,
        order: orderReducer,
    },
})
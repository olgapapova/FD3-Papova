import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'

import { Bookstore } from './components/Bookstore';
import './firebase';

export const App = () => (
    <Provider store={store}>
      <BrowserRouter>
        <div>
            <Bookstore />  
        </div>
      </BrowserRouter>
    </Provider>
);

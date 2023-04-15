import React from 'react';
import { NavLink } from 'react-router-dom';
import { Login } from '../components/Login';

import './BooksListCategory.css';

export const LoginPage = () => {

  return (
    <>
      <div className="Login">
        <div className="avtor"><h1 >Авторизация</h1></div>
        <Login/>
      </div>
    </>
);

}
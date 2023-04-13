import React from 'react';
import { NavLink } from 'react-router-dom';
import { Login } from '../components/Login';

import './BooksListCategory.css';

export const LoginPage = () => {

  return (
    <>
      <div className="Login">
        <h1>Авторизация</h1>
        <Login/>
        <p><NavLink className="log" to="/register">Регистрация</NavLink></p>
      </div>
    </>
);

}
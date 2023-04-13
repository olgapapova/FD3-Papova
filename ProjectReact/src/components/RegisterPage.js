import React from 'react';
import { NavLink } from 'react-router-dom';
import { SignUp } from '../components/SignUp';

import './BooksListCategory.css';

export const RegisterPage = () => {

  return (
    <>
      <div className="Login">
        <h1>Регистрация</h1>
        <SignUp/>
        <p><NavLink className="log" to="/login">Авторизация</NavLink></p>
      </div>
    </>
);

}
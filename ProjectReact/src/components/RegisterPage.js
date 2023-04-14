import React from 'react';
import { NavLink } from 'react-router-dom';
import { SignUp } from '../components/SignUp';

import './BooksListCategory.css';

export const RegisterPage = () => {

  return (
    <>
      <div className="Login">
      <div className="avtor"><h1>Регистрация</h1></div>
        <SignUp/>
      </div>
    </>
);

}
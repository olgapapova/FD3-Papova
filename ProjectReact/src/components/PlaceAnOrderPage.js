import { useSelector } from 'react-redux';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './BooksListCategory.css';

export const PlaceAnOrderPage = () => {
  let navigate = useNavigate();

  function homePage (){
    const uri="/";
    navigate(uri);
  };

  return (
    <>
      <div >
        <div className="PlaceAnOrderWr">
            <form method='post' action='http://fe.it-academy.by/TestForm.php' className='PlaceAnOrder'>
              <input name="name" placeholder="Укажите ваше имя!" className="name" required />
              <input name="emailaddress" placeholder="Укажите ваш адрес" className="email" type="email" required />
              <input name="subject" placeholder="Укажите ваш телефон" className="message" required />
              <input name="submit" className="btn1" type="submit" value="Оформить заказ" onClick={()=>{localStorage.removeItem('booksOrder'); homePage()}}/>&nbsp;&nbsp;&nbsp;&nbsp;
              <NavLink to="/"><input name="submit" className="btn2" type="submit" value="Отмена" /></NavLink>
            </form>
        </div>
      </div>
    </>
);

}
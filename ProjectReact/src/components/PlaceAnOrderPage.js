import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openOrClose, deleteData, resetSch } from "../redux/orderSlice.js";

import './BooksListCategory.css';

export const PlaceAnOrderPage = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  let [name, setName]= useState('');
  let [address, setAddress]= useState('');
  let [fon, setFon]= useState('');

  let cartOp=useSelector(state => state.order.cartOpen);

  function homePage (){
    dispatch( openOrClose(cartOp ? false : true) );
    dispatch( deleteData() );
    dispatch( resetSch() );
    const uri="/";
    navigate(uri);
  };

  return (
    <>
      <div >
        <div className="PlaceAnOrderWr">
            <form method='post' action='http://fe.it-academy.by/TestForm.php' className='PlaceAnOrder'>
              <input name="name" placeholder="Укажите ваше имя!" className="name" onChange={(eo) => setName(eo.target.value)} required/>
              {( name === "" )  && <p className="Valid">Введите ваше имя</p>}
              <input name="emailaddress" placeholder="Укажите ваш адрес" className="email" required onChange={(eo) => setAddress(eo.target.value)}/>
              {( address === "" || address.length < 6 )  && <p className="Valid">Введите ваш адрес не менее 6 символов</p>}
              <input name="subject" placeholder="Укажите ваш телефон" className="message" onChange={(eo) => setFon(eo.target.value)} required />
              {( Number.isNaN(Number(fon)) || fon.length < 7 )  && <p className="Valid">Введите ваш телефон в формате --- -- --</p>}
              <input name="submit" className="btn1" type="submit" value="Оформить заказ" onClick={()=>{localStorage.removeItem('booksOrder'); homePage()}}/>&nbsp;&nbsp;&nbsp;&nbsp;
              <NavLink to="/"><input name="submit" className="btn2" type="submit" value="Отмена" /></NavLink>
            </form>
        </div>
      </div>
    </>
);

}
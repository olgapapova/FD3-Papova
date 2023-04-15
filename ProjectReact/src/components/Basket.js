import { useDispatch, useSelector } from 'react-redux';
import {FaTrash} from 'react-icons/fa';
import React, { useState } from 'react';
import { deleteOrder } from "../redux/orderSlice.js";
import { dataLocal } from "../redux/orderSlice.js";
import './BooksListCategory.css';


export const Basket = () => {
  
  const dispatch = useDispatch();
  const order = useSelector( state => state.order );
  let infoStorage;
  let info=order.data;

  if (info?.length !== 0) {
    localStorage.setItem("booksOrder", JSON.stringify(info));
  }

  infoStorage = localStorage.getItem('booksOrder');
  infoStorage = JSON.parse(infoStorage);

  const infoBook = infoStorage || info;
  
  let listOrder = infoBook.map((v,i) =>
    <div className="clearfix" key={i}>
      <img className="BasketImg" src={"/"+v.image}/>
      <div className="backBookText">
        <div className="BasketBook">{v.nameBook}</div>
        <div className="BasketBook">{v.price} руб.</div>
      </div>
      <a onClick={()=>{dispatch( deleteOrder(v.id) );
      let ls=localStorage.getItem('booksOrder');
      ls=JSON.parse(ls);
      ls=ls.filter(c => c.id !== v.id); 
      localStorage.setItem("booksOrder", JSON.stringify(ls));}}><FaTrash className='DeliteIcon' /></a><br/><br/>
    </div>
  );
  let mes=<div className="mesBasket">В корзине пока нет заказов</div>;

  return (
    <>
      <div className="TitleOrder">Корзина</div>
      { localStorage.getItem('booksOrder')?.length === 0 || info.length === 0 ? mes : null }
      {listOrder}
    </>
);

}
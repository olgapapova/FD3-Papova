import { useSelector } from 'react-redux';
import {FaTrash} from 'react-icons/fa';
//import React from 'react';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { deliteOrder, setOrder } from "../redux/orderSlice.js";
import './BooksListCategory.css';

export const Basket = () => {
  const dispatch = useDispatch();

  const order = useSelector( state => state.order );
  let info= order.data;


  const deliteOrderBooks = (id) => {
    console.log('onclick')
    if (id) 
      info=info.filter(b => b.id !==id);
  };

  const updateStorage = () => {
    if (info.length!== 0)
      localStorage.setItem("booksOrder", JSON.stringify(info));
  };
  updateStorage();

  let infoStorage;

  const usStorage = () => {
    /*if (localStorage.getItem('booksOrder')!==undefined && localStorage.getItem('booksOrder')!==null ) {*/
      infoStorage=localStorage.getItem('booksOrder');
      infoStorage=JSON.parse(infoStorage);
      console.log(infoStorage);
      /*infoStorage.map(s => dispatch( setOrder({
      id: s.id,
      image: s.image,
      nameBook: s.nameBook,
      price: s.price,
    }) ));
  }*/
  };
  usStorage();

  let useInfoBook=(localStorage.getItem('booksOrder')!==undefined && localStorage.getItem('booksOrder')!==null ) ? infoStorage : info;
  /*const deliteOrderBooks = () => {
    dispatch( deliteOrder(idBook) );
  };*/
  
   
  let listOrder= useInfoBook.map((v,i) => 
    <div className="clearfix" key={i}>
      <img className="BasketImg" src={v.image}/>
      <div className="BasketBook">{v.nameBook}</div>
      <div className="BasketBook">{v.price} руб.</div>
      <p onClick={deliteOrderBooks(v.id)}><FaTrash className='DeliteIcon' /></p>
    </div>
  );
  
  console.log(listOrder)

  return (
    <>
      <div className="TitleOrder">Корзина</div>
      {listOrder}
    </>
);

}
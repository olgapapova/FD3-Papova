import { useDispatch, useSelector } from 'react-redux';
import {FaTrash} from 'react-icons/fa';
import React from 'react';
import { deleteOrder } from "../redux/orderSlice.js";
import './BooksListCategory.css';


export const Basket = () => {
  const dispatch = useDispatch();

  const order = useSelector( state => state.order );
  let info=order.data;
  let img;

  const updateStorage = () => {
    if (info.length!== 0)
      localStorage.setItem("booksOrder", JSON.stringify(info));
  };
  updateStorage();

  let infoStorage;

  const usStorage = () => {

      infoStorage=localStorage.getItem('booksOrder');
      infoStorage=JSON.parse(infoStorage);
      console.log(infoStorage);
  };
  usStorage();

  let useInfoBook=(localStorage.getItem('booksOrder')!==undefined && localStorage.getItem('booksOrder')!==null ) ? infoStorage : info;
   
  let listOrder= useInfoBook.map((v,i) => 
    <div className="clearfix" key={i}>
      <img className="BasketImg" src={"/"+v.image}/>
      <div className="backBookText">
        <div className="BasketBook">{v.nameBook}</div>
        <div className="BasketBook">{v.price} руб.</div>
      </div>
      <a onClick={()=>{dispatch( deleteOrder(v.id) );
        let ls=localStorage.getItem('booksOrder');
        ls=JSON.parse(ls);
        ls=ls.filter(c => c.id !==v.id);
        localStorage.setItem("booksOrder", JSON.stringify(ls));}}><FaTrash className='DeliteIcon' /></a><br/><br/>
    </div>
  
  );

  return (
    <>
      <div className="TitleOrder">Корзина</div>
      {listOrder}
    </>
);

}
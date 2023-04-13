import { useSelector } from 'react-redux';
import React from 'react';
import './BooksListCategory.css';
export const Basket = () => {

  const order = useSelector( state => state.order );
  console.log(order);
   
  let listOrder= order.data.map((v,i) => 
    <div className="clearfix" key={i}>
      <img className="BasketImg" src={v.image}/>
      <div className="BasketBook">{v.nameBook}</div>
      <div className="BasketBook">{v.price} руб.</div>
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
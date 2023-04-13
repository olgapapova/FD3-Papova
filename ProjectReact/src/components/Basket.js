import { useSelector } from 'react-redux';
import React from 'react';
import './BooksListCategory.css';

export const Basket = () => {

  const order = useSelector( state => state.order );
  console.log(order);

  return (
    <>
      {order.data.map((o) =>{
      <div>
        <img className="BasketImg" src={o.image}/>
        <div className="BasketBook">{o.nameBook}</div>
        <div className="BasketBook">{o.price} руб.</div>
      </div>}
      )}
    </>
);

}
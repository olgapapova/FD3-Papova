import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOrder } from "../redux/orderSlice.js";

import './BooksListCategory.css';

const BooksListCategory = (props) => { 
  const dispatch = useDispatch();

  const [name, setName] = useState(props.info.nameBook);
  const [image, setImage] = useState(props.info.image);
  const [author, setAuthor] = useState(props.info.author);
  const [price, setPrice] = useState(props.info.price);
  const [id, setId] = useState(props.info.id);

  function addToOrder() {
    dispatch( setOrder({
      id: id,
      image: image,
      nameBook: name,
      price: price,
    }) );
  };

  return (
    <>
    <div className="CategoryBook">
      <img className="Image" src={image}/><br/>
      <div className="TextBookName">{name}</div>
      <div className="TextBook">{author}</div>
      <div className="TextBookName">{price} руб.</div>
      <div className="TextBook">
        <img className="Icons3" src="serdce.png"/>
        <NavLink onClick={addToOrder}>
          <img className="Icons3" src="karzina.png"/>
        </NavLink>
      </div>
    </div>
    </>
  );  
}
export default BooksListCategory;
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOrder } from "../redux/orderSlice.js";
import { openChooseBook } from "../redux/chooseSlice.js";
import karzina from "../images/karzina.png"

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

  function bookOpen () {
    dispatch( openChooseBook(id) );
  };

  return (
    <>
    <div className="CategoryBook">
      <NavLink to="/:bookName" onClick={bookOpen}><img className="Image" src={"/"+image}/></NavLink><br/>
      <div className="TextBookName">{name}</div>
      <div className="TextBook">{author}</div>
      <div className="TextBookName">{price} руб.</div>
      <div className="TextBook">
        <NavLink onClick={addToOrder}>
          <img className="Icons3" src={karzina}/>
        </NavLink>
      </div>
    </div>
    </>
  );  
}
export default BooksListCategory;
//import React from 'react';
import React, { useState, useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';

import './BooksListCategory.css';

const BooksListCategory = (props) => { 

  const [name, setName] = useState(props.info.nameBook);
  const [image, setImage] = useState(props.info.image);
  const [author, setAuthor] = useState(props.info.author);
  const [price, setPrice] = useState(props.info.price);

  return (
    <>
    <div className="CategoryBook">
      <img className="Image" src={image}/><br/>
      <div className="TextBookName">{name}</div>
      <div className="TextBook">{author}</div>
      <div className="TextBookName">{price} руб.</div>
      <div className="TextBook">
        <img className="Icons3" src="serdce.png"/>
        <img className="Icons3" src="karzina.png"/>
      </div>
    </div>
    </>
  );  
}
export default BooksListCategory;
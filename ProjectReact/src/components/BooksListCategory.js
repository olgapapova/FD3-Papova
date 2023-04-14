import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOrder } from "../redux/orderSlice.js";
import img1_1 from "../images/img1_1.jpg"
import img1_2 from "../images/img1_2.jpg"
import img1_3 from "../images/img1_3.jpg"
import img1_4 from "../images/img1_4.jpg"
import img1_5 from "../images/img1_5.jpg"
import img1_6 from "../images/img1_6.jpg"
import img1_7 from "../images/img1_7.jpg"
import img1_8 from "../images/img1_8.jpg"
import img1_9 from "../images/img1_9.jpg"
import img1_10 from "../images/img1_10.jpg"
import img1_11 from "../images/img1_11.jpg"
import img1_12 from "../images/img1_12.jpg"
import img1_13 from "../images/img1_13.jpg"
import img1_14 from "../images/img1_14.jpg"
import img1_15 from "../images/img1_15.jpg"
import img1_16 from "../images/img1_16.jpg"
import img1_17 from "../images/img1_17.jpg"
import img1_18 from "../images/img1_18.jpg"
import img1_19 from "../images/img1_19.jpg"
import img1_20 from "../images/img1_20.jpg"
import img1_21 from "../images/img1_21.jpg"
import img1_22 from "../images/img1_22.jpg"
import img1_23 from "../images/img1_23.jpg"
import img1_24 from "../images/img1_24.jpg"
import img1_25 from "../images/img1_25.jpg"
import img1_26 from "../images/img1_26.jpg"
import img1_27 from "../images/img1_27.jpg"
import img1_28 from "../images/img1_28.jpg"
import img1_29 from "../images/img1_29.jpg"
import img1_30 from "../images/img1_30.jpg"
import img1_31 from "../images/img1_31.jpg"
import img1_32 from "../images/img1_32.jpg"
import img1_33 from "../images/img1_33.jpg"
import img1_34 from "../images/img1_34.jpg"
import img2_1 from "../images/img2_1.jpg"
import img2_2 from "../images/img2_2.jpg"
import img2_3 from "../images/img2_3.jpg"
import img2_4 from "../images/img2_4.jpg"
import img2_5 from "../images/img2_5.jpg"
import img2_6 from "../images/img2_6.jpg"
import img2_7 from "../images/img2_7.jpg"
import img2_8 from "../images/img2_8.jpg"
import img2_9 from "../images/img2_9.jpg"
import img2_10 from "../images/img2_10.jpg"
import img2_11 from "../images/img2_11.jpg"
import img2_12 from "../images/img2_12.jpg"
import img2_13 from "../images/img2_13.jpg"
import img2_14 from "../images/img2_14.jpg"
import img2_15 from "../images/img2_15.jpg"
import img2_16 from "../images/img2_16.jpg"
import img2_17 from "../images/img2_17.jpg"
import img2_18 from "../images/img2_18.jpg"
import img2_19 from "../images/img2_19.jpg"
import img3_1 from "../images/img3_1.jpg"
import img3_2 from "../images/img3_2.jpg"
import img3_3 from "../images/img3_3.jpg"
import img3_4 from "../images/img3_4.jpg"
import img3_5 from "../images/img3_5.jpg"
import img3_6 from "../images/img3_6.jpg"
import img3_7 from "../images/img3_7.jpg"
import img3_8 from "../images/img3_8.jpg"
import img3_9 from "../images/img3_9.jpg"
import img3_10 from "../images/img3_10.jpg"
import img3_11 from "../images/img3_11.jpg"
import img3_12 from "../images/img3_12.jpg"
import img3_13 from "../images/img3_13.jpg"
import img3_14 from "../images/img3_14.jpg"
import img3_15 from "../images/img3_15.jpg"
import img3_16 from "../images/img3_16.jpg"
import img3_17 from "../images/img3_17.jpg"
import img3_18 from "../images/img3_18.jpg"
import img3_19 from "../images/img3_19.jpg"
import img3_20 from "../images/img3_20.jpg"

import './BooksListCategory.css';

const BooksListCategory = (props) => { 
  const dispatch = useDispatch();
  console.log(props.info)

  const [name, setName] = useState(props.info.nameBook);
  const [image, setImage] = useState(props.info.image);
  const [author, setAuthor] = useState(props.info.author);
  const [price, setPrice] = useState(props.info.price);
  const [id, setId] = useState(props.info.id);
  let img;

  switch (image) {
    case 'img1_1.jpg':
      img=img1_1;
      break;
    case 'img1_2.jpg':
      img=img1_2;
      break;
    case 'img1_3.jpg':
      img=img1_3;
      break;
    case 'img1_4.jpg':
      img=img1_4;
      break;
    case 'img1_5.jpg':
      img=img1_5;
      break;
    case 'img1_6.jpg':
      img=img1_6;
      break;
    case 'img1_7.jpg':
      img=img1_7;
      break;
    case 'img1_8.jpg':
      img=img1_8;
      break;
    case 'img1_9.jpg':
      img=img1_9;
      break;
    case 'img1_10.jpg':
      img=img1_10;
      break;
    case 'img1_11.jpg':
      img=img1_11;
      break;
    case 'img1_12.jpg':
      img=img1_12;
      break;
    case 'img1_13.jpg':
      img=img1_13;
      break;
    case 'img1_14.jpg':
      img=img1_14;
      break;
    case 'img1_15.jpg':
      img=img1_15;
      break;
    case 'img1_16.jpg':
      img=img1_16;
      break;
    case 'img1_17.jpg':
      img=img1_17;
      break;
    case 'img1_18.jpg':
      img=img1_18;
      break;
    case 'img1_19.jpg':
      img=img1_19;
      break;
    case 'img1_20.jpg':
      img=img1_20;
      break;
    case 'img1_21.jpg':
      img=img1_21;
      break;
    case 'img1_22.jpg':
      img=img1_22;
      break;
    case 'img1_23.jpg':
      img=img1_23;
      break;
    case 'img1_24.jpg':
      img=img1_24;
      break;
    case 'img1_25.jpg':
      img=img1_25;
      break;
    case 'img1_26.jpg':
      img=img1_26;
      break;
    case 'img1_27.jpg':
      img=img1_27;
      break;
    case 'img1_28.jpg':
      img=img1_28;
      break;
    case 'img1_29.jpg':
      img=img1_29;
      break;
    case 'img1_30.jpg':
      img=img1_30;
      break;
    case 'img1_31.jpg':
      img=img1_31;
      break;
    case 'img1_32.jpg':
      img=img1_32;
      break;
    case 'img1_33.jpg':
      img=img1_33;
      break;
    case 'img1_34.jpg':
      img=img1_34;
      break;
    case 'img2_1.jpg':
      img=img2_1;
      break;
    case 'img2_2.jpg':
      img=img2_2;
      break;
    case 'img2_3.jpg':
      img=img2_3;
      break;
    case 'img2_4.jpg':
      img=img2_4;
      break;
    case 'img2_5.jpg':
      img=img2_5;
      break;
    case 'img2_6.jpg':
      img=img2_6;
      break;
    case 'img2_7.jpg':
      img=img2_7;
      break;
    case 'img2_8.jpg':
      img=img2_8;
      break;
    case 'img2_9.jpg':
      img=img2_9;
      break;
    case 'img2_10.jpg':
      img=img2_10;
      break;
    case 'img2_11.jpg':
      img=img2_11;
      break;
    case 'img2_12.jpg':
      img=img2_12;
      break;
    case 'img2_13.jpg':
      img=img2_13;
      break;
    case 'img2_14.jpg':
      img=img2_14;
      break;
    case 'img2_15.jpg':
      img=img2_15;
      break;
    case 'img2_16.jpg':
      img=img2_16;
      break;
    case 'img2_17.jpg':
      img=img2_17;
      break;
    case 'img2_18.jpg':
      img=img2_18;
      break;
    case 'img2_19.jpg':
      img=img2_19;
      break;
  }

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
      <img className="Image" src={img}/><br/>
      <div className="TextBookName">{name}</div>
      <div className="TextBook">{author}</div>
      <div className="TextBookName">{price} руб.</div>
      <div className="TextBook">
        <NavLink onClick={addToOrder}>
          <img className="Icons3" src="karzina.png"/>
        </NavLink>
      </div>
    </div>
    </>
  );  
}
export default BooksListCategory;
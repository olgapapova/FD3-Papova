import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setOrder } from "../redux/orderSlice.js";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import karzina from "../images/karzina.png"
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
import img4_1 from "../images/img4_1.jpg"
import img4_2 from "../images/img4_2.jpg"
import img4_3 from "../images/img4_3.jpg"
import img4_4 from "../images/img4_4.jpg"
import img4_5 from "../images/img4_5.jpg"
import img4_6 from "../images/img4_6.jpg"
import img4_7 from "../images/img4_7.jpg"
import img4_8 from "../images/img4_8.jpg"
import img4_9 from "../images/img4_9.jpg"
import img4_10 from "../images/img4_10.jpg"
import img4_11 from "../images/img4_11.jpg"
import img4_12 from "../images/img4_12.jpg"
import img4_13 from "../images/img4_13.jpg"
import img4_14 from "../images/img4_14.jpg"
import img4_15 from "../images/img4_15.jpg"
import img4_16 from "../images/img4_16.jpg"
import img4_17 from "../images/img4_17.jpg"
import img4_18 from "../images/img4_18.jpg"
import img4_19 from "../images/img4_19.jpg"
import img4_20 from "../images/img4_20.jpg"
import img4_21 from "../images/img4_21.jpg"
import img4_22 from "../images/img4_22.jpg"
import img5_1 from "../images/img5_1.jpg"
import img5_2 from "../images/img5_2.jpg"
import img5_3 from "../images/img5_3.jpg"
import img5_4 from "../images/img5_4.jpg"
import img5_5 from "../images/img5_5.jpg"
import img5_6 from "../images/img5_6.jpg"
import img5_7 from "../images/img5_7.jpg"
import img5_8 from "../images/img5_8.jpg"
import img5_9 from "../images/img5_9.jpg"
import img5_10 from "../images/img5_10.jpg"
import img5_11 from "../images/img5_11.jpg"
import img5_12 from "../images/img5_12.jpg"
import img5_13 from "../images/img5_13.jpg"
import img5_14 from "../images/img5_14.jpg"
import img5_15 from "../images/img5_15.jpg"
import img5_16 from "../images/img5_16.jpg"
import img5_17 from "../images/img5_17.jpg"
import img5_18 from "../images/img5_18.jpg"
import img5_19 from "../images/img5_19.jpg"
import img5_20 from "../images/img5_20.jpg"
import img5_21 from "../images/img5_21.jpg"
import img5_22 from "../images/img5_22.jpg"
import img5_23 from "../images/img5_23.jpg"
import img5_24 from "../images/img5_24.jpg"
import img5_25 from "../images/img5_25.jpg"
import img5_26 from "../images/img5_26.jpg"
import img5_27 from "../images/img5_27.jpg"
import img5_28 from "../images/img5_28.jpg"
import img5_29 from "../images/img5_29.jpg"
import img6_1 from "../images/img6_1.jpg"
import img6_2 from "../images/img6_2.jpg"
import img6_3 from "../images/img6_3.jpg"
import img6_4 from "../images/img6_4.jpg"
import img6_5 from "../images/img6_5.jpg"
import img6_6 from "../images/img6_6.jpg"
import img6_7 from "../images/img6_7.jpg"
import img6_8 from "../images/img6_8.jpg"
import img6_9 from "../images/img6_9.jpg"
import img6_10 from "../images/img6_10.jpg"
import img6_11 from "../images/img6_11.jpg"
import img6_12 from "../images/img6_12.jpg"
import img7_1 from "../images/img7_1.jpg"
import img7_2 from "../images/img7_2.jpg"
import img7_3 from "../images/img7_3.jpg"
import img7_4 from "../images/img7_4.jpg"
import img7_5 from "../images/img7_5.jpg"
import img7_6 from "../images/img7_6.jpg"
import img7_7 from "../images/img7_7.jpg"

import './BooksListCategory.css';

export const PageBook = () => { 

  const books = useSelector(state => state.books.data); 
  const chooseBook = useSelector(state => state.chooseBook.dataCh);
  let book;
  let img; 

  if (books !== null) {
    book=books.find(item => item.id === chooseBook);
  }
  if (book) {
  switch (book.image) {
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
    case 'img3_1.jpg':
      img=img3_1;
      break;
    case 'img3_2.jpg':
      img=img3_2;
      break;
    case 'img3_3.jpg':
      img=img3_3;
      break;
    case 'img3_4.jpg':
      img=img3_4;
      break;
    case 'img3_5.jpg':
      img=img3_5;
      break;
    case 'img3_6.jpg':
      img=img3_6;
      break;
    case 'img3_7.jpg':
      img=img3_7;
      break;
    case 'img3_8.jpg':
      img=img3_8;
      break;
    case 'img3_9.jpg':
      img=img3_9;
      break;
    case 'img3_10.jpg':
      img=img3_10;
      break;
    case 'img3_11.jpg':
      img=img3_11;
      break;
    case 'img3_12.jpg':
      img=img3_12;
      break;
    case 'img3_13.jpg':
      img=img3_13;
      break;
    case 'img3_14.jpg':
      img=img3_14;
      break;
    case 'img3_15.jpg':
      img=img3_15;
      break;
    case 'img3_16.jpg':
      img=img3_16;
      break;
    case 'img3_17.jpg':
      img=img3_17;
      break;
    case 'img3_18.jpg':
      img=img3_18;
      break;
    case 'img3_19.jpg':
      img=img3_19;
      break;
    case 'img3_20.jpg':
      img=img3_20;
      break;
    case 'img4_1.jpg':
      img=img4_1;
      break;
    case 'img4_2.jpg':
      img=img4_2;
      break;
    case 'img4_3.jpg':
      img=img4_3;
      break;
    case 'img4_4.jpg':
      img=img4_4;
      break;
    case 'img4_5.jpg':
      img=img4_5;
      break;
    case 'img4_6.jpg':
      img=img4_6;
      break;
    case 'img4_7.jpg':
      img=img4_7;
      break;
    case 'img4_8.jpg':
      img=img4_8;
      break;
    case 'img4_9.jpg':
      img=img4_9;
      break;
    case 'img4_10.jpg':
      img=img4_10;
      break;
    case 'img4_11.jpg':
      img=img4_11;
      break;
    case 'img4_12.jpg':
      img=img4_12;
      break;
    case 'img4_13.jpg':
      img=img4_13;
      break;
    case 'img4_14.jpg':
      img=img4_14;
      break;
    case 'img4_15.jpg':
      img=img4_15;
      break;
    case 'img4_16.jpg':
      img=img4_16;
      break;
    case 'img4_17.jpg':
      img=img4_17;
      break;
    case 'img4_18.jpg':
      img=img4_18;
      break;
    case 'img4_19.jpg':
      img=img4_19;
      break;
    case 'img4_20.jpg':
      img=img4_20;
      break;
    case 'img4_21.jpg':
      img=img4_21;
      break;
    case 'img4_22.jpg':
      img=img4_22;
      break;
    case 'img5_1.jpg':
      img=img5_1;
      break;
    case 'img5_2.jpg':
      img=img5_2;
      break;
    case 'img5_3.jpg':
      img=img5_3;
      break;
    case 'img5_4.jpg':
      img=img5_4;
      break;
    case 'img5_5.jpg':
      img=img5_5;
      break;
    case 'img5_6.jpg':
      img=img5_6;
      break;
    case 'img5_7.jpg':
      img=img5_7;
      break;
    case 'img5_8.jpg':
      img=img5_8;
      break;
    case 'img5_9.jpg':
      img=img5_9;
      break;
    case 'img5_10.jpg':
      img=img5_10;
      break;
    case 'img5_11.jpg':
      img=img5_11;
      break;
    case 'img5_12.jpg':
      img=img5_12;
      break;
    case 'img5_13.jpg':
      img=img5_13;
      break;
    case 'img5_14.jpg':
      img=img5_14;
      break;
    case 'img5_15.jpg':
      img=img5_15;
      break;
    case 'img5_16.jpg':
      img=img5_16;
      break;
    case 'img5_17.jpg':
      img=img5_17;
      break;
    case 'img5_18.jpg':
      img=img5_18;
      break;
    case 'img5_19.jpg':
      img=img5_19;
      break;
    case 'img5_20.jpg':
      img=img5_20;
      break;
    case 'img5_21.jpg':
      img=img5_21;
      break;
    case 'img5_22.jpg':
      img=img5_22;
      break;
    case 'img5_23.jpg':
      img=img5_23;
      break;
    case 'img5_24.jpg':
      img=img5_24;
      break;
    case 'img5_25.jpg':
      img=img5_25;
      break;
    case 'img5_26.jpg':
      img=img5_26;
      break;
    case 'img5_27.jpg':
      img=img5_27;
      break;
    case 'img5_28.jpg':
      img=img5_28;
      break;
    case 'img5_29.jpg':
      img=img5_29;
      break;
    case 'img6_1.jpg':
      img=img6_1;
      break;
    case 'img6_2.jpg':
      img=img6_2;
      break;
    case 'img6_3.jpg':
      img=img6_3;
      break;
    case 'img6_4.jpg':
      img=img6_4;
      break;
    case 'img6_5.jpg':
      img=img6_5;
      break;
    case 'img6_6.jpg':
      img=img6_6;
      break;
    case 'img6_7.jpg':
      img=img6_7;
      break;
    case 'img6_8.jpg':
      img=img6_8;
      break;
    case 'img6_9.jpg':
      img=img6_9;
      break;
    case 'img6_10.jpg':
      img=img6_10;
      break;
    case 'img6_11.jpg':
      img=img6_11;
      break;
    case 'img6_12.jpg':
      img=img6_12;
      break;
    case 'img7_1.jpg':
      img=img7_1;
      break;
    case 'img7_2.jpg':
      img=img7_2;
      break;
    case 'img7_3.jpg':
      img=img7_3;
      break;
    case 'img7_4.jpg':
      img=img7_4;
      break;
    case 'img7_5.jpg':
      img=img7_5;
      break;
    case 'img7_6.jpg':
      img=img7_6;
      break;
    case 'img7_7.jpg':
      img=img7_7;
      break;
  }
}

  const dispatch = useDispatch();

  function addToOrder() {
    dispatch( setOrder({
      id: book.id,
      image: book.image,
      nameBook: book.nameBook,
      price: book.price,
    }) );
  };

  return (
    <>
    <div className="Navigation">
        <NavLink to="/">Главная</NavLink><span> &gt; { book && book.nameBook }</span>
    </div>
    {
        books !==null ? !book &&
        <div className="mes">По данному запросу ничего не найдено!</div> 
        : null
    }
    { book &&
    <div className="WrapCh">
      <div className="clearfix:after">
        <img className="ImageBookCh" src={img}/><br/>
        <div className="CategoryBookChoose">
          <div className="TextBookNameBookCh">{book.nameBook}</div>
          <div className="TextBookBookCh">{book.author}</div>
          <div className="TextBookNameBookCh">{book.price} руб.</div>
          <div className="TextBookCh">
            <NavLink onClick={addToOrder}>
              <img className="Icons3Choose" src={karzina}/>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );  
}

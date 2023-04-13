import { useDispatch, useSelector } from 'react-redux';
import { booksLoad } from "../redux/booksLoad.js";
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import  BooksListCategory  from './BooksListCategory';

export const FictionPage = () => {

  const dispatch = useDispatch();

  useEffect (
    ()=> {
    dispatch( booksLoad );
  },[])

  let books = useSelector( state => state.books );
  let [listBooks, setlistBooks]=useState(books);
  console.log(books)
  let booksList;

  function componentF () {
    let booksListFilter=listBooks.data.filter(s => s.category===1);
    console.log(booksListFilter)
    
    booksList=booksListFilter.map(v=> 
      <BooksListCategory key={v.id} info={v}/>)
  }
  componentF();

  return (
    <>
      <div className="Navigation">
        <NavLink to="/">Главная</NavLink><span> &gt; Художественная литература</span>
      </div>
      <div>
        {booksList}
      </div>
    </>
);

}
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
  let booksList;

  function componentF () {
    if (books.data !== null) {
      let booksListFilter=books.data.filter(s => s.category===1);
    
      booksList=booksListFilter.map(v=> 
        <BooksListCategory key={v.id} info={v}/>)
    }
  }
  componentF();

  return (
    <>
      <div className="Navigation">
        <NavLink to="/">Главная</NavLink><span> &gt; Художественная литература</span>
      </div>
      <div>
        { (books.dataLoadState===0) && "нет данных" }
        { (books.dataLoadState===1) && "Загрузка данных..." }
        { (books.dataLoadState===2) &&  booksList }
        { (books.dataLoadState===3) && "error: "+books.dataLoadError }
      </div>
    </>
);

}
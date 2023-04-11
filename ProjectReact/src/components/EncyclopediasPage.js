import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import  BooksListCategory  from './BooksListCategory';

export const EncyclopediasPage = () => {

  const books = useSelector( state => state.books );
  let booksList;

  function componentF () {
    let booksListFilter=books.data.filter(s => s.category===6);
    console.log(booksListFilter)
    
    booksList=booksListFilter.map(v=> 
      <BooksListCategory key={v.id} info={v}/>)
  }
  componentF();

  return (
    <>
      <div className="Navigation">
        <NavLink to="/">Главная</NavLink><span> &gt; Энциклопедические издания</span>
      </div>
      <div>
        {booksList}
      </div>
    </>
);

}
import { useSelector } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';

import  BooksListCategory  from './BooksListCategory';

export const PoetryPage = () => {

  const books = useSelector( state => state.books );
  let booksList;

  function componentF () {
    if (books.data !==null) {
      let booksListFilter=books.data.filter(s => s.category===4);
      console.log(booksListFilter)
    
      booksList=booksListFilter.map(v=> 
        <BooksListCategory key={v.id} info={v}/>)
    }
  }
  componentF();

  return (
    <>
      <div className="Navigation">
        <NavLink to="/">Главная</NavLink><span> &gt; Стихи</span>
      </div>
      <div>
        {booksList}
      </div>
    </>
);

}
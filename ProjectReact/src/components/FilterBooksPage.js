import { useSelector } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';

import  BooksListCategory  from './BooksListCategory';

export const FilterBooksPage = () => {

  const books = useSelector(state => state.books );
  let booksList;
  let booksListFilter;

  let booksFilter = useSelector(state => state.booksChange.dataChange);
  if (booksFilter !== null)
    booksFilter=booksFilter.toLowerCase().trim();

  function componentF () {
   if (books.data !==null) {
      booksListFilter=books.data.filter(s=> s.nameBook.toLowerCase() === booksFilter || s.author.toLowerCase() === booksFilter);

      booksList=booksListFilter.map(v => 
      <BooksListCategory key={v.id} info={v}/>)
   }
  }
  componentF();

  return (
    <>
      <div className="Navigation">
        <NavLink to="/">Главная</NavLink><span> &gt; </span>
      </div>
      {
        books.data !==null ? (booksListFilter.length ===0) &&
        <div className="mes">По данному запросу ничего не найдено!</div> 
        : null
      }
      <div>
        {booksList}
      </div>
    </>
);

}
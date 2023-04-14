import { useSelector } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';

import  BooksListCategory  from './BooksListCategory';

export const FilterBooksPage = () => {

  const books = useSelector(state => state.books );
  let booksList;
  let booksListFilter;

  const booksFilter = useSelector(state => state.booksChange.dataChange);
  console.log(booksFilter);

  function componentF () {
   if (books.data !==null) {

      booksListFilter=books.data.filter(s=> s.nameBook === booksFilter || s.author === booksFilter);
      console.log(booksListFilter);

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
      <div>
        {booksList}
      </div>
    </>
);

}
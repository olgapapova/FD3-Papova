import { useSelector } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';

import  BooksListCategory  from './BooksListCategory';

export const FilterBooksPage = () => {

  const books = useSelector(state => state.books );
  let booksList;
  let booksListFilter;
  console.log(books);

  let booksFilter = useSelector(state => state.booksChange.dataChange);
  console.log(booksFilter);
  if (booksFilter !== null)
    booksFilter=booksFilter.toLowerCase().trim();

  function componentF () {
   if (books.data !==null) {
      console.log(books.data)
      booksListFilter=books.data.filter(s=> s.nameBook === booksFilter || s.author.toLowerCase() === booksFilter);
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
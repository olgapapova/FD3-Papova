import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import  BooksListCategory  from './BooksListCategory';

export const FilterBooksPage = () => {

  const booksFilter = useSelector( state => state.booksFilter );
  console.log(booksFilter)
  let booksList;

  function componentF () {
    
    booksList=booksFilter.dataFilter.map(v=> 
      <BooksListCategory key={v.id} info={v}/>)
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
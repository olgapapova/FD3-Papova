import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { booksList4Load } from "../redux/booksList4Load.js";
import  BooksListCategory  from './BooksListCategory';
import './PageCatalog.css';

export const Page4Catalog = () => {
  const dispatch = useDispatch();

  useEffect (
    ()=> {
    dispatch( booksList4Load );
  },[])

  const booksPage = useSelector( state => state.booksList );
  let booksList;

  function componentLs () {
    if (booksPage.dataList !== null) {
      booksList=booksPage.dataList.map(v=> 
        <BooksListCategory key={v.id} info={v}/>)
    }
  }
  componentLs();

  return (
    <>
      <div className="Navigation">
        <NavLink to="/">Главная</NavLink><span> &gt; Каталог &gt; 4</span>
      </div>
      <div className="CatalogWr">
        { (booksPage.dataLoadState===0) && "нет данных" }
        { (booksPage.dataLoadState===1) && "Загрузка данных..." }
        { (booksPage.dataLoadState===2) &&  booksList }
        { (booksPage.dataLoadState===3) && "error: "+booksPage.dataLoadError }
      </div>
      <div className="PageButtons">
      <NavLink to="/list/catalog/page1"><input className="PageButton" type="button" value={1}/></NavLink>&nbsp;&nbsp;
      <NavLink to="/list/catalog/page2"><input className="PageButton" type="button" value={2}/></NavLink>&nbsp;&nbsp;
      <NavLink to="/list/catalog/page3"><input className="PageButton" type="button" value={3}/></NavLink>&nbsp;&nbsp;
      <NavLink to="/list/catalog/page4"><input className="PageButton" type="button" value={4}/></NavLink>&nbsp;&nbsp;
      <NavLink to="/list/catalog/page5"><input className="PageButton" type="button" value={5}/></NavLink>
      </div>  
    </>
);

}
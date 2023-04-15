import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { booksList5Load } from "../redux/booksList5Load.js";
import  BooksListCategory  from './BooksListCategory';
import { choosePage } from '../redux/chooseSlice';
import './PageCatalog.css';

export const Page5Catalog = () => {
  const dispatch = useDispatch();

  useEffect (
    ()=> {
    dispatch( booksList5Load );
  },[])

  useEffect (
    ()=> {
    dispatch( choosePage(5) );
  },[])

  const booksPage = useSelector( state => state.booksList );
  let numPage= useSelector( state => state.chooseBook.dataPage );
  let booksList;

  function componentLs () {
    if (booksPage.dataList !== null) {
      booksList=booksPage.dataList.map(v=> 
        <BooksListCategory key={v.id} info={v}/>)
    }
  }
  componentLs();
  let nd= <div className="noData">нет данных</div>
  let zd= <div className="noData">Загрузка данных...</div>
  let od= <div className="noData">"error: "+{booksPage.dataLoadError}</div>

  return (
    <>
      <div className="Navigation">
        <NavLink to="/">Главная</NavLink><span> &gt; Каталог &gt; 5</span>
      </div>
      <div className="CatalogWr">
        { (booksPage.dataLoadState===0) && nd }
        { (booksPage.dataLoadState===1) && zd }
        { (booksPage.dataLoadState===2) &&  booksList }
        { (booksPage.dataLoadState===3) && od }
      </div>
      <div className="PageButtons">
      <NavLink to="/list/catalog/page1"><input className={`PageButton ${numPage===1 && 'pageActive'}`} type="button" value={1} onClick={()=> dispatch( choosePage(1) )}/></NavLink>&nbsp;&nbsp;
      <NavLink to="/list/catalog/page2"><input className={`PageButton ${numPage===2 && 'pageActive'}`} type="button" value={2} onClick={()=> dispatch( choosePage(2) )}/></NavLink>&nbsp;&nbsp;
      <NavLink to="/list/catalog/page3"><input className={`PageButton ${numPage===3 && 'pageActive'}`} type="button" value={3} onClick={()=> dispatch( choosePage(3) )}/></NavLink>&nbsp;&nbsp;
      <NavLink to="/list/catalog/page4"><input className={`PageButton ${numPage===4 && 'pageActive'}`} type="button" value={4} onClick={()=> dispatch( choosePage(4) )}/></NavLink>&nbsp;&nbsp;
      <NavLink to="/list/catalog/page5"><input className={`PageButton ${numPage===5 && 'pageActive'}`} type="button" value={5} onClick={()=> dispatch( choosePage(5) )}/></NavLink>
      </div>  
    </>
);

}
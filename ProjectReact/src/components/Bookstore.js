import { NavLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {useAuth} from 'hooks/use-auth.js';
import { useDispatch } from 'react-redux';
import { booksLoad } from "../redux/booksLoad.js";
import { booksFilterLoad } from "../redux/booksFilterLoad.js";
import { updateData } from "../redux/booksChangeSlice.js";
import { removeUser } from '../redux/userSlice';
import { Basket } from './Basket';

import './Bookstore.css';
import { PagesRouter } from './PagesRouter';

export const Bookstore = () => {

  let [cartOpen, setCartOpen]=useState(false);
  let [bookName, setBookName]=useState("");

  let navigate = useNavigate();
  const {isAuth, email} = useAuth();
  const dispatch = useDispatch();

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  useEffect (
    ()=> {
    dispatch( booksLoad );
  },[])

  function goToBooksFilter() {
    dispatch( updateData(bookName) );
    dispatch( booksFilterLoad );
    const uri="/list/"+encodeURIComponent(bookName);
    console.log(uri);
    navigate(uri);
  };

    return (
      
      <div className='Conteyner'>
        <div className='Header'>
          <div className="HeaderConteyner">
            <NavLink to="/">
              <img className="Logo" src="logo_2.png"></img>
            </NavLink>
          </div>
          <div className="HeaderMenu">
            <div className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
              </label>
              <ul className="menu__box">
                <li><NavLink to="/" className="menu__item">Главная</NavLink></li>  
                <li><NavLink to="/catalog" className="menu__item">Весь каталог</NavLink></li>
                <li><NavLink to="/category1" className="menu__item">Художественная литература</NavLink></li>
                <li><NavLink to="/category2" className="menu__item">Учебная и научная литература</NavLink></li>
                <li><NavLink to="/category3" className="menu__item">Фантастика</NavLink></li>
                <li><NavLink to="/category4" className="menu__item">Стихи</NavLink></li>
                <li><NavLink to="/category5" className="menu__item">Детская литература</NavLink></li>
                <li><NavLink to="/category6" className="menu__item">Энциклопедические издания</NavLink></li>
                <li><NavLink to="/category7" className="menu__item">Справочная литература</NavLink></li>
                <li><NavLink to="/aboutUs" className="menu__item">О нас</NavLink></li>
                <li><NavLink to="/payment" className="menu__item">Оплата и доставка</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="HeaderConteyner1">
            <NavLink to="/catalog/1" className="atuin-btn">Каталог</NavLink>
            <NavLink to="/aboutUs" className="atuin-btn">О нас</NavLink>
            <NavLink to="/payment" className="atuin-btn">Оплата и доставка</NavLink>
          </div>
          <div className="HeaderConteyner2">
          <form>
            <input className='Search' type='text' name='filter' placeholder="Искать здесь..." onChange={ eo => setBookName(eo.target.value) }/>
            <input className="SerchButton" value="Поиск" type="button" onClick={goToBooksFilter}/>
          </form>
          </div>
          {isAuth && (
            <div className="HeaderConteyner5">
              <button className="atuin-btn" onClick={()=>dispatch(removeUser())}>Выйти</button>
            </div>)}
          <div className="HeaderConteyner4">
            <div><NavLink to="/login"><img className="ShopCartButton" src="avt.png"/></NavLink></div> 
          </div>
          <div className="HeaderConteyner3">
            <div><img onClick={()=> setCartOpen(cartOpen= !cartOpen)} className={`ShopCartButton ${cartOpen && 'active'}`} src="karzina.png"/></div>
            {cartOpen && (
              <div className="ShopCart"><Basket></Basket></div>
            )}
          </div>
        </div>
      <div className="Menu">
          <div className="MenuItem"><NavLink to="/category1" className="MenuItem2">Художественная литература</NavLink></div><br/><hr/>
          <div className="MenuItem"><NavLink to="/category2" className="MenuItem2">Учебная и научная литература</NavLink></div><br/><hr/>
          <div className="MenuItem"><NavLink to="/category3" className="MenuItem2">Фантастика</NavLink></div><br/><hr/>
          <div className="MenuItem"><NavLink to="/category4" className="MenuItem2">Стихи</NavLink></div><br/><hr/>
          <div className="MenuItem"><NavLink to="/category5" className="MenuItem2">Детская литература</NavLink></div><br/><hr/>
          <div className="MenuItem"><NavLink to="/category6" className="MenuItem2">Энциклопедические издания</NavLink></div><br/><hr/>
          <div className="MenuItem"><NavLink to="/category7"className="MenuItem2">Справочная литература</NavLink></div>
      </div>
      <div className="Change"><PagesRouter /></div>
      <div className="Footer">
        <div className="FooterCatalog">
          <p className="FooterTitle">Каталог</p>
          <p>
            <NavLink className="FooterText" to="/category1#ykr">Художественная литература</NavLink><br/>
            <NavLink className="FooterText" to="/category5">Детская литература</NavLink><br/>
            <NavLink className="FooterText" to="/category2">Учебная и научная литература</NavLink><br/>
            <NavLink className="FooterText" to="/category3">Фантастика</NavLink><br/>
            <NavLink className="FooterText" to="/category4">Стихи</NavLink><br/>
            <NavLink className="FooterText" to="/category6">Энциклопедические издания</NavLink><br/>
            <NavLink className="FooterText" to="/category7">Справочная литература</NavLink></p>
        </div>
        <div className="FooterCatalog">
          <p className="FooterTitle">Контакты</p>
          <p className="FooterText">Адрес:<br/>
            г. Минск,  ул. Куйбышева, 13<br/><br/>
            тел. +375 33 111 11 11<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+375 33 000 00 00
          </p>
        </div>
        <div className="FooterCatalog">
          <p className="FooterTitle">О нас</p>
          <p className="FooterText">Свяжитесь с нами и мы поможем<br/>
            Вам в выборе книг. У нас большой<br/>
            выбор и доступные цены.
          </p>
        </div>
        <div className="FooterCatalog">
          <NavLink to="/"><img className="Icons" src="facebook.png" alt=""></img></NavLink>
          <NavLink to="/"><img className="Icons" src="vk.png" alt=""></img></NavLink>
          <NavLink to="/"><img className="Icons" src="inst.png" alt=""></img></NavLink>
        </div>
      </div>
    </div>
    );

};

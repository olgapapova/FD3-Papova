import React from 'react';
import { NavLink } from 'react-router-dom';

import './HomePage.css';

export const HomePage = () => { 

  return (
    
    <div className="ConteynerCategory">
      <div className="hover-text-one">
        <NavLink to="/category1">
          <figure className="effect-text-one">
            <img src="book-1.jpg" alt=""/>
            <figcaption>
	            <h3>Художественная</h3>
              <span>литература</span>
	            <p>Смотреть подробнее</p>
            </figcaption>			
          </figure>
        </NavLink> 
      </div>
      
      <div className="hover-text-one">
        <NavLink to="/category2">
          <figure className="effect-text-one">
            <img src="book-2.jpg" alt=""/>
            <figcaption>
	            <h3>Учебная и научная</h3>
              <span>литература</span>
	            <p>Смотреть подробнее</p>
            </figcaption>			
          </figure>
        </NavLink>
      </div>
      
      <div className="hover-text-one">
        <NavLink to="/category3">
          <figure className="effect-text-one">
            <img src="book-3.jpg" alt=""/>
            <figcaption>
	            <h3>Фантастика</h3>
              <span></span>
	            <p>Смотреть подробнее</p>
            </figcaption>			
          </figure>
        </NavLink>
      </div>
      
      <div className="hover-text-one">
        <NavLink to="/category4">
          <figure className="effect-text-one">
            <img src="book-4.jpg" alt=""/>
            <figcaption>
	            <h3>Стихи</h3>
              <span></span>
	            <p>Смотреть подробнее</p>
            </figcaption>			
          </figure>
        </NavLink>
      </div>
      
      <div className="hover-text-one">
        <NavLink to="/category5">
          <figure className="effect-text-one">
            <img src="book-5.jpg" alt=""/>
            <figcaption>
	            <h3>Детская</h3>
              <span>литература</span>
	            <p>Смотреть подробнее</p>
            </figcaption>			
          </figure>
        </NavLink>
      </div>
      
      <div className="hover-text-one">
        <NavLink to="/category6">
          <figure className="effect-text-one">
            <img src="book-6.jpg" alt=""/>
            <figcaption>
	            <h3>Энциклопедические</h3>
              <span>издания</span>
	            <p>Смотреть подробнее</p>
            </figcaption>			
          </figure>
        </NavLink>
      </div>
      
      <div className="hover-text-one">
        <NavLink to="/category7">
          <figure className="effect-text-one">
            <img src="book-7.jpg" alt=""/>
            <figcaption>
	            <h3>Справочная</h3>
              <span>литература</span>
	            <p>Смотреть подробнее</p>
            </figcaption>			
          </figure>
        </NavLink>
      </div>
         
    </div>
  );  
}
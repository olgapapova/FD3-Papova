import { useState } from "react";
import { NavLink } from 'react-router-dom';

import './BooksListCategory.css';

const Form = ({title, handClick}) => {
    let [email, setEmail]= useState('');
    let [pass, setPass]= useState('');

    return (
      <div className="PlaceAnOrderWr">
        <div className='PlaceAnOrder'>
          <input className='email' type="email" value={email} onChange={(eo)=>setEmail(eo.target.value)} placeholder="email" required/>
          <input className='name' type="password" value={pass} onChange={(eo)=>setPass(eo.target.value)} placeholder="password" required/>
          <button className='btn1'onClick={()=>handClick(email, pass)}>{title}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink to={title==="Зарегистрироваться" ? "/login" : "/register"}><button className='btn1'>{title==="Зарегистрироваться" ? "Авторизация" : "Регистрация"}</button></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink to="/"><button className='btn1'>Отмена</button></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    )
}
export {Form};
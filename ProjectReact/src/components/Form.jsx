import { useState } from "react";
import { NavLink } from 'react-router-dom';

import './BooksListCategory.css';

const Form = ({title, handClick}) => {
    let [email, setEmail]= useState('');
    let [pass, setPass]= useState('');
    let [valid, setValid]= useState(false);

    return (
      <div className="PlaceAnOrderWr">
        <div className='PlaceAnOrder'>
          <input className='email' type="email" value={email} onChange={(eo)=>{setEmail(eo.target.value);
            (email !== "" || email.length >=8) && setValid(false)}} placeholder="email" required/>
          {(email === "" || email.length < 8)  &&  <p className="Valid">Введите Email не менее 8 символов</p>}
          <input data-testid="inpPas" className='name' type="password" value={pass} onChange={(eo)=>{setPass(eo.target.value);(pass !== "" || pass.length >=6) && setValid(false)}} placeholder="password" required/>
          {(pass === "" || pass.length < 6 ) && <p className="Valid">Введите пароль не менее 6 символов</p>}
          <button className="btn1" onClick={()=>handClick(email, pass)} disabled={valid}>{title}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink to={title==="Зарегистрироваться" ? "/login" : "/register"}><button className='btn1'>{title==="Зарегистрироваться" ? "Авторизация" : "Регистрация"}</button></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink to="/"><button className='btn1'>Отмена</button></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    )
}
export {Form};
import { useState } from "react";
import { NavLink } from 'react-router-dom';

import './BooksListCategory.css';

const Form = ({title, handClick}) => {
    let [email, setEmail]= useState('');
    let [pass, setPass]= useState('');

    return (
        <div>
          <input type="email" value={email} onChange={(eo)=>setEmail(eo.target.value)} placeholder="email"/><br/><br/>
          <input type="password" value={pass} onChange={(eo)=>setPass(eo.target.value)} placeholder="password"/><br/><br/>
          <button onClick={()=>handClick(email, pass)}>{title}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink className="log" to="/">Отмена</NavLink>
        </div>
    )
}
export {Form};
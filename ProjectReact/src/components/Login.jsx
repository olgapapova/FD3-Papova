import {useNavigate} from 'react-router-dom';
import {Form} from './Form';
import { useDispatch } from 'react-redux';
import {setUser} from '../redux/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then(({user})=>{
            console.log(user);
            dispatch(setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken
            }));
            navigate('/');
          })
          .catch(()=>alert("Не верный логин или пароль!"))
    }

    return (
        <Form 
          title="Войти"
          handClick={handLogin}
         />
    )
}
export {Login};
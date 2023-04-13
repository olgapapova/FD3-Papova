import {useNavigate} from 'react-router-dom';
import {Form} from './Form';
import { useDispatch } from 'react-redux';
import {setUser} from '../redux/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then(({user})=>{
            console.log(user);
            dispatch(setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken
            }));
            navigate('/');
          })
          .catch(console.error)
    }

    return (
        <Form
          title="Зарегистрироваться"
          handClick={handRegister}
        />
    )
}
export {SignUp};
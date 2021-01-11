import React, { useState, useEffect, useRef } from 'react';
import '../styles/LoginForm.scss';
import UserIcon from '../assets/login-user.svg';
import PasswordIcon from '../assets/login-password.svg';
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { fetchUsers } from '../utils/fetchData';

const LoginForm = () => {
    const [users, setUsers] = useState({});
    const { loginValues, handleChange, errors, handleErrors } = useForm();
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useHistory();

    useEffect(() => {
        fetchUsers().then(data => setUsers(data));
     }, []);

    const { login, password } = loginValues;

    const handleSubmit = (event) => {
        event.preventDefault();

        const { login, password } = loginValues;

        users.forEach(user => {
            if(login === user.login && password === user.password) {
                history.push('/app');
            } else {
                 handleErrors();
            }
        });
    }

    return ( 
        <form className="form-container" onSubmit={handleSubmit}>
            <h3>Logowanie</h3>
            <p>Wprowadź swoje dane logowania</p>
            <div className="input-field">
                <img src={UserIcon} alt="user-icon"/>
                <input 
                type="text"
                name="login"
                value={login} 
                onChange={handleChange}
                placeholder="Login"
                ref={loginRef}></input>
            </div>
            {errors ? <p className="form-error">{errors.login}</p> : null}
            <div className="input-field">
                <img src={PasswordIcon} alt="password-icon"/>
                <input 
                type="password" 
                name="password"
                value={password} 
                onChange={handleChange}
                placeholder="Password"
                ref={passwordRef}></input>
            </div>
            {errors ? <p className="form-error">{errors.password}</p> : null}
            <button type="submit">Zaloguj</button>
        </form>
     );
}
 
export default LoginForm;
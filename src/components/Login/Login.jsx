import { useState } from 'react';
import './Login.css';
import FormWithTitle from '../FormWithTitle/FormWithTitle';

const Login = ({ loginError, onLogin }) => {
    const emailRegex = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!emailRegex.test(e.target.value)) {
            setErrorEmail('Введите корректный email');
        } else {
            setErrorEmail('');
        }
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setIsPasswordValid(e.target.validity.valid);
        if (!isPasswordValid) {
            setErrorPassword(e.target.validationMessage);
        } else {
            setErrorPassword('');
        }
    };
    const handleLogin = (e) => {
        e.preventDefault();
        onLogin(e, email, password);
    };
    return (
        <FormWithTitle
            title='Рады видеть!'
            btnTitle='Войти'
            onSubmit={handleLogin}
            loginError={loginError}
        >
            <label className='login__input-label'>E-mail</label>
            <input
                type='email'
                className='login__input'
                onChange={handleEmailChange}
                value={email}
                required
                minLength={3}
                maxLength={30}
            ></input>
            <span className='login__error-span'>{errorEmail}</span>
            <label className='login__input-label'>Пароль</label>
            <input
                type='password'
                className='login__input'
                onChange={handlePasswordChange}
                value={password}
                required
                minLength={3}
                maxLength={30}
            ></input>
            <span className='login__error-span'>{errorPassword}</span>
        </FormWithTitle>
    );
};

export default Login;

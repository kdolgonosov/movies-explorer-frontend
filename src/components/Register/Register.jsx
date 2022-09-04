import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import mainApi from '../../utils/MainApi';
import './Register.css';
import FormWithTitle from '../FormWithTitle/FormWithTitle';

const Register = ({ onLogin }) => {
    const emailRegex = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [registerError, setRegisterError] = useState(false);
    const history = useHistory();
    function handleNameChange(e) {
        setName(e.target.value);
        setIsNameValid(e.target.validity.valid);
        if (!isNameValid) {
            setErrorName(e.target.validationMessage);
        } else {
            setErrorName('');
        }
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!emailRegex.test(e.target.value)) {
            setIsEmailValid(false);
            setErrorEmail('Введите корректный email');
        } else {
            setIsEmailValid(true);
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
    function handleRegister(e) {
        e.preventDefault();
        mainApi.signUp(email, password, name).then((res) => {
            if (res === false) {
                setRegisterError(true);
            } else {
                onLogin(e, email, password);
            }
        });
    }
    return (
        <FormWithTitle
            title='Добро пожаловать!'
            btnTitle='Зарегистрироваться'
            onSubmit={handleRegister}
            registerError={registerError}
        >
            <label className='register__input-label'>Имя</label>
            <input
                type='text'
                className='register__input'
                onChange={handleNameChange}
                value={name}
                minLength={3}
                maxLength={30}
            ></input>
            <span className='register__error-span'>{errorName}</span>
            <label className='register__input-label'>E-mail</label>
            <input
                type='email'
                className='register__input'
                onChange={handleEmailChange}
                value={email}
            ></input>
            <span className='register__error-span'>{errorEmail}</span>
            <label className='register__input-label'>Пароль</label>
            <input
                type='password'
                className='register__input'
                onChange={handlePasswordChange}
                value={password}
                minLength={3}
                maxLength={30}
            ></input>
            <span className='register__error-span'>{errorPassword}</span>
        </FormWithTitle>
    );
};

export default Register;

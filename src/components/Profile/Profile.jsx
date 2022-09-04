import { useContext } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../utils/CurrentUserContext';
import { useState } from 'react';
import { useEffect } from 'react';

const Profile = ({ onUpdateUser, onSignOut }) => {
    const inputs = document.querySelectorAll('.profile__info-item_type_data');
    const emailRegex = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [isEditable, setIsEditable] = useState(false);

    const [isNameValid, setIsNameValid] = useState(false);
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    useEffect(() => {
        inputs.forEach((input) => {
            input.disabled = !input.disabled;
        });
    }, [isEditable]);
    useEffect(() => {
        const nameInput = document.querySelectorAll('.profile__info-item_type_data')[0];
        const emailInput = document.querySelectorAll('.profile__info-item_type_data')[1];
        nameInput.value = currentUser.name;
        emailInput.value = currentUser.email;
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);
    const handleNameChange = (e) => {
        setName(e.target.value);
        setIsNameValid(e.target.validity.valid);
        if (!isNameValid) {
            setErrorName(e.target.validationMessage);
        } else {
            setErrorName('');
        }
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!emailRegex.test(e.target.value)) {
            setErrorEmail('Введите корректный email');
        } else {
            setErrorEmail('');
        }
    };
    const handleEditable = () => {
        setIsEditable(!isEditable);
        if (isEditable) {
            onUpdateUser(name, email);
        }
    };
    return (
        <>
            <Header />
            <section className='profile'>
                <h1 className='profile__greetings'>Привет, {currentUser.name}</h1>
                <div className='profile__info-grid'>
                    <p className='profile__info-item profile__info-item_type_key'>Имя</p>
                    <input
                        onChange={handleNameChange}
                        className='profile__info-item profile__info-item_type_data'
                        type='text'
                        placeholder='Введите имя'
                        value={name}
                        required
                        minLength={3}
                        maxLength={30}
                        disabled
                    />
                    <span className='profile__info-errorSpan'>{errorName}</span>
                    <p className='profile__info-item profile__info-item_type_key'>E-mail</p>
                    <input
                        onChange={handleEmailChange}
                        className='profile__info-item profile__info-item_type_data'
                        type='email'
                        placeholder='Введите email'
                        value={email}
                        required
                        minLength={3}
                        maxLength={30}
                        disabled
                    />
                    <span className='profile__info-errorSpan'>{errorEmail}</span>
                </div>
                {isEditable ? (
                    <button className='profile__edit-btn' onClick={handleEditable}>
                        Сохранить
                    </button>
                ) : (
                    <button className='profile__edit-btn' onClick={handleEditable}>
                        Редактировать
                    </button>
                )}
                <a className='profile__signout-btn' onClick={onSignOut}>
                    Выйти из аккаунта
                </a>
            </section>
        </>
    );
};

export default Profile;

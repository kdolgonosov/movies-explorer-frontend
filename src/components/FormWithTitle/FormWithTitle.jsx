import { NavLink, useLocation } from 'react-router-dom';
import './FormWithTitle.css';

const FormWithTitle = ({ title, children, btnTitle }) => {
    let location = useLocation();
    return (
        <section className='formWithTitle'>
            <NavLink className='formWithTitle__logo' to='/'></NavLink>
            <h1 className='formWithTitle__title'>{title}</h1>
            <form className='formWithTitle__form'>
                {children}
                <button type='submit' className='formWithTitle__submit-btn'>
                    {btnTitle}
                </button>
            </form>
            <p className='formWithTitle__signin-label'>
                {location.pathname === '/signin'
                    ? `Ещё не зарегистрированы?`
                    : `Уже зарегистрированы?`}{' '}
                <NavLink
                    className='formWithTitle__signin-link'
                    to={location.pathname === '/signin' ? `/signup` : '/signin'}
                >
                    {location.pathname === '/signin' ? `Регистрация` : `Войти`}
                </NavLink>
            </p>
        </section>
    );
};

export default FormWithTitle;

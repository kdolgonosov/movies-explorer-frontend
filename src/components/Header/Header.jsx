import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    let location = useLocation();
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
    return (
        <>
            <header
                className={`header ${
                    location.pathname !== '/' ? `header_type_movies` : `header_type_main`
                }`}
            >
                <nav className='header-wrapper'>
                    <NavLink exact to='/' className='header__logo'></NavLink>
                    {location.pathname !== '/' && (
                        <>
                            <NavLink
                                to='/movies'
                                className='header__nav-link'
                                activeClassName='header__nav-link header__nav-link_type_active'
                            >
                                Фильмы
                            </NavLink>
                            <NavLink
                                to='/saved-movies'
                                className='header__nav-link'
                                activeClassName='header__nav-link header__nav-link_type_active'
                            >
                                Сохранённые фильмы
                            </NavLink>
                        </>
                    )}
                </nav>
                {location.pathname === '/' ? (
                    <div className='header__sign-wrapper'>
                        <NavLink to='/signup' className='header__signup-link'>
                            Регистрация
                        </NavLink>
                        <NavLink to='/signin' className='header__signin-link'>
                            Войти
                        </NavLink>
                    </div>
                ) : (
                    <>
                        <NavLink to='/profile' className='header__profile-link'>
                            Аккаунт
                        </NavLink>
                        <button
                            className='header__mobile-menu'
                            type='button'
                            onClick={() => setIsMobileMenuOpened(true)}
                        ></button>
                    </>
                )}
            </header>

            <nav
                className={
                    isMobileMenuOpened
                        ? `header__mobile-nav header__mobile-nav_show`
                        : `header__mobile-nav`
                }
            >
                <div className='header__mobile-wrapper'>
                    <button
                        className='header__mobile-nav-closeBtn'
                        type='button'
                        onClick={() => setIsMobileMenuOpened(false)}
                    ></button>
                    <NavLink
                        exact
                        to='/'
                        className='header__mobile-nav-link'
                        activeClassName='header__mobile-nav-link header__mobile-nav-link_type_active'
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to='/movies'
                        className='header__mobile-nav-link'
                        activeClassName='header__mobile-nav-link header__mobile-nav-link_type_active'
                    >
                        Фильмы
                    </NavLink>
                    <NavLink
                        to='/saved-movies'
                        className='header__mobile-nav-link'
                        activeClassName='header__mobile-nav-link header__mobile-nav-link_type_active'
                    >
                        Сохранённые фильмы
                    </NavLink>
                    <NavLink to='/profile' className='header__mobile-nav-profile-link'>
                        Аккаунт
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default Header;

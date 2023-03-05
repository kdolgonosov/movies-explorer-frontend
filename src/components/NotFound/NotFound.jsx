import './NotFound.css';
import { NavLink } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='notFound'>
            <span className='notFound__statusCode'>404</span>
            <p className='notFound__statusMessage'>Страница не найдена</p>
            <NavLink to='/movies' className='notFound__link'>
                Назад
            </NavLink>
        </div>
    );
};

export default NotFound;

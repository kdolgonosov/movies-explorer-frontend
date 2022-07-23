import './Profile.css';
import Header from '../Header/Header';

const Profile = () => {
    const name = 'Виталий';
    const email = 'sample@email.com';
    return (
        <>
            <Header />
            <section className='profile'>
                <h1 className='profile__greetings'>Привет, {name}</h1>
                <div className='profile__info-grid'>
                    <p className='profile__info-item profile__info-item_type_key'>Имя</p>
                    <p className='profile__info-item profile__info-item_type_data'>{name}</p>
                    <p className='profile__info-item profile__info-item_type_key'>E-mail</p>
                    <p className='profile__info-item profile__info-item_type_data'>{email}</p>
                </div>
                <a className='profile__edit-btn'>Редактировать</a>
                <a className='profile__signout-btn'>Выйти из аккаунта</a>
            </section>
        </>
    );
};

export default Profile;

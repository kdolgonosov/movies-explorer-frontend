import './MoviesCard.css';

const MoviesCard = ({ title, duration, link }) => {
    return (
        <div className='moviesCard'>
            <div className='moviesCard-wrapper'>
                <p className='moviesCard__title'>{title}</p>
                <p className='moviesCard__duration'>{duration}</p>
            </div>
            <img className='moviesCard__image' src={link} alt={title}></img>
            <button className='moviesCard__button'>Сохранить</button>
        </div>
    );
};

export default MoviesCard;

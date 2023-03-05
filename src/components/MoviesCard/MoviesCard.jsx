import './MoviesCard.css';
import mainApi from '../../utils/MainApi';
import { useState } from 'react';

const MoviesCard = ({
    _id,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    id,
    nameRU,
    nameEN,
    isSavedMovies,
    onDeleteMovie,
    isLikedMovie,
}) => {
    const [isLiked, setIsLiked] = useState(isLikedMovie);
    const onAddMovie = () => {
        mainApi
            .addMovie({
                country,
                director,
                duration,
                year,
                description,
                image: `https://api.nomoreparties.co${image.url}`,
                trailerLink,
                thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
                movieId: id,
                nameRU,
                nameEN,
            })
            .then((movie) => {
                const currentSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
                currentSavedMovies.push(movie);
                localStorage.setItem('savedMovies', JSON.stringify(currentSavedMovies));
                setIsLiked(true);
            });
    };
    const handleDeleteMovie = () => {
        mainApi.deleteMovie(_id).then((movie) => {
            onDeleteMovie(movie._id);
        });
    };
    const formatDuration = (mins) => {
        if (mins < 60) {
            return `${mins}м`;
        } else {
            return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
        }
    };
    return (
        <div className='moviesCard'>
            <div className='moviesCard-wrapper'>
                <p className='moviesCard__title'>{nameRU}</p>
                <p className='moviesCard__duration'>{formatDuration(duration)}</p>
            </div>
            <a href={`${trailerLink}`} target='_blank' rel='noreferrer'>
                <img
                    className='moviesCard__image'
                    src={isSavedMovies ? image : `https://api.nomoreparties.co${image.url}`}
                    alt={nameRU}
                ></img>
            </a>
            <button
                className={
                    isLikedMovie || isLiked
                        ? 'moviesCard__button moviesCard__button_type_added'
                        : 'moviesCard__button'
                }
                onClick={isSavedMovies ? handleDeleteMovie : onAddMovie}
            >
                {isLikedMovie || isLiked ? '✓' : isSavedMovies ? 'X' : 'Сохранить'}
            </button>
        </div>
    );
};

export default MoviesCard;

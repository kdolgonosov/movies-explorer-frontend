import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import { getShownMovieCount, getLoadStep } from '../../utils/getVisisbleMoviesCount';
const MoviesCardList = ({ isSavedMovies, onDeleteMovie, movies }) => {
    const windowWidth = useWindowWidth();
    const [shownMoviesCount, setShownMoviesCount] = useState(getShownMovieCount(windowWidth));
    const [savedMovies, setSavedMovies] = useState([]);
    useEffect(() => {
        const localSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        if (!(localSavedMovies === null || localSavedMovies.length === 0)) {
            setSavedMovies(localSavedMovies);
        }
    }, []);
    useEffect(() => {
        setShownMoviesCount(getShownMovieCount(windowWidth));
    }, [windowWidth]);

    const handleLoadMore = () => {
        setShownMoviesCount(shownMoviesCount + getLoadStep(windowWidth));
    };
    return (
        <section className='moviesCardList'>
            <div className='moviesCardList__moviesList'>
                {movies.slice(0, shownMoviesCount).map((movie) => (
                    <MoviesCard
                        key={isSavedMovies ? movie._id : movie.id}
                        {...movie}
                        isSavedMovies={isSavedMovies}
                        onDeleteMovie={onDeleteMovie}
                        isLikedMovie={
                            !isSavedMovies && movies
                                ? savedMovies.some((film) => movie.id === film.movieId)
                                : false
                        }
                    />
                ))}
            </div>
            {!isSavedMovies && movies.length > shownMoviesCount && (
                <button className='moviesCardList__loadMoreBtn' onClick={handleLoadMore}>
                    Ещё
                </button>
            )}
        </section>
    );
};

export default MoviesCardList;

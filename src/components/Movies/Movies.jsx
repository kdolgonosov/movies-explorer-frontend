import { useEffect, useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import SavedMovies from '../SavedMovies/SavedMovies';

const Movies = () => {
    const [cachedMovies, setCachedMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isShownPreloader, setIsShownPreloader] = useState(false);
    const [isShownNothingFoundSpan, setIsShownNothingFoundSpan] = useState(false);
    useEffect(() => {
        const localFilteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
        if (!(localFilteredMovies === null || localFilteredMovies.length === 0)) {
            setFilteredMovies(localFilteredMovies);
        }
        const localMovies = JSON.parse(localStorage.getItem('cachedMovies'));
        setCachedMovies(localMovies);
        if (localMovies === null || localMovies.length === 0) {
            moviesApi.getMovies().then((res) => {
                setCachedMovies(res);
                localStorage.setItem('cachedMovies', JSON.stringify(res));
            });
        }
    }, []);
    const filterFilms = (inputValue, isShortFilms) => {
        return cachedMovies.filter((movie) => {
            if (isShortFilms) {
                let cardCheckBox = movie.duration < 41 ? movie : '';
                if (cardCheckBox) {
                    return cardCheckBox.nameRU.toLowerCase().includes(inputValue.toLowerCase());
                }
                return cardCheckBox;
            } else {
                return movie.nameRU.toLowerCase().includes(inputValue.toLowerCase());
            }
        });
    };
    const handleSearch = (inputValue, isShortFilms) => {
        setIsShownNothingFoundSpan(false);
        setIsShownPreloader(true);
        setFilteredMovies(filterFilms(inputValue, isShortFilms));
        localStorage.setItem(
            'filteredMovies',
            JSON.stringify(filterFilms(inputValue, isShortFilms)),
        );
        localStorage.setItem('checkboxValue', isShortFilms);
        localStorage.setItem('searchInputValue', inputValue);
        setTimeout(() => {
            if (filterFilms(inputValue, isShortFilms).length === 0) {
                setIsShownNothingFoundSpan(true);
            }
            setIsShownPreloader(false);
        }, 500);
    };

    return (
        <>
            <Header />
            <SearchForm onSubmit={handleSearch} />
            {isShownNothingFoundSpan && <span className='nothingFound'>Ничего не найдено</span>}
            {isShownPreloader ? (
                <Preloader />
            ) : (
                <MoviesCardList isSavedMovies={false} movies={filteredMovies} />
            )}

            <Footer />
        </>
    );
};

export default Movies;

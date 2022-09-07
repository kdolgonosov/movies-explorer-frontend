import { useEffect, useState } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi';

const SavedMovies = () => {
    const [savedMovies, setSavedMovies] = useState([]);
    const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
    const [isShownPreloader, setIsShownPreloader] = useState(false);
    const [isShownNothingFoundSpan, setIsShownNothingFoundSpan] = useState(false);
    useEffect(() => {
        mainApi.getSavedMovies().then(({ movies }) => {
            setSavedMovies(movies);
            localStorage.setItem('savedMovies', JSON.stringify(movies));
            setFilteredSavedMovies(movies);
        });
    }, []);
    const filterFilms = (inputValue, isShortFilms) => {
        return savedMovies.filter((movie) => {
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
        setFilteredSavedMovies(filterFilms(inputValue, isShortFilms));
        setTimeout(() => {
            if (filterFilms(inputValue, isShortFilms).length === 0) {
                setIsShownNothingFoundSpan(true);
            }
            setIsShownPreloader(false);
        }, 500);
    };
    const onDeleteMovie = (id) => {
        setSavedMovies(savedMovies.filter((movie) => id !== movie._id));
        setFilteredSavedMovies(filteredSavedMovies.filter((movie) => id !== movie._id));
        localStorage.setItem(
            'savedMovies',
            JSON.stringify(savedMovies.filter((movie) => id !== movie._id)),
        );
    };
    return (
        <>
            <Header />
            <SearchForm onSubmit={handleSearch} />
            {isShownNothingFoundSpan && <span className='nothingFound'>Ничего не найдено</span>}
            {isShownPreloader ? (
                <Preloader />
            ) : (
                <MoviesCardList
                    isSavedMovies={true}
                    movies={filteredSavedMovies}
                    onDeleteMovie={onDeleteMovie}
                />
            )}
            <Footer />
        </>
    );
};

export default SavedMovies;

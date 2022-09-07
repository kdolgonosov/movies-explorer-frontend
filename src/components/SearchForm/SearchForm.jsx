import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';
const SearchForm = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');
    const [isShortFilms, setIsShortFilms] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('searchInputValue')) {
            setInputValue(localStorage.getItem('searchInputValue'));
        }
        if (localStorage.getItem('checkboxValue')) {
            setIsShortFilms(JSON.parse(localStorage.getItem('checkboxValue')));
            checkIsShort();
        }
    }, []);
    useEffect(() => {
        if (
            localStorage.getItem('filteredMovies') &&
            JSON.parse(localStorage.getItem('filteredMovies')).length !== 0
        ) {
            onSubmit(inputValue, isShortFilms);
        }
    }, [isShortFilms]);
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleCheckboxChange = () => {
        setIsShortFilms(!isShortFilms);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        onSubmit(inputValue, isShortFilms);
    };
    const checkIsShort = () => {
        const input = document.getElementById('testId');
        const test = JSON.parse(localStorage.getItem('checkboxValue'));
        if (test) {
            input.checked = true;
        } else {
            input.checked = false;
        }
    };
    return (
        <section className='searchForm'>
            <form className='searchForm-wrapper'>
                <input
                    type='text'
                    placeholder='Фильм'
                    className='searchForm__input'
                    onChange={handleInputChange}
                    value={inputValue}
                    required
                ></input>
                <button className='searchForm__button' onClick={handleSearch}>
                    Поиск
                </button>
            </form>
            <FilterCheckbox
                caption='Короткометражки'
                isShortFilms={isShortFilms}
                handleChange={handleCheckboxChange}
            />
        </section>
    );
};

export default SearchForm;

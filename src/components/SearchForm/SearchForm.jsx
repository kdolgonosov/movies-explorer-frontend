import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
const SearchForm = () => {
    return (
        <section className='searchForm'>
            <div className='searchForm-wrapper'>
                <input type='text' placeholder='Фильм' className='searchForm__input'></input>
                <button className='searchForm__button'>Поиск</button>
            </div>
            <FilterCheckbox caption='Короткометражки' />
        </section>
    );
};

export default SearchForm;

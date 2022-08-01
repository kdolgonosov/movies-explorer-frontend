import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
const SearchForm = () => {
    return (
        <section className='searchForm'>
            <form className='searchForm-wrapper'>
                <input
                    type='text'
                    placeholder='Фильм'
                    className='searchForm__input'
                    required
                ></input>
                <button className='searchForm__button'>Поиск</button>
            </form>
            <FilterCheckbox caption='Короткометражки' />
        </section>
    );
};

export default SearchForm;

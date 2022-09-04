import './FilterCheckbox.css';

const FilterCheckbox = ({ caption, isShortFilms, handleChange }) => {
    return (
        <div className='filterCheckbox'>
            <input
                type='checkbox'
                className='filterCheckbox__checkbox'
                id='testId'
                onChange={handleChange}
                value={isShortFilms}
            ></input>
            <p className='filterCheckbox__caption'>{caption}</p>
        </div>
    );
};

export default FilterCheckbox;

import './FilterCheckbox.css';

const FilterCheckbox = ({ caption }) => {
    return (
        <div className='filterCheckbox'>
            <input type='checkbox' className='filterCheckbox__checkbox'></input>
            <p className='filterCheckbox__caption'>{caption}</p>
        </div>
    );
};

export default FilterCheckbox;

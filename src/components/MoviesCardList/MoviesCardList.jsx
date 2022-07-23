import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {
    return (
        <section className='moviesCardList'>
            <div className='moviesCardList__moviesList'>
                {movies.map((movie) => (
                    <MoviesCard key={movie.id} {...movie} />
                ))}
            </div>
            <button className='moviesCardList__loadMoreBtn'>Ещё</button>
        </section>
    );
};

export default MoviesCardList;

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
    const movies = [
        {
            id: 1,
            link: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80',
            title: 'В погоне за Бенкси',
            duration: '27 минут',
        },
        {
            id: 2,
            link: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80',
            title: 'В погоне за Бенкси',
            duration: '27 минут',
        },
        {
            id: 3,
            link: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80',
            title: 'В погоне за Бенкси',
            duration: '27 минут',
        },
        {
            id: 4,
            link: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80',
            title: 'В погоне за Бенкси',
            duration: '27 минут',
        },
        {
            id: 5,
            link: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80',
            title: 'В погоне за Бенкси',
            duration: '27 минут',
        },
        {
            id: 6,
            link: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80',
            title: 'В погоне за Бенкси',
            duration: '27 минут',
        },
    ];
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList movies={movies} />
            <Footer />
        </>
    );
};

export default Movies;

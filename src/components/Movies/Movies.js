import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies() {
    return (
        <section className='movies'>
            <SearchForm />
            <MoviesCardList />
            <Preloader />
        </section>
    );
}

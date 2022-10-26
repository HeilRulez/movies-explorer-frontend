import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

export default function Moies() {
    return (
        <section className='movies'>
            <SearchForm />
            <MoviesCardList />
        </section>
    );
}
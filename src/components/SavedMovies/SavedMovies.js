import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies({ onLogin, colorStyle }) {
  return (
    <section className='savedMovies'>
      <SearchForm />
      <MoviesCardList />
    </section>
  )
}

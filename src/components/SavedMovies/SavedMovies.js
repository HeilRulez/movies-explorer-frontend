import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function SavedMovies({ loggedIn, myMovies, funcBtn, getData }) {
  return (
    <main className='savedMovies'>
      <Header loggedIn={loggedIn} />
      <SearchForm getData={getData} />
      <MoviesCardList movies={myMovies} funcBtn={funcBtn} classBtn={'moviesCard__btnDel'} />
      <Footer />
    </main>
  )
}

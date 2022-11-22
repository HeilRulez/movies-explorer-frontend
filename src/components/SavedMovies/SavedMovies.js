import './SavedMovies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import selectMovies from '../../utils/selection';

export default function SavedMovies({ loggedIn, funcBtn, data }) {

  const [renderMovies, setRenderMovies] = useState(data);
  const [errMessage, setErrMessage] = useState('');

  function search() {
    setErrMessage('');
    const foundMovies = selectMovies(data);
    if (foundMovies.length === 0) {
      setErrMessage('Ничего не найдено');
    } else {
      setRenderMovies(foundMovies)
    }
  }

  return (
    <main className='savedMovies'>
      <Header loggedIn={loggedIn} />
      <SearchForm onSub={search} />
      <MoviesCardList movies={renderMovies}
        errMessage={errMessage}
        funcBtn={funcBtn} classBtn={'moviesCard__btnDel'} />
      <Footer />
    </main>
  )
}

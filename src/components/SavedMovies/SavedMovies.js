import './SavedMovies.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function SavedMovies({ loggedIn, funcBtn, searchMovie, data, handleDownload }) {

  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    setErrMessage('');
    handleDownload();
  }, [])

  function search(phrase, checked) {
    setErrMessage('');
    if (!phrase) {
      setErrMessage('Нужно ввести ключевое слово');
    } else {
      const res = searchMovie(phrase, checked);
      if (typeof res === 'string') {
        setErrMessage(res);
      }
    }
  }

  return (
    <main className='savedMovies'>
      <Header loggedIn={loggedIn} />
      <SearchForm onSub={search} />
      <MoviesCardList movies={data}
        errMessage={errMessage}
        funcBtn={funcBtn} classBtn={'moviesCard__btnDel'} />
      <Footer />
    </main>
  )
}

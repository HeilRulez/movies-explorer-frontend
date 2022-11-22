import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';

export default function SavedMovies({ loggedIn, funcBtn, getMyMovies }) {

  const [renderMovies, setRenderMovies] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    loader()
  }, [])

  useEffect(() => {
  }, [renderMovies])

  function loader() {
    getMyMovies()
    .then(() => {
      setRenderMovies(JSON.parse(localStorage.getItem('myMovies')))
    })
  }

  function search() {
    setErrMessage('');
    getMyMovies()
    .then((res) => {
      if (res.length === 0) {
        setErrMessage('Ничего не найдено');
        return
      }
      setRenderMovies(res)
    })
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

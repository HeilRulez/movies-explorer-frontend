import './SavedMovies.css';
import mainApi from '../../utils/MainApi';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';

export default function SavedMovies({ loggedIn, funcBtn }) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loader()
  }, [])

  function selectMovies(data) {
    let sarchedMovie = data.filter(item => (
      item.nameRU.toLowerCase().includes(localStorage.getItem('phrase').toString().toLowerCase())
      ));
    if (localStorage.getItem('checked')) {
      sarchedMovie = sarchedMovie.filter(item => (item.duration < 39))
    };
    return sarchedMovie;
  }

  function loader() {
    mainApi.getSaveMovie()
    .then((res) => {
      setMovies(res);
      localStorage.setItem('myMovies', JSON.stringify(res))
    })
    .catch(err => console.error(`Ошибка ${err} при загрузке фильмов.`))

  }

  function search() {
    setMovies(selectMovies(JSON.parse(localStorage.getItem('myMovies'))));
  }

  return (
    <main className='savedMovies'>
      <Header loggedIn={loggedIn} />
      <SearchForm onSub={search} />
      <MoviesCardList movies={movies} funcBtn={funcBtn} classBtn={'moviesCard__btnDel'} />
      <Footer />
    </main>
  )
}

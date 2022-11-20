import './Movies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function Movies({ loggedIn, funcBtn, getAllMovies }) {

  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [errMessage, setErrMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preloaderShow, setPreloaderShow] = useState(false);
  const amountCard = (window.screen.width < '1280' ? (2) : (3));

  function selectMovies(data) {
    let sarchedMovie = data.filter(item => (
      item.nameRU.toLowerCase().includes(localStorage.getItem('phrase').toString().toLowerCase())
      ));
    if (localStorage.getItem('checked')) {
      sarchedMovie = sarchedMovie.filter(item => (item.duration < 40))
    };
    return sarchedMovie;
  }

  function preloader() {
    if (!localStorage.getItem('phrase')) {
      return
    } else {
      loader(movies)
    }
  }

  function loader(data) {
    if (data.length === 0) {
      setErrMessage("Ничего не найдено");
      return
    }
    setErrMessage("");
    let items = data.splice(0, amountCard);
    setMovies(data);
    setSelectedMovies(selectedMovies.concat(items));
    if (data.length !== 0) {
      setPreloaderShow(true)
    } else {
      setPreloaderShow(false)
    }
  }

  function search() {
    selectedMovies.length = 0;
    setLoading(true);
    getAllMovies()
    .then(() => {
      setMovies([]);
      if (!localStorage.getItem('phrase')) {
        setErrMessage("Нужно ввести ключевое слово");
        return
      } else {
        loader(selectMovies(JSON.parse(localStorage.getItem('allMovies'))));
      }
    })
    .catch(() => {
      setErrMessage("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
    })
    .finally(() => {
      setShowCard(true);
      setLoading(false)
    });
    }

    return (
      <main className='movies'>
        <Header loggedIn={loggedIn} />
        <SearchForm onSub={search} />
        {showCard && (
          <MoviesCardList movies={selectedMovies}
            errMessage={errMessage}
            funcBtn={funcBtn} classBtn={''} />
        )}
        {
          preloaderShow && (<Preloader load={loading} preloader={preloader} />)
        }
        <Footer />
      </main>
    );
}

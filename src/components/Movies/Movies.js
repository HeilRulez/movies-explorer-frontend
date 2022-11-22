import './Movies.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import selectMovies from '../../utils/selection';

export default function Movies({ loggedIn, funcBtn, getAllMovies, getter, setter }) {

  const [renderMovies, setRenderMovies] = useState([]);
  const [part, setPart] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [preloaderShow, setPreloaderShow] = useState(false);
  const amountCard = (window.screen.width < '1280' ? (2) : (3));

  useEffect(() => {
    loader(getter)
  }, [getter])

  function preloader() {
    if (!localStorage.getItem('phrase')) {
      return
    } else {
      loader(part)
    }
  }

  function loader(data) {
    if (data.length === 0) {
      setPreloaderShow(false);
      setErrMessage("Ничего не найдено");
      return
    }
    const movies = data.slice();
    let items = movies.splice(0, amountCard);
    setPart(movies);
    setRenderMovies(renderMovies.concat(items));
    if (data.length !== 0) {
      setPreloaderShow(true)
    } else {
      setPreloaderShow(false)
    }
  }

  function search() {
    setErrMessage('');
    setPreloaderShow(false);
    setShowCard(true);
    if (!localStorage.getItem('phrase')) {
      setErrMessage("Нужно ввести ключевое слово");
      return
    } else {
      setRenderMovies([]);
      setLoading(true);
      setPreloaderShow(true);
      getAllMovies()
      .then((res) => {
        setter(res)
      })
      .catch(() => {
        setErrMessage("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
      })
      .finally(() => {
        setLoading(false)
        setPreloaderShow(false);
      })
    }
  }

    return (
      <main className='movies'>
        <Header loggedIn={loggedIn} />
        <SearchForm onSub={search} />
        {showCard && (
          <MoviesCardList movies={renderMovies}
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

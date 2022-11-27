import './Movies.css';
import { useEffect, useState } from 'react';
import { configApi } from '../../utils/constants';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import LoaderShow from '../LoaderShow/LoaderShow';
import selectMovies from '../../utils/selection';

export default function Movies({ loggedIn, funcBtn, getAllMovies }) {

  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [part, setPart] = useState([]);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    hendleShow(JSON.parse(localStorage.getItem('selectMovies')) || []);
  }, [])

  function adder() {
    const add = part.slice(0, configApi.amountCard);
    setAllMovies(allMovies.concat(add));
    const rem = part.slice(configApi.amountCard);
    if (rem.length > 0) {
      setPart(rem);
    } else {
      setShowPreloader(false);
    }
  }

  function hendleShow(data) {
    const remShow = data.slice(0, configApi.startAmountCard());
    if (remShow.length < configApi.startAmountCard()) {
      setShowPreloader(false);
    }
    setAllMovies(remShow);
    const rem = data.slice(configApi.startAmountCard());
    if (rem !== 0) {
      if (data.length > configApi.startAmountCard() + 1) {
        setShowPreloader(true);
      }
      setPart(rem);
    }
  }

  async function search(phrase, checked) {
    setErrMessage('');
    if (!phrase) {
      setErrMessage('Нужно ввести ключевое слово');
    } else {
      setLoading(true);
      let foundMovies;
      const movies = JSON.parse(localStorage.getItem('allMovies'));
      if (movies) {
        foundMovies = selectMovies(movies, phrase, checked);
      } else {
       await getAllMovies()
        .then ((res) => {
          foundMovies = selectMovies(res, phrase, checked);
          localStorage.setItem('selectMovies', JSON.stringify(foundMovies));
        })
        .catch(() => {
          setErrMessage("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
        })
      }
      if (foundMovies.length === 0) {
        setErrMessage('Ничего не найдено');
        setLoading(false);
        return
      } else {
        localStorage.setItem('selectMovies', JSON.stringify(foundMovies));
        hendleShow(foundMovies);
      }
      setLoading(false);
    }
  }

    return (
      <main className='movies'>
        <Header loggedIn={loggedIn} />
        <SearchForm onSub={search} />
        <MoviesCardList movies={allMovies}
          errMessage={errMessage}
          funcBtn={funcBtn} />
        <LoaderShow loading={loading} />
        {
          showPreloader && (<Preloader adder={adder} />)
        }
        <Footer />
      </main>
    );
}

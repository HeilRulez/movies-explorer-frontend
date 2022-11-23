import './Movies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function Movies({ loggedIn, funcBtn, searchMovie, errMessage, data }) {

  const [renderMovies, setRenderMovies] = useState([]);
  const [part, setPart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [preloaderShow, setPreloaderShow] = useState(false);
  const amountCard = (window.screen.width < '1280' ? (2) : (3));

  function preloader() {
    // if (!localStorage.getItem('phrase')) {
    //   return
    // } else {
      loader(part)
    // }
  }

  function loader(data) {
    const movies = data.slice();
    if (movies.length !== 0) {
      setPreloaderShow(true)
      let items = movies.splice(0, amountCard);
      setPart(movies);
      setRenderMovies(renderMovies.concat(items));
    }else {
      setPreloaderShow(false)
    }
  }

  function search() {
    setPreloaderShow(false);
    setLoading(true);
    searchMovie()
    .then(() => {
      loader(data)
    })
    .finally(() => {
      setLoading(false)
      setPreloaderShow(false);
    })
  }

    return (
      <main className='movies'>
        <Header loggedIn={loggedIn} />
        <SearchForm onSub={search} />
        <MoviesCardList movies={renderMovies}
          errMessage={errMessage}
          funcBtn={funcBtn} classBtn={''} />
        {
          preloaderShow && (<Preloader load={loading} preloader={preloader} />)
        }
        <Footer />
      </main>
    );
}

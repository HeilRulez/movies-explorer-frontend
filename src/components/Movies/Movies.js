import './Movies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function Movies({
  loggedIn, funcBtn, searchMovie, errMessage, preload, showPreloader, data
}) {

  const [loading, setLoading] = useState(false);

  function preloader() {
    preload()
  }

  function search() {
    setLoading(true);
    searchMovie()
      .finally(() => {
        setLoading(false)
      })
  }

    return (
      <main className='movies'>
        <Header loggedIn={loggedIn} />
        <SearchForm onSub={search} />
        <MoviesCardList movies={data}
          errMessage={errMessage}
          funcBtn={funcBtn} />
        {
          showPreloader && (<Preloader load={loading} preloader={preloader} />)
        }
        <Footer />
      </main>
    );
}

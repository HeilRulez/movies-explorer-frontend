import './SavedMovies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function SavedMovies({ loggedIn, searchMovie, errMessage, funcBtn, data }) {

  function search() {
    searchMovie()
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

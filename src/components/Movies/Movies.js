import './Movies.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function Movies({ loggedIn, funcBtn, allMovie, getData, loading, loadMovie }) {

const [movies, setMovies] = useState([]);
const [selection, setSelection] = useState([]);

useEffect(() => {
  getData();
}, [])

function loadMovie() {
  setMovies(movies + selection.splice(0, 5));
  // setSelection(selection.slice(0, 5))
  // console.log(selection);
}

  function search() {
    if (localStorage.getItem('checked')) {
      console.log('checked');
    }
    setSelection(allMovie.filter(item => (
      item.nameRU.toLowerCase().includes(localStorage.getItem('phrase').toString().toLowerCase())
      )));
    loadMovie();
    // setMovies(allMovies.shift(0, 5));
    // setAllMovies(allMovies.splice(0, 5));
  }

    return (
        <main className='movies'>
            <Header loggedIn={loggedIn} />
            <SearchForm onSub={search} />
            <MoviesCardList movies={movies} funcBtn={funcBtn} classBtn={'moviesCard__btnAdd'} />
            <Preloader load={loading} preloader={loadMovie} />
            <Footer />
        </main>
    );
}

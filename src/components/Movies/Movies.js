import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function Movies({ loggedIn }) {
    return (
        <main className='movies'>
            <Header loggedIn={loggedIn} />
            <SearchForm />
            <MoviesCardList />
            <Preloader />
            <Footer />
        </main>
    );
}

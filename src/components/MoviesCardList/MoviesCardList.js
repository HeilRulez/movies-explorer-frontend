import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList() {
    return (
        <section className='moviesCardList'>
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </section>
    );
}

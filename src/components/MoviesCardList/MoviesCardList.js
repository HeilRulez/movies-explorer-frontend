import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ isSaved, func }) {
    return (
        <section className='moviesCardList'>
            <MoviesCard isSaved={true} funcBtn={() => func()} />
            <MoviesCard isSaved={false} funcBtn={() => func()} />
        </section>
    );
}

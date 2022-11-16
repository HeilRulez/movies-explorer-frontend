import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ movies, funcBtn, classBtn }) {
    return (
        <section className='moviesCardList'>
          {movies.map((movie) => (
            <MoviesCard key={movie.id}
              data={movie}
              classBtn={classBtn}
              funcBtn={funcBtn}/>
              ))}
        </section>
    );
}

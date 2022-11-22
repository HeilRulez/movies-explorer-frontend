import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ movies, errMessage, funcBtn, classBtn }) {
    return (
        <section className='moviesCardList'>
          {errMessage ? (<h1 className='moviesCardList__message'>{errMessage}</h1>) : (
            movies.map((movie) => (
              <MoviesCard key={movie.id || movie._id}
                data={movie}
                classBtn={classBtn}
                funcBtn={funcBtn}/>
                )))
            }
        </section>
    );
}

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ movies, errMessage, funcBtn, classBtn }) {

  function checkLike(data) {
    let classLike;
    const myMovies = JSON.parse(localStorage.getItem('myMovies'));
    if (myMovies.some(item => item.id === data.id)) {
      classLike = 'moviesCard__btnAdd';
    } else {
      classLike = 'moviesCard__btnNoAdd';
    }
    return classLike;
  }

    return (
        <section className='moviesCardList'>
          {errMessage ? (<h1 className='moviesCardList__message'>{errMessage}</h1>) : (
            movies.map((movie) => (
              <MoviesCard key={movie.id}
                data={movie}
                classBtn={classBtn ? classBtn : checkLike(movie) }
                funcBtn={funcBtn}/>
                )))
            }
        </section>
    );
}

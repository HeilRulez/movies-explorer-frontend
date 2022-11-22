import './MoviesCard.css';
import {configApi} from '../../utils/constants';

export default function MoviesCard({ data, funcBtn, classBtn }) {

  const hour = Math.floor(data.duration/60);
  const time = `${(hour !== 0) ? (`${hour}ч `) : ('')}${data.duration%60}м`;
  const myMovies = JSON.parse(localStorage.getItem('myMovies'));
  const classLike = (
    myMovies.some(item => data.id === item.id)
  )
    ? ('moviesCard__btnAdd') : ('moviesCard__btnNoAdd');

  function handleBtnClick() {
    funcBtn(data);
  }

  return (
    <section className='moviesCard'>
      <div className='moviesCard__container'>
        <h2 className='moviesCard__title'>{data.nameRU}</h2>
        <p className='moviesCard__time'>{time}</p>
        <button className={`moviesCard__btn ${!classBtn ? (classLike) : (classBtn)}`}
          onClick={handleBtnClick}
          type="button" />
      </div>
      <a href={data.trailerLink} target={'_blank'} rel={'noreferrer'}>
        <img className='moviesCard__img' src={
          (data.image.url === undefined ) ? (`${data.image}`) : (`${configApi.baseMovies}${data.image.url}`)
          } alt={data.nameEN} /></a>
    </section>
  );
}

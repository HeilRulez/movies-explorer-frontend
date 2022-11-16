import './MoviesCard.css';
import {useContext} from 'react';
import {configApi} from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function MoviesCard({ data, funcBtn, classBtn }) {

  const time = new Date(data.duration).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  // const currentUser = useContext(CurrentUserContext);
  // const isLiked = data.likes.some(item => item === currentUser._id);
  // const cardLikeBtnClassName = (`card__like ${isLiked && 'card__like_active'}`);

  return (
    <section className='moviesCard'>
      <div className='moviesCard__container'>
        <h2 className='moviesCard__title'>{data.nameRU}</h2>
        <p className='moviesCard__time'>{data.duration}</p>
        <button className={`moviesCard__btn ${classBtn}`}
          onClick={() => {funcBtn()}}
          type="button" />
      </div>
      <img className='moviesCard__img' src={`${configApi.baseMovies}${data.image.url}`} alt={data.nameEN} />
    </section>
  );
}

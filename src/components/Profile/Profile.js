import './Profile.css';
import { useContext } from 'react';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Profile ({ handleOut }) {

  // const currentUser = useContext(CurrentUserContext);

 function logOut() {
  handleOut();
 }

  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, gg!</h1>
      <form className='profile__form'>
        <div>
        <div className='profile__container'>
          <p className='profile__lable'>Имя</p>
          <input className='profile__input' />
        </div>
        <p className='profile__line'></p>
        <div className='profile__container'>
          <p className='profile__lable'>E-mail</p>
          <input className='profile__input' />
        </div>

        </div>
        <button className='profile__submit' type='submit'>Редактировать</button>
      </form>
      <button className='profile__btn' type="button">Выйти из аккаунта</button>
    </section>
  );
}

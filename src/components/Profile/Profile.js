import './Profile.css';
import Header from '../Header/Header';
import { useContext } from 'react';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Profile ({ loggedIn, handleOut }) {

  // const currentUser = useContext(CurrentUserContext);

 function logOut() {
  handleOut();
 }

  return (
    <section className='profile'>
      <Header loggedIn={loggedIn} />
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, gg!</h1>
        <form className='form'>
          <div>
          <div className='form__container'>
            <p className='form__lable'>Имя</p>
            <input className='form__input' />
          </div>
          <p className='form__line'></p>
          <div className='form__container'>
            <p className='form__lable'>E-mail</p>
            <input className='form__input' />
          </div>

          </div>
          <button className='form__submit' type='submit'>Редактировать</button>
        </form>
        <button className='profile__btn' type="button">Выйти из аккаунта</button>
      </div>
    </section>
  );
}

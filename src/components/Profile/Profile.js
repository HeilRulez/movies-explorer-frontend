import './Profile.css';
import Header from '../Header/Header';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Profile ({ loggedIn, handleOut, onSubmit }) {

  const currentUser = useContext(CurrentUserContext);
  const [email, setEmail] = useState(currentUser.email);
  const [name, setName] = useState(currentUser.name);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(name, email);
  }

  function logOut() {
    handleOut();
  }

  return (
    <section className='profile'>
      <Header loggedIn={loggedIn} />
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='form' onSubmit={handleSubmit}>
          <div>
          <div className='form__container'>
            <p className='form__lable'>Имя</p>
            <input className='form__input'
              onChange={handleChangeName}
              value={name} />
          </div>
          <p className='form__line'></p>
          <div className='form__container'>
            <p className='form__lable'>E-mail</p>
            <input className='form__input'
              onChange={handleChangeEmail}
              value={email}/>
          </div>

          </div>
          <button className='form__submit' type='submit'>Редактировать</button>
        </form>
        <button className='profile__btn' type="button" onClick={logOut} >Выйти из аккаунта</button>
      </div>
    </section>
  );
}

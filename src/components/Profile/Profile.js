import './Profile.css';
import Header from '../Header/Header';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from 'react-hook-form';

export default function Profile ({ loggedIn, handleOut, onSubmit }) {

  const { register, formState: { errors, isValid }, handleSubmit, setValue } = useForm({mode: "onChange"});
  const currentUser = useContext(CurrentUserContext);
  const [disableBtn, setDisableBtn] = useState(false);

  useEffect(() => {
    setValue('userName', currentUser.name);
    setValue('email', currentUser.email);
  }, [])

  function check(e) {
    if (e.target.name === 'userName') {
      setDisableBtn(currentUser.name !== e.target.value)
    } else if (e.target.name === 'email') {
      setDisableBtn(currentUser.email !== e.target.value)
    }
  }

  function submit(data) {
    onSubmit(data.userName, data.email);
  }

  function logOut() {
    handleOut();
  }

  return (
    <section className='profile'>
      <Header loggedIn={loggedIn} />
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='form' onChange={check} onSubmit={handleSubmit(submit)}>
          <div>
          <div className='form__container'>
            <p className='form__lable'>Имя
            <span className="form__text-error">{errors?.userName && errors?.userName?.message}</span></p>
            <input className='form__input'
              {...register('userName', {
                required: 'Не должно быть пустым',
                pattern: {value: /^[A-Za-zА-Яа-яЁё-\s]{2,30}$/,
                          message: 'Недопустимые символы'},
                minLength: {value: 2, message: 'Должно быть больше 2-х символов'},
                maxLength: {value: 30, message: 'Должно быть больше 30-и символов'}
              })} />
          </div>
          <p className='form__line'></p>
          <div className='form__container'>
            <p className='form__lable'>E-mail
              <span className="form__text-error">{errors?.email && errors?.email?.message}</span></p>
            <input className='form__input'
              {...register('email', {
                required: 'Не должно быть пустым',
                pattern: {value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-z]{2,4}/,
                message: 'Введите E-mail адрес'}
              })} />
          </div>

          </div>
          <button className={`form__submit ${(!isValid || !disableBtn) && 'form__submit_disable'}`}
            type='submit' disabled={!isValid || !disableBtn}>Редактировать</button>
        </form>
        <button className='profile__btn' type="button" onClick={logOut} >Выйти из аккаунта</button>
      </div>
    </section>
  );
}

import './Profile.css';
import Header from '../Header/Header';
import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from 'react-hook-form';

export default function Profile ({ loggedIn, handleOut, onSubmit }) {

  const { register, formState: {errors, isValid }, handleSubmit, setValue, watch } = useForm({mode: "onChange"});
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setValue('userName', currentUser.name);
    setValue('email', currentUser.email);
  }, [])

  function checkVolue() {
    watch((data) => {
      if (data.userName !== currentUser.name ||
      data.email !== currentUser.name) {
        return true;
      }
    })
  }

  function submit(data) {
    // const { userName, email } = data;
    // onSubmit(userName, email);
  }

  function logOut() {
    handleOut();
  }

  return (
    <section className='profile'>
      <Header loggedIn={loggedIn} />
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='form' onSubmit={handleSubmit(submit)}>
          <div>
          <div className='form__container'>
            <p className='form__lable'>Имя
            <span className="form__text-error">{errors?.userName && errors?.userName?.message}</span></p>
            <input className='form__input'
              {...register('userName', {
                validate: checkVolue(),
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
                validate: checkVolue(),
                required: 'Не должно быть пустым',
                pattern: {value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-z]{2,4}/,
                message: 'Введите E-mail адрес'}
              })} />
          </div>

          </div>
          <button className={`form__submit ${(!isValid) && 'form__submit_disable'}`}
            type='submit' disabled={!isValid}>Редактировать</button>
        </form>
        <button className='profile__btn' type="button" onClick={logOut} >Выйти из аккаунта</button>
      </div>
    </section>
  );
}

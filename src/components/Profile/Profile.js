import './Profile.css';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import LoaderShow from '../LoaderShow/LoaderShow';
import { configApi } from '../../utils/constants';

export default function Profile ({ loggedIn, handleOut, onSubmit, reqMessage }) {

  const { register, formState: { errors, isValid }, handleSubmit, setValue } = useForm({mode: "onChange"});
  const currentUser = useContext(CurrentUserContext);
  const [disableBtn, setDisableBtn] = useState(false);
  const [block, setBlock] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setValue('userName', currentUser.name);
    setValue('email', currentUser.email);
  }, [])

  function check(e) {
    if (e.target.name === 'userName') {
      setDisableBtn(currentUser.name === e.target.value)
    } else if (e.target.name === 'email') {
      setDisableBtn(currentUser.email === e.target.value)
    }
  }

  function submit(data) {
    setBlock(true);
    setDisableBtn(true);
    setLoading(true);
    onSubmit(data.userName, data.email)
    .then(() => {
      setBlock(false);
      setLoading(false);
    })
  }

  function logOut() {
    handleOut();
  }

  return (
    <section className='profile'>
      <Header loggedIn={loggedIn} />
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <LoaderShow loading={loading} />
        <form className='form' onChange={check} onSubmit={handleSubmit(submit)}>
          <div>
          <div className='form__container'>
            <p className='form__lable'>Имя
            <span className="form__text-error">{errors?.userName && errors?.userName?.message}</span></p>
            <input className='form__input' disabled={block}
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
            <input className='form__input' disabled={block}
              {...register('email', {
                required: 'Не должно быть пустым',
                pattern: {value: configApi.regex,
                message: 'Введите E-mail адрес'}
              })} />
          </div>

          </div>
          <span className="form__text-error profile-btn-err">{reqMessage}</span>
          <button className={`form__submit ${(disableBtn || !isValid) && 'form__submit_disable'}`}
            type='submit' disabled={disableBtn || !isValid}>Редактировать</button>
        </form>
        <button className='profile__btn' type="button" onClick={logOut} >Выйти из аккаунта</button>
      </div>
    </section>
  );
}

import './AccessComponent.css';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoaderShow from '../LoaderShow/LoaderShow';
import { configApi } from '../../utils/constants';

export default function AccessComponent({ loggedIn, link, linkPreText, linkText, headerText, btnText, reqMessage, onSubmit }) {

  const { register, formState: {errors, isValid}, handleSubmit } = useForm({mode: "onChange"});
  const [loading, setLoading] = useState(false);
  const [block, setBlock] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if(loggedIn) {
      history.push('/');
    }
  }, [loggedIn])

  function submit(data) {
    setLoading(true);
    setBlock(true);
    const { userName, email, password } = data;
    if (link === '/signin') {
      onSubmit(userName, email, password)
      .then(() => {
        setLoading(false);
        setBlock(false);
      })
    } else if (link === '/signup') {
      onSubmit(email, password)
      .then(() => {
        setLoading(false);
        setBlock(false);
      })
    }
  }

  return (
    <section className ='access'>
      <div className='access__container'>
        <div className='access__header'>
          <Link className="access__logo" to='/' />
          <h1 className ='access__title'>{headerText}</h1>
        </div>
        <LoaderShow loading={loading} />
        <form className='access-form' onSubmit={handleSubmit(submit)} name='access' noValidate>
          <div>
            {(link === '/signin') && (<><p className='access-form__text'>Имя</p>
              <input className="access-form__input" type='text'
                disabled={block}
                {...register('userName', {
                  required: 'Не должно быть пустым',
                  pattern: {value: /^[A-Za-zА-Яа-яЁё-\s]{2,30}$/,
                            message: 'Недопустимые символы'},
                  minLength: {value: 2, message: 'Должно быть больше 2-х символов'},
                  maxLength: {value: 30, message: 'Должно быть больше 30-и символов'}
                })} />
              <span className="access-form__text-error">{errors?.userName && errors?.userName?.message}</span>
              </>)}
            <p className='access-form__text'>E-mail</p>
            <input className="access-form__input" type="email"
              disabled={block}
              {...register('email', {
                required: 'Не должно быть пустым',
                pattern: {value: configApi.regex,
                          message: 'Введите E-mail адрес'}
              })} />
            <span className="access-form__text-error">{errors?.email && errors?.email?.message}</span>
            <p className='access-form__text'>Пароль</p>
            <input className="access-form__input" type="password"
              disabled={block}
              {...register('password', {
                required: 'Не должно быть пустым'
              })} />
            <span className="access-form__text-error">{errors?.password && errors?.password?.message}</span>
          </div>
          <div>
            <span className="access-form__text-error btn-err" id="btn-submit-error">{reqMessage}</span>
            <button className={`access-form__btn-submit ${(block || !isValid) && 'access-form__btn-submit_disable'}`}
              type="submit" disabled={!isValid || block}>{btnText}</button>
            <p className="access__text-forLink">
              {linkPreText}
              <Link className="access__link" to={link}>{linkText}</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

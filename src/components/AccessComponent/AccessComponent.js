import './AccessComponent.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../utils/validation';

export default function AccessComponent({ link, linkPreText, linkText, headerText, btnText, message, onSubmit }) {

  const [errMessage, setErrMessage] = useState('');
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    setErrMessage(message);
  }, [message]);

  function handleSubmit(e) {
    e.preventDefault();
    if (link === '/signin') {
      onSubmit(values.userName, values.email, values.password)
      .then(() => {
        resetForm();
      })
    } else if (link === '/signup') {
      onSubmit(values.email, values.password)
      .then(() => {
        resetForm();
      })
    }
  }

  return (
    <section className ='access'>
      <div className='access__container'>
        <div className='access__header'>
          <div className='access__logo' />
          <h1 className ='access__title'>{headerText}</h1>
        </div>
        <form className='access-form' onSubmit={handleSubmit} name='signin' noValidate>
          <div>
            {(link === '/signin') && (<><p className='access-form__text'>Имя</p>
              <input className="access-form__input"
                onChange={handleChange}
                value={values.name}
                id="nameInput" type="text" name="userName"
                required
                autoComplete="off" />
              <span className="access-form__text-error">{errors.userName}</span>
              </>)}
            <p className='access-form__text'>E-mail</p>
            <input className="access-form__input"
              onChange={handleChange}
              value={values.name}
              id="emailInput" type="email" name="email"
              required
              autoComplete="off" />
            <span className="access-form__text-error">{errors.email}</span>
            <p className='access-form__text'>Пароль</p>
            <input className="access-form__input"
              onChange={handleChange}
              value={values.name}
              id="password" type="password" name="password"
              required
              autoComplete="off" />
            <span className="access-form__text-error">{errors.password}</span>
          </div>
          <div>
            <span className="access-form__text-error btn-err" id="btn-submit-error">{errMessage}</span>
            <button className={`access-form__btn-submit ${!isValid && 'access-form__btn-submit_disable'}`}
              id="btn-submit" type="submit" disabled={!isValid}>{btnText}</button>
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

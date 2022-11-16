import './AccessComponent.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AccessComponent({ link, linkPreText, linkText, headerText, btnText, message, onSubmit }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    setErrMessage(message);
  }, [message]);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function resetForm() {
    setEmail('');
    setPassword('');
    setName('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (link === '/signin') {
      if (!email || !password || !name) {
        return
      }
      onSubmit(email, password, name)
      .then(() => {
        resetForm();
      })
    } else if (link === '/signup') {
      if (!email || !password) {
        return
      }
      onSubmit(email, password)
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
                onChange={handleChangeName}
                value={name}
                id="nameInput" type="text" name="name"
                required
                autoComplete="off" />
              <span className="access-form__text-error" id="name Input-error"> </span>
              </>)}
            <p className='access-form__text'>E-mail</p>
            <input className="access-form__input"
              onChange={handleChangeEmail}
              value={email}
              id="emailInput" type="email" name="email"
              required
              autoComplete="on" />
            <span className="access-form__text-error" id="emailInput-error"></span>
            <p className='access-form__text'>Пароль</p>
            <input className="access-form__input"
              onChange={handleChangePassword}
              value={password}
              id="password" type="password" name="password"
              required
              autoComplete="off" />
            <span className="access-form__text-error" id="password-error"></span>
          </div>
          <div>
            <span className="access-form__text-error btn-err" id="btn-submit-error">{errMessage}</span>
            <button className="access-form__btn-submit" id="btn-submit" type="submit">{btnText}</button>
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

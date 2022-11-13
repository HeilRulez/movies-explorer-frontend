import './AccessComponent.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AccessComponent({ link, linkPreText, linkText, headerText, btnText, onSubmite }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

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
    if (link === '/signup') {
      if (!email || !password || !name) {
        return
      }
      onSubmite(email, password, name)
      .then(() => {
        resetForm();
      })
    } else if (link === '/signin') {
      if (!email || !password) {
        return
      }
      onSubmite(email, password)
      .then(() => {
        resetForm();
      })
    }
  }

  return (
    <section className ='access'>
      <div className='access__header'>
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12.6667C0 8.23292 0 6.01604 0.862865 4.32258C1.62186 2.83296 2.83296 1.62186 4.32258 0.862865C6.01604 0 8.23292 0 12.6667 0H25.3333C29.7671 0 31.984 0 33.6774 0.862865C35.167 1.62186 36.3781 2.83296 37.1371 4.32258C38 6.01604 38 8.23292 38 12.6667V25.3333C38 29.7671 38 31.984 37.1371 33.6774C36.3781 35.167 35.167 36.3781 33.6774 37.1371C31.984 38 29.7671 38 25.3333 38H12.6667C8.23292 38 6.01604 38 4.32258 37.1371C2.83296 36.3781 1.62186 35.167 0.862865 33.6774C0 31.984 0 29.7671 0 25.3333V12.6667Z" fill={'#2BE080'}/>
          <circle cx="19" cy="19" r="11" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1538 19C15.1538 21.1242 16.8758 22.8462 19 22.8462C21.1242 22.8462 22.8462 21.1242 22.8462 19H25C25 22.3137 22.3137 25 19 25C15.6863 25 13 22.3137 13 19H15.1538Z" fill={'#2BE080'}/>
        </svg>
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
            autoComplete="off" />
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
          <button className="access-form__btn-submit" type="submit">{btnText}</button>
          <p className="access__text-forLink">
            {linkPreText}
            <Link className="access__link" to={link}>{linkText}</Link>
          </p>
        </div>
      </form>
    </section>
  );
}

import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export default function Header ({ loggedIn }) {

  const [openMenu, setOpenMenu] = useState(false);

  function handleOpen() {
    setOpenMenu(true);
  }

  function handleClose() {
    setOpenMenu(false);
  }

  return (
    <header className='header'>
      <Link className="header__logo" to='/' />
      {loggedIn ? (
        <div className='header__container'>
          <Navigation isOpen={openMenu} onClose={handleClose} />
          <Link className='header__link' to='/profile'>Аккаунт</Link>
          <button className={`header__bntMenu ${!openMenu && 'header__bntMenu_visible'}`} type="button" onClick={handleOpen}><span></span></button>
        </div>
        ) : (
        <nav className='header__access-container'>
          <Link className="header__signup" to='/signup'>Регистрация</Link>
          <Link className="header__signin" to='/signin'>Войти</Link>
        </nav>)}
    </header>
  )
}

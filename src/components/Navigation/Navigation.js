import './Navigation.css';
import { Link } from 'react-router-dom';


export default function Navigation ({ isOpen, onClose }) {

  function handleClose() {
    onClose(true);
  }

    return (
      <section className={`nav ${isOpen && 'nav_visible'}`}>
        <nav class="nav__container">
          <button className="nav__close" type="button" onClick={handleClose} />
          <Link className="nav__link home" to='/'>Главная</Link>
          <Link className="nav__link" to='/movies'>Фильмы</Link>
          <Link className="nav__link" to='/saved-movies'>Сохранённые фильмы</Link>
          <Link className='nav__link account' to='/profile'>Аккаунт</Link>
        </nav>
      </section>
    )
}

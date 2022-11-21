import './Navigation.css';
import { NavLink } from 'react-router-dom';


export default function Navigation ({ isOpen, onClose }) {

  function handleClose() {
    onClose(true);
  }

    return (
      <section className={`nav ${isOpen && 'nav_visible'}`}>
        <nav class="nav__container">
          <button className="nav__close" type="button" onClick={handleClose} />
          <NavLink className="nav__link home" activeClassName="nav__link_active" to='/' exact>Главная</NavLink>
          <NavLink className="nav__link" activeClassName="nav__link_active" to='/movies'>Фильмы</NavLink>
          <NavLink className="nav__link" activeClassName="nav__link_active" to='/saved-movies'>Сохранённые фильмы</NavLink>
          <NavLink className="nav__link account" activeClassName="nav__link_active" to='/profile'>Аккаунт</NavLink>
        </nav>
      </section>
    )
}

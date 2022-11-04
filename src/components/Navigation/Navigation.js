import './Navigation.css';
import { Link } from 'react-router-dom';


export default function Navigation () {

    return (
      <section className='nav'>
        <nav>
          <Link className="nav__link" to='/movies'>Фильмы</Link>
          <Link className="nav__link" to='/saved-movies'>Сохранённые фильмы</Link>
          <Link className="nav__link" to='/profile'>Аккаунт</Link>
        </nav>
      </section>
    )
}

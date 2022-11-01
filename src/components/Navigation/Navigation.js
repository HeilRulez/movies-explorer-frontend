import { Switch, Route, Link } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

export default function Header ({loggedIn}) {

    return (
      <section>
        <nav>
          <Link className="header__link" to='/movies'>Фильмы</Link>
          <Link className="header__link" to='/saved-movies'>Сохранённые фильмы</Link>
          <Link className="header__link header__link_buttnon" to='/profile'>Аккаунт</Link>
        </nav>
        <Switch>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies />
          </Route>
          <Route path='/profile'>

          </Route>
        </Switch>
      </section>
    )
}

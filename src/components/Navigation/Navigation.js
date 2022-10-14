import {Routes, Route, Link} from 'react-router-dom';              

export default function Header ({loggedIn}) {

    return (
            <nav>
                <Link className="header__link" to='/signin'>Фильмы</Link>
                <Link className="header__link" to='/signup'>Сохранённые фильмы</Link>
                <Link className="header__link header__link_buttnon" to='/signup'>Аккаунт</Link>
            </nav>
    )
}
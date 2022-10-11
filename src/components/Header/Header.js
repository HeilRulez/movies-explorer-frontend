import {useContext} from 'react';
import {useHistory, Switch, Route, Link} from 'react-router-dom';

export default function Header ({loggedIn}) {

    return (
        <header className='header'>
            <div className="header__logo"></div>
            {loggedIn ? (<Navigation />) : (
            <Switch>
                <Route path='/out'>
                    <Link className="header__link" to='/signin'>Войти</Link>
                    <Link className="header__link" to='/signup'>Регистрация</Link>
                </Route>
            </Switch>
            )}
        </header>
    )
}

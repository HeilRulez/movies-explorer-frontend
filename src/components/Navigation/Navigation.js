import {useContext} from 'react';
import {useHistory, Switch, Route, Link} from 'react-router-dom';              

export default function Header ({loggedIn}) {

    return (
                
            <Switch>
                <Route path='/in'>
                    <Link className="header__link" to='/all-films'>Фильмы</Link> 
                    <Link className="header__link" to='/save-films'>Сохранённые фильмы</Link> 
                    <Link className="header__link" to='/profile'>Аккаунт</Link> 
                </Route>
            </Switch>
    )
}
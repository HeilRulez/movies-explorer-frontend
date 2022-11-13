import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import AccessComponent from '../AccessComponent/AccessComponent';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import api from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {CurrentUserContext, DataUserContext} from '../../contexts/CurrentUserContext';

export default function App() {

const [loggedIn, setLoggedIn] = useState(false);
const [currentUser, setCurrentUser] = useState({});
const [dataUser, setDataUser] = useState({});
const [cards, setCards] = useState([]);
const [cardItem, setCardItem] = useState({});
const history = useHistory();

function onLogin(email, password) {
  return api.signin(email, password)
    .then(res => {
      // if(res._id) {
      //   setLoggedIn(true);
      //   setDataUser(res);
      //   getCards();
      //   getInfo();
      // }
    })
    .then(() => history.push('/'))
    .catch(err => {
      // setInfoMessage('Неверные данные авторизации!\n Попробуйте ещё раз.');
      // setInfoState(false);
      // setInfoShow(true);
      console.error(`Ошибка ${err} при попытке авторизации.`);
    });
}

function onRegister(email, password, name) {
  return api.signup(email, password, name)
  .then(res => {
    if(res) {
      // setInfoMessage('Вы успешно\n зарегистрировались!');
      // setInfoState(true);
      history.push('/signin');
    }
  })
  .catch((err) => {
    // setInfoMessage('Что-то пошло не так!\n Попробуйте ещё раз.');
    // setInfoState(false);
    console.error(`Ошибка ${err} при регистрации.`);
  })
  .finally(() => {
    // setInfoShow(true);
  })
}

function handleOut() {
  return api.logOut()
  .then(() => {
    setLoggedIn(false);
  })
  .catch(err => console.error(`Ошибка ${err} при выходе из аккаунта.`))
}

// useEffect(() => {
//   if (loggedIn) {
//     history.push('/')
//   }
// }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <DataUserContext.Provider value={dataUser}>
        <div className="app">
          <Switch>
            <Route path='/signin'>
              <AccessComponent
                link={'/signup'}
                linkPreText={'Ещё не зарегистрированы?'}
                linkText={'Регистрация'}
                headerText={'Рады видеть!'}
                btnText={'Войти'}
                onSubmite={onLogin} />
            </Route>
            <Route path='/signup'>
              <AccessComponent
                link={'/signin'}
                linkPreText={'Уже зарегистрированы?'}
                linkText={'Войти'}
                headerText={'Добро пожаловать!'}
                btnText={'Зарегистрироваться'}
                onSubmite={onRegister} />
            </Route>

            <ProtectedRoute loggedIn={loggedIn}
              exact
              path='/'
              component={Main} />
            <ProtectedRoute loggedIn={loggedIn}
              path='/movies'
              component={Movies} />
            <ProtectedRoute loggedIn={loggedIn}
              path='/saved-movies'
              component={SavedMovies} />
            <ProtectedRoute loggedIn={loggedIn}
              path='/profile'
              handleOut={handleOut}
              component={Profile} />

            <Route path='/*'>
              <ErrorNotFound />
            </Route>
          </Switch>
        </div>
      </DataUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

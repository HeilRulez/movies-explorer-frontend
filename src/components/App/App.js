import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import AccessComponent from '../AccessComponent/AccessComponent';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

export default function App() {

const [loggedIn, setLoggedIn] = useState(false);
const [currentUser, setCurrentUser] = useState({});
const [myMovies, setMyMovies] = useState([]);
const [allMovies, setAllMovies] = useState([]);
const [movieItem, setMovieItem] = useState({});
const [infoMessage, setInfoMessage] = useState('');
const [loading, setLoading] = useState(false);
const history = useHistory();

function resErrMes() {
  setTimeout(() => setInfoMessage(''), 3000);
}

function onLogin(email, password) {
  return mainApi.signin(email, password)
    .then(res => {
      if(res._id) {
        setLoggedIn(true);
        setCurrentUser(res);
        setMyMovies([]);
      }
    })
    .then(() => history.push('/'))
    .catch(err => {
      resErrMes();
      setInfoMessage('Неверные данные авторизации!\n Попробуйте ещё раз.');
      console.error(`Ошибка ${err} при попытке авторизации.`);
    });
}

function onRegister(email, password, name) {
  return mainApi.signup(email, password, name)
  .then(res => {
    if(res) {
      history.push('/signin');
    }
  })
  .catch((err) => {
    resErrMes();
    setInfoMessage('Что-то пошло не так!\n Попробуйте ещё раз.');
    console.error(`Ошибка ${err} при регистрации.`);
  })
}

function handleUpdateUser(name, email) {
  mainApi.sendData(name, email)
  .then((res) => {
    setCurrentUser(res);
  })
  .catch(err => console.error(`Ошибка ${err} при отправке данных профиля.`));
}

function handleMovieDelete(id) {
  mainApi.reqDelMovie(id)
  .then(() => {
    setMyMovies(myMovies.filter((item) => item._id !== id));
})
  .catch(err => console.error(`Ошибка ${err} при удалении фильма.`))
}

function handleMovieLike(movie) {
  const isLiked = movie.likes.some(item => item === currentUser._id);
  mainApi.handleLike(movie._id, !isLiked)
  //   .then(сard => {
  //     setCards((state) => state.map((c) => {
  //       return c._id === card._id ? сard : c}));
  // })
    .catch(err => console.error(`Ошибка ${err} при обработке лайка.`));
}

function getAllMovies() {
  setLoading(true);
  moviesApi.getAllMovies()
  .then((res) => {
    setAllMovies(res);
    // localStorage.setItem("data", res.map((item) => JSON.stringify(item)));
  })
  // .catch(err => console.error(`Ошибка ${err} при получении базы с фильмами.`));
  .finally(() => setLoading(false))
}

function handleOut() {
  return mainApi.logOut()
  .then(() => {
    setLoggedIn(false);
  })
  .catch(err => console.error(`Ошибка ${err} при выходе из аккаунта.`))
}

function getInfo() {
  mainApi.getUserInfo()
  .then((dataUser) => {
    setLoggedIn(true);
    setCurrentUser(dataUser)
    })
    .catch(err => console.error(`Ошибка ${err} при получении данных профиля.`));
}

useEffect(() => {
  if(loggedIn) {
    history.push('/movies');
  } else {
    getInfo();
  }
}, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route path='/signin'>
            <AccessComponent
              link={'/signup'}
              linkPreText={'Ещё не зарегистрированы?'}
              linkText={'Регистрация'}
              headerText={'Рады видеть!'}
              btnText={'Войти'}
              message={infoMessage}
              onSubmit={onLogin} />
          </Route>
          <Route path='/signup'>
            <AccessComponent
              link={'/signin'}
              linkPreText={'Уже зарегистрированы?'}
              linkText={'Войти'}
              headerText={'Добро пожаловать!'}
              btnText={'Зарегистрироваться'}
              message={infoMessage}
              onSubmit={onRegister} />
          </Route>

          <ProtectedRoute loggedIn={loggedIn}
            exact
            path='/'
            component={Main} />
          <ProtectedRoute loggedIn={loggedIn}
            path='/movies'
            getData={getAllMovies}
            allMovie={allMovies}
            funcBtn={handleMovieLike}
            loading={loading}
            component={Movies} />
          <ProtectedRoute loggedIn={loggedIn}
            path='/saved-movies'
            myMovies={myMovies}
            funcBtn={handleMovieDelete}
            component={SavedMovies} />
          <ProtectedRoute loggedIn={loggedIn}
            path='/profile'
            handleOut={handleOut}
            onSubmit={handleUpdateUser}
            component={Profile} />

          <Route path='/*'>
            <ErrorNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}
